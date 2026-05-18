import type { CartMap } from "../types"
import Panel from "./Panel"

interface Props {
  open: boolean
  cart: CartMap
  onClose: () => void
  onChangeQty: (id: number, delta: number) => void
  onRemove: (id: number) => void
  onCheckout: () => void
}

export default function CartPanel({
  open,
  cart,
  onClose,
  onChangeQty,
  onRemove,
  onCheckout,
}: Props) {
  const items = Object.values(cart)
  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0)
  const totalQty = items.reduce((sum, i) => sum + i.qty, 0)

  const footer =
    items.length > 0 ? (
      <>
        <div className="flex justify-between font-semibold text-base text-gray-900 mb-3">
          <span>Total ({totalQty} items)</span>
          <span>₹{total.toLocaleString("en-IN")}</span>
        </div>
        <button
          onClick={onCheckout}
          className="w-full bg-brown-600 hover:bg-brown-700 text-white py-3.5 rounded-xl font-semibold text-sm transition-colors duration-200"
        >
          Proceed to Checkout →
        </button>
      </>
    ) : undefined

  return (
    <Panel open={open} title="🛒 Your Cart" onClose={onClose} footer={footer}>
      {items.length === 0 ? (
        <EmptyState icon="🛒" message="Your cart is empty. Start adding furniture!" />
      ) : (
        <ul className="divide-y divide-gray-100">
          {items.map((item) => (
            <li key={item.id} className="flex gap-3 py-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-[72px] h-[72px] object-cover rounded-lg shrink-0"
              />

              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-gray-900 truncate">
                  {item.title}
                </h4>
                <p className="text-sm font-semibold text-brown-600 mt-0.5">
                  ₹{(item.price * item.qty).toLocaleString("en-IN")}
                </p>

                {/* Qty controls */}
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => onChangeQty(item.id, -1)}
                    className="w-7 h-7 bg-brown-100 hover:bg-brown-400/20 text-brown-600 rounded-md font-bold text-sm flex items-center justify-center transition-colors"
                  >
                    −
                  </button>
                  <span className="text-sm font-bold w-5 text-center">{item.qty}</span>
                  <button
                    onClick={() => onChangeQty(item.id, 1)}
                    className="w-7 h-7 bg-brown-100 hover:bg-brown-400/20 text-brown-600 rounded-md font-bold text-sm flex items-center justify-center transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={() => onRemove(item.id)}
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

function EmptyState({ icon, message }: { icon: string; message: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-gray-400">
      <span className="text-5xl mb-4">{icon}</span>
      <p className="text-sm text-center leading-relaxed">{message}</p>
    </div>
  )
}