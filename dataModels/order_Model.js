const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    UserId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
   User_Address:{
      type:String,
      required:true
    },
    Products: [
      {
        ItemId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Item",
        },
        Quantity: {
          type: Number,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
