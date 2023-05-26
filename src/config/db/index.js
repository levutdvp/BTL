const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect(
      // `mongodb+srv://dinhkhactuan2002:060702002@cluster0.qzxx1kq.mongodb.net/WebCouse_Learning`
      'mongodb://127.0.0.1:27017/WebCouse_Learning'
    );
    console.log("success");
  } catch (error) {
    console.log("Not Connect");
  }
}
module.exports = { connect };
