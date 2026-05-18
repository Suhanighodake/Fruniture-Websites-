export interface Product {
  id: number
  title: string
  category: string
  image: string
  price: number
}

export interface CartItem extends Product {
  qty: number
}

export type CartMap = Record<number, CartItem>

export type PanelType = "cart" | "wishlist" | "profile" | null

export interface Category {
  name: string
  subCategories: string[]
}

export interface CategoryBanner {
  label: string
  image: string
}