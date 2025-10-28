import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

export async function sendWhatsAppMessage(to, message) {
  try {
    await axios.post(
      "https://graph.facebook.com/v17.0/me/messages",
      {
        messaging_product: "whatsapp",
        to,
        text: { body: message },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.WHATSAPP_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log("📩 تم إرسال رسالة واتساب بنجاح");
  } catch (err) {
    console.error("❌ فشل إرسال رسالة واتساب:", err.response?.data || err.message);
  }
}
