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
// UPDATE ORDER STATUS
router.put("/:id/status", async (req, res) => {
  try {
    const { status } = req.body

    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    )

    if (!updatedOrder) {
      return res.status(404).json({ error: "Order not found" })
    }

    res.json(updatedOrder)

  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

module.exports = router