// import { categories } from "../data/categories"

// export default function Navbar() {
//   return (
//     <nav className="bg-yellow-700 text-white">

//       {/* Center Navbar */}
//       <ul className="flex justify-center gap-16 py-4 text-lg font-medium">

//         {categories.map((category) => (
//           <li
//             key={category.name}
//             className="relative group cursor-pointer"
//           >
//             {category.name}

//             {/* Dropdown */}
//             <div className="absolute hidden group-hover:block bg-white text-black shadow-lg mt-3 w-60 rounded-lg p-4 z-50">

//               {category.subCategories.map((item) => (
//                 <p
//                   key={item}
//                   className="py-2 hover:text-yellow-700 cursor-pointer"
//                 >
//                   {item}
//                 </p>
//               ))}

//             </div>
//           </li>
//         ))}

//       </ul>
//     </nav>
//   )
// }

import { categories } from "../data/categories"

export default function Navbar() {
  return (
    <nav className="bg-brown-600">
      <ul className="flex justify-center list-none">
        {categories.map((cat) => (
          <li key={cat.name} className="relative group">
            {/* Nav link */}
            <a
              href="#!"
              className="block px-7 py-3.5 text-sm font-medium text-black hover:bg-white/15 hover:text-gray-500 transition-colors duration-200 tracking-wide"
            >
              {cat.name}
            </a>

            {/* Dropdown */}
            <div className="absolute top-full left-0 bg-white text-gray-800 shadow-xl rounded-xl min-w-[200px] py-2 z-50 hidden group-hover:block">
              {cat.subCategories.map((sub) => (
                <a
                  key={sub}
                  href="#!"
                  className="block px-5 py-2.5 text-sm text-gray-600 hover:bg-brown-100 hover:text-brown-600 hover:pl-7 transition-all duration-150"
                >
                  {sub}
                </a>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </nav>
  )
}