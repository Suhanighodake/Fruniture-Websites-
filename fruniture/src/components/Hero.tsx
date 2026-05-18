import { useEffect, useState } from "react"

const images = [
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
  "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e",
  "https://images.unsplash.com/photo-1484101403633-562f891dc89a",
]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 3000)

    return () => clearInterval(slider)
  }, [])

  return (
    <section className="relative h-[85vh] overflow-hidden">

      {/* Images */}
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt="Furniture"
          className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
            current === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 flex items-center">

        <div className="text-white px-16 max-w-2xl">

          <h1 className="text-6xl font-bold leading-tight">
            Modern Furniture For Your Dream Home
          </h1>

          <p className="mt-6 text-xl">
            Discover luxury sofas, dining tables,
            office furniture and more.
          </p>

          <button className="mt-8 bg-yellow-700 hover:bg-yellow-800 px-8 py-4 rounded-lg text-lg">
            Shop Now
          </button>

        </div>

      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">

        {images.map((_, index) => (
          <div
            key={index}
            className={`w-4 h-4 rounded-full ${
              current === index
                ? "bg-yellow-500"
                : "bg-white"
            }`}
          />
        ))}

      </div>

    </section>
  )
}