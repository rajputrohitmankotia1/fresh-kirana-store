import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

const categories = [
  {
    name: "Fruits & Vegetables",
    slug: "fruits",
    image:
      "https://images.unsplash.com/photo-1571687949920-67a3c0b1f1ad"
  },
  {
    name: "Dairy",
    slug: "dairy",
    image:
      "https://images.unsplash.com/photo-1628088062854-d1870b4553da"
  },
  {
    name: "Rice & Grains",
    slug: "grains",
    image:
      "https://images.unsplash.com/photo-1604908177522-0403a0c99e0f"
  },
  {
    name: "Pantry",
    slug: "pantry",
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c"
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
      "https://images.unsplash.com/photo-1590080875515-8f3a8dc5735e"
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">

          {categories.map((category, index) => (
            <motion.div
              key={category.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              onClick={() => navigate(`/category/${category.slug}`)}
              className="relative cursor-pointer rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 group"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-48 object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

              <div className="absolute bottom-6 left-6 text-white text-lg md:text-xl font-semibold">
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
