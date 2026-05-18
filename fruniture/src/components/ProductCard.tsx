type ProductProps = {
  title: string
  image: string
  price: number
}

export default function ProductCard({
  title,
  image,
  price,
}: ProductProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 duration-300">

      <img
        src={image}
        alt={title}
        className="h-72 w-full object-cover"
      />

      <div className="p-4">
        <h2 className="text-xl font-semibold">
          {title}
        </h2>

        <p className="text-yellow-700 text-lg mt-2">
          ₹ {price}
        </p>

        <button className="mt-4 bg-yellow-700 text-white px-5 py-2 rounded-lg">
          Add To Cart
        </button>
      </div>
    </div>
  )
}