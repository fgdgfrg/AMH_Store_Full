import dotenv from "dotenv";
dotenv.config();

export function processPayment(method, amount) {
  switch (method) {
    case "applepay":
      console.log(`💳 دفع Apple Pay بمبلغ ${amount} ريال باستخدام المفتاح: ${process.env.APPLE_PAY_KEY}`);
      break;
    case "stcpay":
      console.log(`💰 دفع STC Pay بمبلغ ${amount} ريال باستخدام المفتاح: ${process.env.STCPAY_KEY}`);
      break;
    case "visa":
      console.log(`💵 دفع Visa بمبلغ ${amount} ريال باستخدام المفتاح: ${process.env.VISA_KEY}`);
      break;
    case "bank":
      console.log(`🏦 تم اختيار التحويل البنكي بمبلغ ${amount} ريال`);
      break;
    default:
      console.log("❌ طريقة دفع غير معروفة");
  }
}
