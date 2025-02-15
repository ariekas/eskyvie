"use client";

import { useState } from "react";
import { FaArrowLeft, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import Image from "next/image";

const ResetPasswordPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-white to-purple-100 px-6">
      {/* Container */}
      <button className="absolute top-5 left-5 w-10 h-10 bg-purple-400 rounded-full flex justify-center items-center shadow-md hover:bg-purple-500">
        <FaArrowLeft className="text-white text-lg" />
      </button>

      <div className="bg-white rounded-xl shadow-lg p-10 flex flex-col md:flex-row items-center w-full max-w-4xl relative">
        {/* Gambar */}
        <div className="flex justify-center items-center">
          <div className="bg-purple-200 rounded-full p-8">
            <Image
              src="/newPassword-pic.svg"
              alt="Password Illustration"
              width={300}
              height={300}
              priority
            />
          </div>
        </div>

        {/* Form Reset Password */}
        <div className="flex flex-col items-center md:items-start ml-0 md:ml-10 w-full max-w-sm">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            New Password
          </h2>
          <p className="text-gray-600 mb-4 text-center md:text-left">
            Your new password must be different from previously used password.
          </p>

          {/* Input Password */}
          <div className="w-full mb-3">
            <label className="text-gray-700 font-semibold">New Password</label>
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter new password"
                className="w-full p-3 pl-10 pr-10 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              {/* Ikon Mata */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 focus:outline-none"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* Input Konfirmasi Password */}
          <div className="w-full mb-5">
            <label className="text-gray-700 font-semibold">
              Confirm New Password
            </label>
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm new password"
                className="w-full p-3 pl-10 pr-10 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              {/* Ikon Mata */}
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 focus:outline-none"
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* Tombol Simpan */}
          <button className="w-full py-3 bg-purple-600 text-white font-bold rounded-md hover:bg-purple-700">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
