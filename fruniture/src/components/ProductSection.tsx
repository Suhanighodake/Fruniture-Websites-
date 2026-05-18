import type { CartMap, Product } from "../types"
import ProductCard from "./ProductCard"
import dining from "../assets/dining.jpg"
import officeTable from "../assets/officetable.jpg"
const products: Product[] = [
  {
    id: 1,
    title: "Luxury Sofa",
    category: "Living Room",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc",
    price: 45000,
  },
  {
    id: 2,
    title: "Dining Table",
    category: "Dining",
    image: dining,
    price: 30000,
  },
  {
    id: 3,
    title: "Office Table",
    category: "Office",
    image: officeTable,
    price: 12000,
  },
]

interface Props {
  cart: CartMap
  wishlist: Set<number>
  searchQuery: string
  onAddToCart: (product: Product) => void
  onToggleWishlist: (product: Product) => void
}

export default function ProductSection({
  cart,
  wishlist,
  searchQuery,
  onAddToCart,
  onToggleWishlist,
}: Props) {
  const filtered = products.filter((p) => {
    const q = searchQuery.toLowerCase()
    return (
      p.title.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
    )
  })

  return (
    <section id="products" className="px-10 py-16 bg-[#faf9f6]">
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <h2 className="font-display text-4xl font-bold text-gray-900">
          {searchQuery ? `Results for "${searchQuery}"` : "Featured Products"}
        </h2>
        <a
          href="#!"
          className="text-brown-600 hover:text-brown-700 text-sm font-medium underline-offset-4 hover:underline"
        >
          View All →
        </a>
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <p className="text-center text-gray-400 py-20 text-base">
          No products found. Try a different search.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              inCart={!!cart[product.id]}
              inWishlist={wishlist.has(product.id)}
              onAddToCart={() => onAddToCart(product)}
              onToggleWishlist={() => onToggleWishlist(product)}
            />
          ))}
        </div>
      )}
    </section>
  )
}