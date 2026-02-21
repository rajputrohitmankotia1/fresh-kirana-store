import { motion } from "framer-motion"

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#DCFCE7] to-[#F8FAFC] pt-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Fresh Groceries <br />
            Delivered <span className="text-[#15803D]">To Your Door</span>
          </h1>

          <p className="text-lg text-gray-600 mb-8">
            Order daily essentials from Fresh Kirana Store with 
            WhatsApp, QR payment, or Cash on Delivery.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#products"
              className="bg-[#15803D] text-white px-6 py-3 rounded-lg hover:scale-105 transition"
            >
              Shop Now
            </a>

            <a
              href="https://wa.me/91XXXXXXXXXX"
              className="border border-[#15803D] px-6 py-3 rounded-lg hover:bg-[#15803D] hover:text-white transition"
            >
              Order on WhatsApp
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-10 rounded-3xl shadow-2xl"
        >
          <h3 className="text-2xl font-bold mb-4 text-[#15803D]">
            Payment Options
          </h3>
          <ul className="space-y-3 text-lg">
            <li>✔ Cash on Delivery</li>
            <li>✔ QR Code Payment</li>
            <li>✔ WhatsApp Order Confirmation</li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero