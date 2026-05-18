import Panel from "./Panel"

interface Props {
  open: boolean
  cartCount: number
  wishCount: number
  onClose: () => void
  onLogout: () => void
}

const menuItems = [
  { icon: "📦", label: "My Orders" },
  { icon: "📍", label: "Saved Addresses" },
  { icon: "💳", label: "Payment Methods" },
  { icon: "⭐", label: "Reviews & Ratings" },
  { icon: "🔔", label: "Notifications" },
  { icon: "⚙️", label: "Account Settings" },
]

export default function ProfilePanel({
  open,
  cartCount,
  wishCount,
  onClose,
  onLogout,
}: Props) {
  return (
    <Panel open={open} title="👤 My Account" onClose={onClose}>

      {/* Avatar + Info */}
      <div className="flex items-center gap-4 py-5 border-b border-gray-100 mb-4">
        <div className="w-16 h-16 rounded-full bg-brown-100 border-2 border-brown-600 flex items-center justify-center font-display text-2xl font-bold text-brown-600 shrink-0">
          A
        </div>
        <div>
          <p className="font-semibold text-gray-900 text-base"> Suhani</p>
          <p className="text-gray-400 text-sm mt-0.5">ghodakesuhani.@email.com</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {[
          { num: cartCount, label: "In Cart" },
          { num: wishCount, label: "Wishlist" },
          { num: 3, label: "Orders" },
        ].map(({ num, label }) => (
          <div
            key={label}
            className="bg-[#faf9f6] border border-gray-100 rounded-xl p-3 text-center"
          >
            <p className="text-xl font-bold text-brown-600">{num}</p>
            <p className="text-[11px] text-gray-400 mt-0.5">{label}</p>
          </div>
        ))}
      </div>

      {/* Menu */}
      <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-2">
        Account
      </p>
      <nav>
        {menuItems.map((item) => (
          <a
            key={item.label}
            href="#!"
            className="flex items-center gap-3 py-3 text-sm text-gray-700 hover:text-brown-600 border-b border-gray-50 transition-colors duration-150 last:border-none"
          >
            <span className="text-base w-6 text-center">{item.icon}</span>
            {item.label}
          </a>
        ))}
      </nav>

      {/* Logout */}
      <button
        onClick={onLogout}
        className="w-full mt-6 bg-white text-red-500 border border-red-200 hover:bg-red-50 py-3 rounded-xl text-sm font-semibold transition-all duration-200"
      >
        Log Out
      </button>

    </Panel>
  )
}