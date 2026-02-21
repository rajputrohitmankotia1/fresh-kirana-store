import { motion } from "framer-motion"
import { useState } from "react"

function Hero() {
  const [location, setLocation] = useState("")

  const whatsappMessage = encodeURIComponent(
    "Hello Fresh Kirana Store, I would like to place an order."
  )

  const whatsappURL = `https://api.whatsapp.com/send?phone=919805814911&text=${whatsappMessage}`

  return (
    <section className="relative bg-gradient-to-br from-[#DCFCE7] to-[#F8FAFC] pt-28 pb-20 overflow-hidden">

      {/* FREE DELIVERY BADGE */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-[#15803D] text-white px-6 py-2 rounded-full text-sm shadow-lg">
        🚚 Free Delivery Above ₹499
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Fresh Kirana Store <br />
            <span className="text-[#15803D]">
              Daily Essentials Delivered
            </span>
          </h1>

          <p className="text-lg text-gray-600 mb-8">
            Order groceries online with Cash on Delivery, UPI, or WhatsApp.
            Fast delivery at your doorstep.
          </p>

          {/* LOCATION SELECTOR */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Enter your location (e.g., Sector 21, Chandigarh)"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full sm:w-96 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#15803D]"
            />
          </div>

          <div className="flex flex-wrap gap-4">

            <a
              href="#products"
              className="bg-[#15803D] text-white px-8 py-3 rounded-xl hover:scale-105 transition duration-300"
            >
              Shop Now
            </a>

            <a
              href={whatsappURL}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#15803D] px-8 py-3 rounded-xl hover:bg-[#15803D] hover:text-white transition duration-300"
            >
              Order on WhatsApp
            </a>

          </div>
        </motion.div>

        {/* RIGHT SIDE IMAGE CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-8 rounded-3xl shadow-2xl"
        >
          <img
            src="https://images.unsplash.com/photo-1607083206968-13611e3d76db"
            alt="Groceries"
            className="rounded-2xl object-cover w-full h-80"
          />
        </motion.div>

      </div>
    </section>
  )
}

export default Hero
