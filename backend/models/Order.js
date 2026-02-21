const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
  customerName: {
    type: String,
    required: true
  },

  phone: {
    type: String,
    required: true
  },

  address: {
    type: String,
    required: true
  },

  distance: {
    type: Number,
    default: 0
  },

  items: {
    type: Array,
    required: true
  },

  deliveryCharge: {
    type: Number,
    default: 0
  },

  totalAmount: {
    type: Number,
    required: true
  },

  paymentMethod: {
    type: String,
    enum: ["COD", "UPI", "WHATSAPP"],
    required: true
  },

  status: {
    type: String,
    enum: ["Pending", "Packed", "Out for Delivery", "Delivered", "Cancelled"],
    default: "Pending"
  }

}, { timestamps: true })

module.exports = mongoose.model("Order", orderSchema)