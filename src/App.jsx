import { Routes, Route } from "react-router-dom"
import Admin from "./pages/Admin"
import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import Categories from "./sections/Categories"
import Featured from "./sections/Featured"
import Payments from "./sections/Payments"
import Footer from "./components/Footer"
import CartDrawer from "./components/CartDrawer"
import Checkout from "./pages/Checkout"

function App() {
  return (
    <>
      <Navbar />
      <CartDrawer />

      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Categories />
              <Featured />
              <Payments />
              <Footer />
            </>
          }
        />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  )
}

export default App