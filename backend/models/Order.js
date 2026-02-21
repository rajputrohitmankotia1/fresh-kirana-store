const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
  customerName: String,
  phone: String,
  address: String,
  items: Array,
  totalAmount: Number,
  paymentMethod: String,
  status: {
    type: String,
    default: "pending"
  }
}, { timestamps: true })

module.exports = mongoose.model("Order", orderSchema)