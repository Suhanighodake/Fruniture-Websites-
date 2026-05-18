// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./pages/login";
// import Home from "./pages/Home";
// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/home" element={<Home />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import { useState, useCallback, useRef } from "react"
import type { CartMap, PanelType, Product } from "./types"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import ProductSection from "./components/ProductSection"
import Footer from "./components/Footer"
import CartPanel from "./components/Cartpanel"
import WishlistPanel from "./components/Wishlistpanel"
import ProfilePanel from "./components/Profilepanel"
import CategoryBanner from "./components/Categorybanner"

type ToastProps = {
  message: string
  visible: boolean
}

function Toast({ message, visible }: ToastProps) {
  if (!visible) return null
  return (
    <div className="toast" role="status" aria-live="polite">
      {message}
    </div>
  )
}

export default function App() {
  // ── State ─────────────────────────────────────────────────────
  const [cart, setCart] = useState<CartMap>({})
  const [wishlist, setWishlist] = useState<Set<number>>(new Set())
  const [openPanel, setOpenPanel] = useState<PanelType>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [toastMsg, setToastMsg] = useState("")
  const [toastVisible, setToastVisible] = useState(false)
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  // ── Toast ─────────────────────────────────────────────────────
  const showToast = useCallback((msg: string) => {
    if (toastTimer.current) clearTimeout(toastTimer.current)
    setToastMsg(msg)
    setToastVisible(true)
    toastTimer.current = setTimeout(() => setToastVisible(false), 2800)
  }, [])

  // ── Cart ──────────────────────────────────────────────────────
  const addToCart = useCallback(
    (product: Product) => {
      setCart((prev) => {
        const existing = prev[product.id]
        return {
          ...prev,
          [product.id]: existing
            ? { ...existing, qty: existing.qty + 1 }
            : { ...product, qty: 1 },
        }
      })
      showToast(`"${product.title}" added to cart`)
    },
    [showToast]
  )

  const changeQty = useCallback((id: number, delta: number) => {
    setCart((prev) => {
      const item = prev[id]
      if (!item) return prev
      const newQty = item.qty + delta
      if (newQty <= 0) {
        const next = { ...prev }
        delete next[id]
        return next
      }
      return { ...prev, [id]: { ...item, qty: newQty } }
    })
  }, [])

  const removeFromCart = useCallback((id: number) => {
    setCart((prev) => {
      const next = { ...prev }
      delete next[id]
      return next
    })
  }, [])

  // ── Wishlist ──────────────────────────────────────────────────
  const toggleWishlist = useCallback(
    (product: Product) => {
      setWishlist((prev) => {
        const next = new Set(prev)
        if (next.has(product.id)) {
          next.delete(product.id)
          showToast(`Removed from wishlist`)
        } else {
          next.add(product.id)
          showToast(`"${product.title}" saved to wishlist`)
        }
        return next
      })
    },
    [showToast]
  )

  const moveToCart = useCallback(
    (product: Product) => {
      setWishlist((prev) => {
        const next = new Set(prev)
        next.delete(product.id)
        return next
      })
      addToCart(product)
    },
    [addToCart]
  )

  const removeFromWishlist = useCallback((id: number) => {
    setWishlist((prev) => {
      const next = new Set(prev)
      next.delete(id)
      return next
    })
  }, [])

  // ── Derived ───────────────────────────────────────────────────
  const cartCount = Object.values(cart).reduce((s, i) => s + i.qty, 0)
  const wishCount = wishlist.size

  return (
    <>
      <Header
        cartCount={cartCount}
        wishCount={wishCount}
        searchQuery={searchQuery}
        onSearch={setSearchQuery}
        onOpenPanel={setOpenPanel}
      />

      <Navbar />

      <Hero />

      <CategoryBanner/>

      <ProductSection
        cart={cart}
        wishlist={wishlist}
        searchQuery={searchQuery}
        onAddToCart={addToCart}
        onToggleWishlist={toggleWishlist}
      />

      <Footer />

      {/* ── Panels ── */}
      <CartPanel
        open={openPanel === "cart"}
        cart={cart}
        onClose={() => setOpenPanel(null)}
        onChangeQty={changeQty}
        onRemove={removeFromCart}
        onCheckout={() => showToast("Proceeding to checkout…")}
      />

      <WishlistPanel
        open={openPanel === "wishlist"}
        wishlist={wishlist}
        onClose={() => setOpenPanel(null)}
        onMoveToCart={moveToCart}
        onRemove={removeFromWishlist}
      />

      <ProfilePanel
        open={openPanel === "profile"}
        cartCount={cartCount}
        wishCount={wishCount}
        onClose={() => setOpenPanel(null)}
        onLogout={() => showToast("Logged out successfully")}
      />

      <Toast message={toastMsg} visible={toastVisible} />
    </>
  )
}