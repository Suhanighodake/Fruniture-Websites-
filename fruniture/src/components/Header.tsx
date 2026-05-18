import { FaHeart, FaShoppingCart, FaUser, FaSearch } from "react-icons/fa"
import type { PanelType } from "../types/index"

interface Props {
  cartCount: number
  wishCount: number
  searchQuery: string
  onSearch: (q: string) => void
  onOpenPanel: (panel: PanelType) => void
}

export default function Header({
  cartCount,
  wishCount,
  searchQuery,
  onSearch,
  onOpenPanel,
}: Props) {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="flex items-center justify-between px-10 py-4 gap-4">

        {/* Logo */}
        <h1 className="font-display text-3xl font-bold text-brown-600 whitespace-nowrap tracking-tight">
          WoodNest
        </h1>

        {/* Search */}
        <div className="flex flex-1 max-w-xl border border-gray-200 rounded-xl overflow-hidden shadow-sm">
          <input
            type="text"
            placeholder="Search furniture..."
            value={searchQuery}
            onChange={(e) => onSearch(e.target.value)}
            className="flex-1 px-4 py-2.5 text-sm outline-none font-sans bg-white"
          />
          <button className="bg-brown-600 hover:bg-brown-700 text-white px-5 py-2.5 transition-colors duration-200">
            <FaSearch size={14} />
          </button>
        </div>

        {/* Icon Buttons */}
        <div className="flex items-center gap-1">

          {/* Wishlist */}
          <button
            onClick={() => onOpenPanel("wishlist")}
            className="relative p-3 rounded-xl text-gray-500 hover:bg-brown-50 hover:text-brown-600 transition-all duration-200"
            title="Wishlist"
          >
            <FaHeart size={20} />
            {wishCount > 0 && (
              <span className="absolute top-1 right-1 bg-red-500 text-white text-[10px] font-bold rounded-full w-[18px] h-[18px] flex items-center justify-center">
                {wishCount}
              </span>
            )}
          </button>

          {/* Cart */}
          <button
            onClick={() => onOpenPanel("cart")}
            className="relative p-3 rounded-xl text-gray-500 hover:bg-brown-50 hover:text-brown-600 transition-all duration-200"
            title="Cart"
          >
            <FaShoppingCart size={20} />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 bg-red-500 text-white text-[10px] font-bold rounded-full w-[18px] h-[18px] flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          {/* Profile */}
          <button
            onClick={() => onOpenPanel("profile")}
            className="relative p-3 rounded-xl text-gray-500 hover:bg-brown-50 hover:text-brown-600 transition-all duration-200"
            title="My Account"
          >
            <FaUser size={20} />
          </button>

        </div>
      </div>
    </header>
  )
}