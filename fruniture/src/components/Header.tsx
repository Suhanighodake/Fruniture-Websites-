import {
  FaHeart,
  FaShoppingCart,
  FaUser,
  FaSearch,
} from "react-icons/fa"

export default function Header() {
  return (
    <header className="shadow-md sticky top-0 bg-white z-50">
      <div className="flex items-center justify-between px-10 py-4">

        {/* Logo */}
        <h1 className="text-3xl font-bold text-yellow-700">
          WoodNest
        </h1>

        {/* Search */}
        <div className="flex items-center border rounded-lg overflow-hidden w-[40%]">
          <input
            type="text"
            placeholder="Search furniture..."
            className="w-full px-4 py-2 outline-none"
          />

          <button className="bg-yellow-700 text-white px-4 py-3">
            <FaSearch />
          </button>
        </div>

        {/* Icons */}
        <div className="flex gap-6 text-2xl text-gray-700">
          <FaHeart className="cursor-pointer hover:text-yellow-700" />
          <FaShoppingCart className="cursor-pointer hover:text-yellow-700" />
          <FaUser className="cursor-pointer hover:text-yellow-700" />
        </div>

      </div>
    </header>
  )
}