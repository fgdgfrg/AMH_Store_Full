import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ اتصال قاعدة البيانات ناجح"))
  .catch((err) => console.error("❌ خطأ في الاتصال:", err));
