import { categories } from "../data/categories"

export default function Navbar() {
  return (
    <nav className="bg-yellow-700 text-white">

      {/* Center Navbar */}
      <ul className="flex justify-center gap-16 py-4 text-lg font-medium">

        {categories.map((category) => (
          <li
            key={category.name}
            className="relative group cursor-pointer"
          >
            {category.name}

            {/* Dropdown */}
            <div className="absolute hidden group-hover:block bg-white text-black shadow-lg mt-3 w-60 rounded-lg p-4 z-50">

              {category.subCategories.map((item) => (
                <p
                  key={item}
                  className="py-2 hover:text-yellow-700 cursor-pointer"
                >
                  {item}
                </p>
              ))}

            </div>
          </li>
        ))}

      </ul>
    </nav>
  )
}