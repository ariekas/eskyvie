"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    // Cek apakah token autentikasi ada di localStorage
    const token = localStorage.getItem('token');
    if (!token) {
      // Jika tidak ada token, redirect ke halaman login
      router.push('/');
    }
  }, [router]);

  const handleLogout = () => {
    // Hapus token dari localStorage
    localStorage.removeItem('token');
    // Redirect ke halaman login
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className="w-64 bg-blue-600 text-white p-5">
        <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>
        <ul>
          <li className="mb-4 hover:bg-blue-700 p-2 rounded cursor-pointer" onClick={() => router.push('/')}>Dashboard</li>
          <li className="mb-4 hover:bg-blue-700 p-2 rounded cursor-pointer" onClick={() => router.push('/admin/product')}>Products</li>
          <li className="mb-4 hover:bg-blue-700 p-2 rounded cursor-pointer" onClick={() => router.push('/admin/category')}>Category</li>
          <li className="mb-4 hover:bg-blue-700 p-2 rounded cursor-pointer" onClick={() => router.push('/admin/order')}>Order</li>

        </ul>
      </div>

      {/* Content */}
      <div className="flex-1 p-10">
        <div className="bg-white p-6 rounded shadow-md">
          <h1 className="text-3xl font-bold mb-4">Welcome to Admin Dashboard</h1>
          <p className="text-gray-700">Manage your application settings and users here.</p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-xl font-bold">Total Users</h2>
            <p className="text-2xl font-semibold text-blue-600">1,245</p>
          </div>
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-xl font-bold">Active Orders</h2>
            <p className="text-2xl font-semibold text-green-600">578</p>
          </div>
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-xl font-bold">Revenue</h2>
            <p className="text-2xl font-semibold text-yellow-600">$45,000</p>
          </div>
        </div>

        {/* Logout Button */}
        <div className="mt-6">
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
