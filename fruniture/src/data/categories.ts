// export const categories = [
//   {
//     name: "Sofas",
//     subCategories: [
//       "L Shape Sofa",
//       "3 Seater Sofa",
//       "Recliner Sofa",
//       "Sofa Cum Bed",
//     ],
//   },

//   {
//     name: "Dining Table",
//     subCategories: [
//       "4 Seater",
//       "6 Seater",
//       "Round Dining Table",
//       "Marble Dining Table",
//     ],
//   },

//   {
//     name: "Office",
//     subCategories: [
//       "Office Chair",
//       "Office Table",
//       "Study Table",
//       "Bookshelf",
//     ],
//   },
// ]

// export const categories = [
//   {
//     name: "Sofas",
//     subCategories: [
//       "L Shape Sofa",
//       "3 Seater Sofa",
//       "Recliner Sofa",
//       "Sofa Cum Bed",
//     ],
//   },
//   {
//     name: "Dining Table",
//     subCategories: [
//       "4 Seater",
//       "6 Seater",
//       "Round Dining Table",
//       "Marble Dining Table",
//     ],
//   },
//   {
//     name: "Office",
//     subCategories: [
//       "Office Chair",
//       "Office Table",
//       "Study Table",
//       "Bookshelf",
//     ],
//   },
// ]
import type { Category, CategoryBanner } from "../types"
import dining from "../assets/dining.jpg"
export const categories: Category[] = [
  {
    name: "Living Room",
    subCategories: ["Sofas & Sectionals", "Coffee Tables", "TV Stands", "Accent Chairs"],
  },
  {
    name: "Bedroom",
    subCategories: ["Beds & Frames", "Wardrobes", "Dressers", "Nightstands"],
  },
  {
    name: "Dining",
    subCategories: ["Dining Tables", "Dining Chairs", "Bar Stools", "Sideboards"],
  },
  {
    name: "Office",
    subCategories: ["Desks", "Office Chairs", "Bookshelves", "Filing Cabinets"],
  },
  {
    name: "Outdoor",
    subCategories: ["Garden Sets", "Loungers", "Parasols"],
  },
  {
    name: "Sale 🔥",
    subCategories: ["Up to 30% Off", "Clearance", "New Arrivals"],
  },
]

export const categoryBanners: CategoryBanner[] = [
  {
    label: "Sofas",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=80",
  },
  {
    label: "Dining",
    image: dining,
  },
  {
    label: "Office",
    image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=500&q=80",
  },
  {
    label: "Bedroom",
    image: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=500&q=80",
  },
]