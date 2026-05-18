import { products } from "../data/Products"
import type { Product } from "../types"
import Panel from "./Panel"

interface Props {
  open: boolean
  wishlist: Set<number>
  onClose: () => void
  onMoveToCart: (product: Product) => void
  onRemove: (id: number) => void
}

export default function WishlistPanel({
  open,
  wishlist,
  onClose,
  onMoveToCart,
  onRemove,
}: Props) {
  const wishItems = products.filter((p) => wishlist.has(p.id))

  return (
    <Panel open={open} title="🤍 Wishlist" onClose={onClose}>
      {wishItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-gray-400">
          <span className="text-5xl mb-4">🤍</span>
          <p className="text-sm text-center leading-relaxed">
            Your wishlist is empty. Heart items to save them!
          </p>
        </div>
      ) : (
        <ul className="divide-y divide-gray-100">
          {wishItems.map((product) => (
            <li key={product.id} className="flex gap-3 py-4">
              <img
                src={product.image}
                alt={product.title}
                className="w-[72px] h-[72px] object-cover rounded-lg shrink-0"
              />

              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-gray-900 truncate">
                  {product.title}
                </h4>
                <p className="text-sm font-semibold text-brown-600 mt-0.5">
                  ₹{product.price.toLocaleString("en-IN")}
                </p>
                <button
                  onClick={() => onMoveToCart(product)}
                  className="mt-2 bg-brown-600 hover:bg-brown-700 text-white text-xs font-medium px-3 py-1.5 rounded-lg transition-colors duration-200"
                >
                  Move to Cart
                </button>
              </div>

              <button
                onClick={() => onRemove(product.id)}
                title="Remove"
                className="text-gray-300 hover:text-red-500 self-start mt-1 text-sm transition-colors duration-200"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}
    </Panel>
  )
}