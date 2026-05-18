// type ProductProps = {
//   title: string
//   image: string
//   price: number
// }

// export default function ProductCard({
//   title,
//   image,
//   price,
// }: ProductProps) {
//   return (
//     <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 duration-300">

//       <img
//         src={image}
//         alt={title}
//         className="h-72 w-full object-cover"
//       />

//       <div className="p-4">
//         <h2 className="text-xl font-semibold">
//           {title}
//         </h2>

//         <p className="text-yellow-700 text-lg mt-2">
//           ₹ {price}
//         </p>

//         <button className="mt-4 bg-yellow-700 text-white px-5 py-2 rounded-lg">
//           Add To Cart
//         </button>
//       </div>
//     </div>
//   )
// }

import { FaHeart, FaRegHeart } from "react-icons/fa"
import type { Product } from "../types"

interface Props {
  product: Product
  inCart: boolean
  inWishlist: boolean
  onAddToCart: () => void
  onToggleWishlist: () => void
}

export default function ProductCard({
  product,
  inCart,
  inWishlist,
  onAddToCart,
  onToggleWishlist,
}: Props) {
  const { title, category, image, price } = product

  return (
   <div className="relative group rounded-3xl overflow-hidden h-[420px] shadow-lg">

  {/* Image */}
  <img
    src={image}
    alt={title}
    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/30"></div>

  {/* Wishlist */}
  <button
    onClick={onToggleWishlist}
    className={`absolute top-4 right-4 w-10 h-10 rounded-full backdrop-blur-md bg-white/20 flex items-center justify-center transition-all duration-300 ${
      inWishlist
        ? "text-red-500"
        : "text-white hover:text-red-400"
    }`}
  >
    {inWishlist ? (
      <FaHeart size={18} />
    ) : (
      <FaRegHeart size={18} />
    )}
  </button>

  {/* Content */}
  <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">

    {/* Category */}
    <p className="uppercase tracking-[3px] text-sm text-gray-200 mb-2">
      {category}
    </p>

    {/* Title */}
    <h3 className="text-3xl font-bold mb-3">
      {title}
    </h3>

    {/* Bottom */}
    <div className="flex items-center justify-between">

      {/* Price */}
      <p className="text-2xl font-semibold">
        ₹{price.toLocaleString("en-IN")}
      </p>

      {/* Button */}
      <button
        onClick={onAddToCart}
        className={`px-5 py-3 rounded-xl font-medium transition-all duration-300 ${
          inCart
            ? "bg-green-600 text-white"
            : "bg-white text-black hover:bg-gray-200"
        }`}
      >
        {inCart ? "✓ Added" : "Add To Cart"}
      </button>
    </div>
  </div>
</div>
  )
}