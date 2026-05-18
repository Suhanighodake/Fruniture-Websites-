import { categoryBanners } from "../data/categories"

export default function CategoryBanner() {
  return (
    <section className="bg-white px-10 pt-14 pb-4">
      <h2 className="font-display text-3xl font-bold text-gray-900 mb-6">
        Shop by Category
      </h2>

      <div className="grid grid-cols-4 gap-4">
        {categoryBanners.map((cat) => (
          <div
            key={cat.label}
            className="relative h-44 rounded-2xl overflow-hidden cursor-pointer group"
          >
            <img
              src={cat.image}
              alt={cat.label}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex items-end p-4">
              <span className="text-white font-semibold text-base tracking-wide">
                {cat.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}