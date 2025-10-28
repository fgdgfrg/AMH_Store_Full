import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

// الاتصال بقاعدة البيانات MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ تم الاتصال بقاعدة البيانات MongoDB"))
  .catch((err) => console.error("❌ فشل الاتصال بقاعدة البيانات:", err));

// نموذج المستخدم
const userSchema = new mongoose.Schema({
  email: String,
  phone: String,
  password: String,
  verified: { type: Boolean, default: false },
});
const User = mongoose.model("User", userSchema);

// نموذج الحسابات (المنتجات)
const accountSchema = new mongoose.Schema({
  category: String,
  title: String,
  description: String,
  price: Number,
  image: String,
  sold: { type: Boolean, default: false },
});
const Account = mongoose.model("Account", accountSchema);

// نموذج الطلبات
const orderSchema = new mongoose.Schema({
  userId: String,
  items: Array,
  totalPrice: Number,
  paymentMethod: String,
  date: { type: Date, default: Date.now },
});
const Order = mongoose.model("Order", orderSchema);

// نموذج التقييمات
const reviewSchema = new mongoose.Schema({
  userId: String,
  comment: String,
  rating: Number,
  productId: String,
});
const Review = mongoose.model("Review", reviewSchema);

// ✅ تسجيل المستخدم الجديد
app.post("/api/register", async (req, res) => {
  try {
    const { email, phone } = req.body;
    const user = new User({ email, phone });
    await user.save();
    res.json({ message: "تم التسجيل بنجاح" });
  } catch (err) {
    res.status(500).json({ error: "حدث خطأ أثناء التسجيل" });
  }
});

// ✅ تسجيل الدخول
app.post("/api/login", async (req, res) => {
  const { email, phone } = req.body;
  const user = await User.findOne({ $or: [{ email }, { phone }] });
  if (!user) return res.status(404).json({ error: "المستخدم غير موجود" });
  res.json({ message: "تم تسجيل الدخول بنجاح", user });
});

// ✅ جلب المنتجات
app.get("/api/accounts", async (req, res) => {
  const accounts = await Account.find();
  res.json(accounts);
});

// ✅ إنشاء طلب جديد
app.post("/api/order", async (req, res) => {
  const { userId, items, totalPrice, paymentMethod } = req.body;
  const order = new Order({ userId, items, totalPrice, paymentMethod });
  await order.save();

  // إرسال بريد إلكتروني بعد الشراء
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: "AMH STORE <no-reply@amhstore.com>",
    to: process.env.ADMIN_EMAIL,
    subject: "عملية شراء جديدة",
    text: `تم شراء منتجات جديدة من المستخدم ${userId}`,
  });

  res.json({ message: "تم تنفيذ الطلب بنجاح ✅" });
});

// ✅ إضافة تقييم
app.post("/api/review", async (req, res) => {
  const { userId, comment, rating, productId } = req.body;
  const review = new Review({ userId, comment, rating, productId });
  await review.
