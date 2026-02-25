const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {    
    name: {
      type: String,
      required: true,
      minlength: 3
    },
    description: {
      type: String,
      required: true,
      minlength: 20
    },
    price: {
      type: Number,
      required: true,
      minlength: 2
    },
    stock: {
      type: Number,
      required: true,
      minlength: 2
    },
    category: {
      type: String,
      enum: ["electronics", "clothing", "home", "other"]
    },
    isAvailable: {
      type: Boolean,
      default: true
    }
    // createdBy: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "User",
    //   required: true
    // }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);