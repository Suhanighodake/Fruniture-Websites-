import ProductCard from "./ProductCard"

const products = [
  {
    title: "Luxury Sofa",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc",
    price: 45000,
  },

  {
    title: "Dining Table",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    price: 30000,
  },

  {
    title: "Office Chair",
    image:
      "https://images.unsplash.com/photo-1580480055273-228ff5388ef8",
    price: 12000,
  },
]

export default function ProductSection() {
  return (
    <section className="px-10 py-16 bg-gray-100">

      <h1 className="text-4xl font-bold mb-10">
        Featured Products
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

        {products.map((product) => (
          <ProductCard {...product} />
        ))}

      </div>
    </section>
  )
}