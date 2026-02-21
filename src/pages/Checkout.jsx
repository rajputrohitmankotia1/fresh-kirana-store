import { useContext, useState, useMemo } from "react"
import { CartContext } from "../context/CartContext"
import axios from "axios"
import qrImage from "../assets/scan_Pay.jpg"

const API_URL = "https://fresh-kirana-backend.onrender.com/api/orders"

function Checkout() {
  const { cartItems, total: cartTotal, clearCart } = useContext(CartContext)

  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [distance, setDistance] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("COD")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  // 🚚 Delivery Charge Logic
  const deliveryCharge = useMemo(() => {
    const km = Number(distance)

    if (!km || km <= 0) return 0
    if (km <= 3) return 15
    if (km <= 7) return 25
    if (km <= 12) return 40
    if (km <= 15) return 55
    return 60
  }, [distance])

  const finalTotal = cartTotal + deliveryCharge

  const saveOrder = async () => {
    const response = await axios.post(API_URL, {
      customerName: name,
      phone,
      address,
      distance,
      items: cartItems,
      deliveryCharge,
      totalAmount: finalTotal,
      paymentMethod
    })

    return response.data.orderId
  }

  const validateFields = () => {
    if (!name || !phone || !address || !distance) {
      setMessage("Please fill all details.")
      return false
    }

    if (cartItems.length === 0) {
      setMessage("Your cart is empty.")
      return false
    }

    return true
  }

  const handleWhatsAppOrder = async () => {
    if (!validateFields()) return

    try {
      setLoading(true)
      setMessage("")

      const orderId = await saveOrder()

      const whatsappMessage = `
New Order - Fresh Kirana Store
Order ID: ${orderId}

Name: ${name}
Phone: ${phone}
Address: ${address}
Distance: ${distance} km

Items:
${cartItems.map(item => `- ${item.name} ₹${item.price}`).join("\n")}

Items Total: ₹${cartTotal}
Delivery: ₹${deliveryCharge}
Final Total: ₹${finalTotal}
`

      const whatsappLink = `https://wa.me/919805814911?text=${encodeURIComponent(whatsappMessage)}`

      clearCart()
      window.location.href = whatsappLink

    } catch (error) {
      console.error(error)
      setMessage("Order failed. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleNormalOrder = async () => {
    if (!validateFields()) return

    try {
      setLoading(true)
      setMessage("")

      await saveOrder()

      setMessage("Order placed successfully!")
      clearCart()

    } catch (error) {
      console.error(error)
      setMessage("Order failed. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">

        {/* LEFT SECTION */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-[#15803D]">
            Checkout Details
          </h2>

          <input
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-3 w-full mb-4 rounded-lg"
          />

          <input
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border p-3 w-full mb-4 rounded-lg"
          />

          <textarea
            placeholder="Delivery Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="border p-3 w-full mb-4 rounded-lg"
          />

          <input
            type="number"
            placeholder="Distance from store (km)"
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
            className="border p-3 w-full mb-6 rounded-lg"
          />

          <h3 className="font-semibold mb-4 text-lg">
            Select Payment Method
          </h3>

          <div className="space-y-4 mb-6">

            <label className="flex items-center space-x-3">
              <input
                type="radio"
                value="COD"
                checked={paymentMethod === "COD"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <span>Cash on Delivery</span>
            </label>

            <label className="flex items-center space-x-3">
              <input
                type="radio"
                value="UPI"
                checked={paymentMethod === "UPI"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <span>UPI (Scan QR)</span>
            </label>

            <label className="flex items-center space-x-3">
              <input
                type="radio"
                value="WHATSAPP"
                checked={paymentMethod === "WHATSAPP"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <span>Order via WhatsApp</span>
            </label>

          </div>

          {paymentMethod === "UPI" && (
            <div className="mb-6 text-center">
              <img
                src={qrImage}
                alt="UPI QR"
                className="w-64 h-64 mx-auto rounded-lg shadow"
              />
            </div>
          )}

          {paymentMethod === "WHATSAPP" ? (
            <button
              onClick={handleWhatsAppOrder}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl transition"
              disabled={loading}
            >
              {loading ? "Processing..." : "Send Order on WhatsApp"}
            </button>
          ) : (
            <button
              onClick={handleNormalOrder}
              className="w-full bg-[#F97316] hover:bg-orange-600 text-white py-3 rounded-xl transition"
              disabled={loading}
            >
              {loading ? "Processing..." : "Confirm Order"}
            </button>
          )}

          {message && (
            <p className="mt-4 text-center text-green-600 font-medium">
              {message}
            </p>
          )}
        </div>

        {/* RIGHT SECTION - SUMMARY */}
        <div className="lg:sticky lg:top-32 h-fit">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6">
              Order Summary
            </h2>

            <div className="space-y-4 max-h-80 overflow-y-auto">
              {cartItems.map((item, index) => (
                <div key={index} className="flex justify-between border-b pb-2">
                  <span>{item.name}</span>
                  <span>₹{item.price}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 space-y-2 text-lg">
              <div className="flex justify-between">
                <span>Items Total</span>
                <span>₹{cartTotal}</span>
              </div>

              <div className="flex justify-between">
                <span>Delivery</span>
                <span>₹{deliveryCharge}</span>
              </div>

              <div className="flex justify-between font-bold border-t pt-3">
                <span>Final Total</span>
                <span>₹{finalTotal}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Checkout