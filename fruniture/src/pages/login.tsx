import React, { useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa"

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)

  const [showPassword, setShowPassword] =
    useState(false)

  const [
    showConfirmPassword,
    setShowConfirmPassword,
  ] = useState(false)

  const [successMsg, setSuccessMsg] = useState("")
  const [loginMsg, setLoginMsg] = useState("")
  const [errorMsg, setErrorMsg] = useState("")

  // Forgot Password States
  const [showForgot, setShowForgot] =
    useState(false)

  const [forgotEmail, setForgotEmail] =
    useState("")

  const [forgotMsg, setForgotMsg] =
    useState("")

  // Form Data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  // Handle Input Change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  // Validation
  const validate = () => {
    const emailRegex = /\S+@\S+\.\S+/

    if (!formData.email || !formData.password) {
      return "All fields are required"
    }

    if (!emailRegex.test(formData.email)) {
      return "Invalid email format"
    }

    if (formData.password.length < 6) {
      return "Password must be at least 6 characters"
    }

    // Register Validation
    if (!isLogin) {
      if (!formData.name) {
        return "Name is required"
      }

      if (
        formData.password !==
        formData.confirmPassword
      ) {
        return "Passwords do not match"
      }
    }

    return ""
  }

  // Submit
  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()

    const error = validate()

    if (error) {
      setErrorMsg(error)

      setTimeout(() => {
        setErrorMsg("")
      }, 3000)

      return
    }

    setErrorMsg("")

    // Login
    if (isLogin) {
      setLoginMsg("✅ Login Successful!")

      setTimeout(() => {
        setLoginMsg("")
      }, 3000)

      console.log("LOGIN DATA:", formData)
    }

    // Register
    else {
      setSuccessMsg(
        "🎉 Registration Successful!"
      )

      setTimeout(() => {
        setSuccessMsg("")
        setIsLogin(true)
      }, 3000)

      console.log("REGISTER DATA:", formData)
    }
  }

  // Forgot Password
  const handleForgotPassword = () => {
    if (!forgotEmail) {
      setForgotMsg("⚠️ Please enter email")
      return
    }

    setForgotMsg("📩 Reset link sent!")

    setTimeout(() => {
      setForgotMsg("")
      setShowForgot(false)
      setForgotEmail("")
    }, 3000)
  }

  return (
    <div className="min-h-screen flex">

      {/* SUCCESS POPUP */}
      {successMsg && (
        <div className="fixed top-5 right-5 bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg z-50">
          {successMsg}
        </div>
      )}

      {/* LOGIN POPUP */}
      {loginMsg && (
        <div className="fixed top-5 right-5 bg-blue-500 text-white px-6 py-3 rounded-xl shadow-lg z-50">
          {loginMsg}
        </div>
      )}

      {/* ERROR POPUP */}
      {errorMsg && (
        <div className="fixed top-5 right-5 bg-red-500 text-white px-6 py-3 rounded-xl shadow-lg z-50">
          {errorMsg}
        </div>
      )}

      {/* FORGOT PASSWORD MODAL */}
      {showForgot && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

          <div className="bg-white p-6 rounded-2xl w-96">

            <h2 className="text-2xl font-bold mb-4">
              Forgot Password
            </h2>

            <input
              type="email"
              placeholder="Enter your email"
              value={forgotEmail}
              onChange={(e) =>
                setForgotEmail(e.target.value)
              }
              className="w-full border px-4 py-3 rounded-xl mb-4"
            />

            <button
              onClick={handleForgotPassword}
              className="w-full bg-black text-white py-3 rounded-xl"
            >
              Send Reset Link
            </button>

            {forgotMsg && (
              <p className="text-center text-green-600 mt-3">
                {forgotMsg}
              </p>
            )}

            <button
              onClick={() =>
                setShowForgot(false)
              }
              className="w-full mt-3 text-gray-500"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* LEFT SIDE */}
      <div className="hidden lg:flex lg:w-1/2 relative">

        <img
          src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop"
          alt="Furniture"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center px-16 text-white">

          <h1 className="text-5xl font-bold">
            Wooden Street Style Furniture
          </h1>

          <p className="mt-6 text-lg text-gray-200">
            Premium sofas, dining tables,
            office furniture
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-[#f8f5f0] px-6">

        <div className="w-full max-w-md bg-white p-10 rounded-3xl shadow-2xl">

          {/* TITLE */}
          <h2 className="text-4xl font-bold">
            {isLogin
              ? "Welcome Back"
              : "Create Account"}
          </h2>

          <p className="text-gray-500 mt-2 mb-6">
            {isLogin
              ? "Login to continue shopping"
              : "Register to start shopping"}
          </p>

          <form onSubmit={handleSubmit}>

            {/* NAME */}
            {!isLogin && (
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full border px-4 py-3 rounded-xl mb-4"
              />
            )}

            {/* EMAIL */}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full border px-4 py-3 rounded-xl mb-4"
            />

            {/* PASSWORD */}
            <div className="relative mb-4">

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full border px-4 py-3 rounded-xl"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(
                    !showPassword
                  )
                }
                className="absolute right-3 top-3 text-gray-500"
              >
                {showPassword ? (
                  <FaEyeSlash />
                ) : (
                  <FaEye />
                )}
              </button>
            </div>

            {/* FORGOT PASSWORD */}
            {isLogin && (
              <div className="text-right mb-4">

                <button
                  type="button"
                  onClick={() =>
                    setShowForgot(true)
                  }
                  className="text-sm text-blue-600 hover:underline"
                >
                  Forgot Password?
                </button>
              </div>
            )}

            {/* CONFIRM PASSWORD */}
            {!isLogin && (
              <div className="relative mb-4">

                <input
                  type={
                    showConfirmPassword
                      ? "text"
                      : "password"
                  }
                  name="confirmPassword"
                  value={
                    formData.confirmPassword
                  }
                  onChange={handleChange}
                  placeholder="Confirm Password"
                  className="w-full border px-4 py-3 rounded-xl"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(
                      !showConfirmPassword
                    )
                  }
                  className="absolute right-3 top-3 text-gray-500"
                >
                  {showConfirmPassword ? (
                    <FaEyeSlash />
                  ) : (
                    <FaEye />
                  )}
                </button>
              </div>
            )}

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition"
            >
              {isLogin
                ? "Login"
                : "Register"}
            </button>
          </form>

          {/* SWITCH LOGIN / REGISTER */}
          <p className="text-center mt-6 text-gray-600">

            {isLogin
              ? "Don't have account?"
              : "Already have account?"}

            <button
              onClick={() =>
                setIsLogin(!isLogin)
              }
              className="ml-2 font-bold text-black hover:underline"
            >
              {isLogin
                ? "Register"
                : "Login"}
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}