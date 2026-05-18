import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterestP,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white pt-16 pb-8 px-6 md:px-16">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-gray-800 pb-12">

        {/* Brand */}
        <div>
          <h1 className="text-3xl font-bold tracking-wide mb-4">
            WoodNest
          </h1>

          <p className="text-gray-400 leading-7">
            Premium furniture crafted for modern living.
            Elegant designs, timeless comfort, and
            luxury interiors for your dream home.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-6">
            <div className="bg-white/10 p-3 rounded-full hover:bg-white hover:text-black transition duration-300 cursor-pointer">
              <FaFacebookF />
            </div>

            <div className="bg-white/10 p-3 rounded-full hover:bg-white hover:text-black transition duration-300 cursor-pointer">
              <FaInstagram />
            </div>

            <div className="bg-white/10 p-3 rounded-full hover:bg-white hover:text-black transition duration-300 cursor-pointer">
              <FaTwitter />
            </div>

            <div className="bg-white/10 p-3 rounded-full hover:bg-white hover:text-black transition duration-300 cursor-pointer">
              <FaPinterestP />
            </div>
          </div>
        </div>

        {/* Categories */}
        <div>
          <h2 className="text-xl font-semibold mb-5">
            Categories
          </h2>

          <ul className="space-y-3 text-gray-400">
            <li className="hover:text-white transition cursor-pointer">
              Sofas
            </li>

            <li className="hover:text-white transition cursor-pointer">
              Dining Tables
            </li>

            <li className="hover:text-white transition cursor-pointer">
              Office Chairs
            </li>

            <li className="hover:text-white transition cursor-pointer">
              Beds
            </li>

            <li className="hover:text-white transition cursor-pointer">
              Lighting
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h2 className="text-xl font-semibold mb-5">
            Support
          </h2>

          <ul className="space-y-3 text-gray-400">
            <li className="hover:text-white transition cursor-pointer">
              Contact Us
            </li>

            <li className="hover:text-white transition cursor-pointer">
              Help Center
            </li>

            <li className="hover:text-white transition cursor-pointer">
              Track Order
            </li>

            <li className="hover:text-white transition cursor-pointer">
              Shipping Info
            </li>

            <li className="hover:text-white transition cursor-pointer">
              Privacy Policy
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-xl font-semibold mb-5">
            Newsletter
          </h2>

          <p className="text-gray-400 mb-5 leading-7">
            Subscribe to get updates on new collections
            and exclusive offers.
          </p>

          <div className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-white/10 border border-gray-700 px-4 py-3 rounded-xl outline-none focus:border-white"
            />

            <button className="bg-white text-black py-3 rounded-xl font-semibold hover:bg-gray-200 transition duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-8 text-gray-500 text-sm gap-4">
        <p>
          © 2026 WoodNest. All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          <p className="hover:text-white cursor-pointer transition">
            Terms
          </p>

          <p className="hover:text-white cursor-pointer transition">
            Privacy
          </p>

          <p className="hover:text-white cursor-pointer transition">
            Cookies
          </p>
        </div>
      </div>
    </footer>
  );
}