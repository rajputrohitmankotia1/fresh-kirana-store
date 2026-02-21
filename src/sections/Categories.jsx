import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

const categories = [
  {
    name: "Fruits & Vegetables",
    slug: "fruits",
    image:
      "https://images.unsplash.com/photo-1610832958506-aa56368176cf"
  },
  {
    name: "Dairy",
    slug: "dairy",
    image:
      "https://images.unsplash.com/photo-1585238342028-4f6db9c01f1c"
  },
  {
    name: "Rice & Grains",
    slug: "grains",
    image:
      "https://images.unsplash.com/photo-1604328698692-f76ea9498e76"
  },
  {
    name: "Pantry",
    slug: "pantry",
    image:
      "https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
  },
  {
    name: "Household",
    slug: "household",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952"
  },
  {
    name: "Snacks & Beverages",
    slug: "snacks",
    image:
      "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b"
  }
]

function Categories() {
  const navigate = useNavigate()

  return (
    <section id="categories" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Shop by Category
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

          {categories.map((category, index) => (
            <motion.div
              key={category.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              onClick={() => navigate(`/category/${category.slug}`)}
              className="relative cursor-pointer rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 group"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-40 object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition duration-300"></div>

              <div className="absolute bottom-4 left-4 text-white font-semibold text-sm md:text-base">
                {category.name}
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Categories
