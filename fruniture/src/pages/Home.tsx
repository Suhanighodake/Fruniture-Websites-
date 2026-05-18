import { useState, useCallback, useRef } from "react";

import type {
  CartMap,
  PanelType,
  Product,
} from "../types";

import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductSection from "../components/ProductSection";
import Footer from "../components/Footer";
import CartPanel from "../components/Cartpanel";
import WishlistPanel from "../components/Wishlistpanel";
import ProfilePanel from "../components/Profilepanel";
import CategoryBanner from "../components/Categorybanner";

type ToastProps = {
  message: string;
  visible: boolean;
};

function Toast({
  message,
  visible,
}: ToastProps) {
  if (!visible) return null;

  return (
    <div className="toast">
      {message}
    </div>
  );
}

export default function Home() {
  const [cart, setCart] = useState<CartMap>({});
  const [wishlist, setWishlist] =
    useState<Set<number>>(new Set());

  const [openPanel, setOpenPanel] =
    useState<PanelType>(null);

  const [searchQuery, setSearchQuery] =
    useState("");

  const [toastMsg, setToastMsg] =
    useState("");

  const [toastVisible, setToastVisible] =
    useState(false);

  const toastTimer =
    useRef<ReturnType<typeof setTimeout> | null>(
      null
    );

  const showToast = useCallback(
    (msg: string) => {
      if (toastTimer.current)
        clearTimeout(toastTimer.current);

      setToastMsg(msg);
      setToastVisible(true);

      toastTimer.current = setTimeout(
        () => setToastVisible(false),
        2500
      );
    },
    []
  );

  const addToCart = useCallback(
    (product: Product) => {
      setCart((prev) => {
        const existing = prev[product.id];

        return {
          ...prev,
          [product.id]: existing
            ? {
                ...existing,
                qty: existing.qty + 1,
              }
            : {
                ...product,
                qty: 1,
              },
        };
      });

      showToast(
        `"${product.title}" added to cart`
      );
    },
    [showToast]
  );

  const toggleWishlist = useCallback(
    (product: Product) => {
      setWishlist((prev) => {
        const next = new Set(prev);

        if (next.has(product.id)) {
          next.delete(product.id);
        } else {
          next.add(product.id);
        }

        return next;
      });
    },
    []
  );

  const cartCount = Object.values(cart).reduce(
    (s, i) => s + i.qty,
    0
  );

  const wishCount = wishlist.size;

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

      <CategoryBanner />

      <ProductSection
        cart={cart}
        wishlist={wishlist}
        searchQuery={searchQuery}
        onAddToCart={addToCart}
        onToggleWishlist={toggleWishlist}
      />

      <Footer />

      <CartPanel
        open={openPanel === "cart"}
        cart={cart}
        onClose={() => setOpenPanel(null)}
        onChangeQty={() => {}}
        onRemove={() => {}}
        onCheckout={() =>
          showToast("Checkout")
        }
      />

      <WishlistPanel
        open={openPanel === "wishlist"}
        wishlist={wishlist}
        onClose={() => setOpenPanel(null)}
        onMoveToCart={addToCart}
        onRemove={() => {}}
      />

      <ProfilePanel
        open={openPanel === "profile"}
        cartCount={cartCount}
        wishCount={wishCount}
        onClose={() => setOpenPanel(null)}
        onLogout={() =>
          showToast("Logged Out")
        }
      />

      <Toast
        message={toastMsg}
        visible={toastVisible}
      />
    </>
  );
}
