const express = require("express")
const router = express.Router()
const Order = require("../models/Order")

// CREATE ORDER
router.post("/", async (req, res) => {
  try {
    console.log("Incoming order:", req.body)

    const newOrder = new Order(req.body)
    const savedOrder = await newOrder.save()

    res.status(201).json({
      success: true,
      orderId: savedOrder._id,
      order: savedOrder
    })

  } catch (error) {
    console.log("Order Error:", error)
    res.status(500).json({
      success: false,
      error: error.message
    })
  }
})

// GET ALL ORDERS
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 })
    res.json(orders)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

module.exports = router