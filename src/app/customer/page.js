"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export default function CustomerLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State untuk visibilitas password
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setMessage("Email dan password harus diisi!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3007/users/login", {
        email,
        password,
      });
      setMessage(response.data.message);
      localStorage.setItem("token", response.data.data.token);
      router.push("/customer/dashboard");
    } catch (error) {
      setMessage(error.response?.data?.message || "Terjadi kesalahan pada server.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-100 to-white">
      <div className="bg-white shadow-xl rounded-2xl p-8 flex max-w-4xl w-full">
        {/* Bagian Kiri (Gambar) */}
        <div className="w-1/2 bg-purple-100 rounded-xl flex items-center justify-center p-6">
          <img src="/shopping-cart.svg" alt="Shopping" className="w-3/4" />
        </div>

        {/* Bagian Kanan (Form Login) */}
        <div className="w-1/2 p-6">
          <h2 className="text-2xl font-bold text-purple-600">Login</h2>
          <p className="text-gray-500 mb-6">Login to your account</p>

          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input 
                type="email" 
                placeholder="Enter email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="Enter password"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button 
                  type="button" 
                  className="absolute right-3 top-3 text-gray-500 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </button>
              </div>
            </div>

            <div className="text-right mb-4">
              <a href="#" className="text-sm text-gray-500 hover:underline">Forgot password?</a>
            </div>

            <button type="submit"
              className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition">
              Login
            </button>

            <p className="text-sm text-gray-500 mt-4 text-center">
              Don't have an account? <a href="#" className="text-purple-600 font-bold hover:underline">Sign up</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
