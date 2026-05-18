export default function Footer() {
  return (
    <footer className="bg-black text-white px-10 py-10">

      <div className="grid md:grid-cols-4 gap-10">

        <div>
          <h1 className="text-2xl font-bold mb-4">
            WoodNest
          </h1>

          <p>
            Premium furniture for modern homes.
          </p>
        </div>

        <div>
          <h2 className="font-bold mb-4">
            Categories
          </h2>

          <p>Sofas</p>
          <p>Dining Table</p>
          <p>Office</p>
        </div>

        <div>
          <h2 className="font-bold mb-4">
            Help
          </h2>

          <p>Contact</p>
          <p>Support</p>
          <p>Track Order</p>
        </div>

        <div>
          <h2 className="font-bold mb-4">
            Follow Us
          </h2>

          <p>Instagram</p>
          <p>Facebook</p>
          <p>Twitter</p>
        </div>

      </div>

    </footer>
  )
}