import { useState, useEffect, useContext } from "react"
import { motion } from "framer-motion"
import { CartContext } from "../context/CartContext"
import { Link, useLocation } from "react-router-dom"

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { cartItems, setIsCartOpen } = useContext(CartContext)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

        {/* LOGO → Redirects Home */}
        <Link
          to="/"
          className="text-2xl font-bold text-[#15803D] hover:opacity-80 transition"
        >
          Fresh Kirana Store
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 font-medium items-center">

          {/* Show Home button only if NOT on homepage */}
          {location.pathname !== "/" && (
            <Link
              to="/"
              className="hover:text-[#F97316] transition"
            >
              Home
            </Link>
          )}

          {location.pathname === "/" && (
            <>
              <a href="#categories" className="hover:text-[#F97316] transition">
                Categories
              </a>
              <a href="#products" className="hover:text-[#F97316] transition">
                Products
              </a>
              <a href="#about" className="hover:text-[#F97316] transition">
                About
              </a>
            </>
          )}

          {/* Cart Button */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative text-2xl"
          >
            🛒
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                {cartItems.length}
              </span>
            )}
          </button>

        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar