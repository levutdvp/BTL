const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slug = require("mongoose-slug-generator");
mongoose.plugin(slug);
const TroGiup = new Schema(
  {
    name: {
      type: String,
      trim: true,
      require: [true, "Tên bắt buộc phải có"],
    },
    slug: {
      type: String,
      slug: "name",
      unique: true,
    },
    email: {
      type: String,
      require: [true, "Email bắt buộc phải có"],
    },
    Sdt: {
      type: Number,
    },
    Question: {
      type: String,
    },
    Date: {
      type: Date,
    },
  },
  {
    collection: "Tro_Giup",
  }
);
module.exports = mongoose.model("TroGiup", TroGiup);
