"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import {
  IconMenu2,
  IconBell,
  IconMessages,
  IconUsers,
  IconChartPie,
  IconCurrencyDollar,
  IconShoppingCart
} from "@tabler/icons-react";

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen((state) => !state);
  };

  return (
    <div className="flex h-screen bg-gray-50 font-[family-name:var(--font-geist-sans)]">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white border-b h-16 flex items-center shadow-sm">
          <div className="flex items-center justify-between w-full px-4">
            <button
              onClick={toggleSidebar}
              className="text-gray-500 hover:text-gray-700 focus:outline-none cursor-pointer">
              <IconMenu2 size={24} />
            </button>

            <div className="flex items-center space-x-4">
              <button className="text-gray-500 hover:text-gray-700">
                <IconBell size={24} />
              </button>

              <button className="text-gray-500 hover:text-gray-700">
                <IconMessages size={24} />
              </button>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
            <p className="text-gray-600">Welcome to your admin dashboard</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div className="bg-white rounded-lg shadow p-6 flex items-center hover:-translate-y-1 transition-transform duration-200">
              <div className="rounded-full h-12 w-12 flex items-center justify-center bg-blue-100 text-blue-500">
                <IconUsers size={24} />
              </div>
              <div className="ml-4">
                <h2 className="text-gray-600 text-sm">Total Users</h2>
                <p className="text-2xl font-semibold text-gray-800">12,628</p>
                <p className="text-xs text-green-500">+2.5% from last week</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6 flex items-center hover:-translate-y-1 transition-transform duration-200">
              <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-100 text-green-500">
                <IconCurrencyDollar size={24} />
              </div>
              <div className="ml-4">
                <h2 className="text-gray-600 text-sm">Total Revenue</h2>
                <p className="text-2xl font-semibold text-gray-800">$48,265</p>
                <p className="text-xs text-green-500">+8.3% from last month</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6 flex items-center hover:-translate-y-1 transition-transform duration-200">
              <div className="rounded-full h-12 w-12 flex items-center justify-center bg-purple-100 text-purple-500">
                <IconShoppingCart size={24} />
              </div>
              <div className="ml-4">
                <h2 className="text-gray-600 text-sm">Total Orders</h2>
                <p className="text-2xl font-semibold text-gray-800">1,849</p>
                <p className="text-xs text-green-500">+12.1% from last month</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6 flex items-center hover:-translate-y-1 transition-transform duration-200">
              <div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-100 text-yellow-500">
                <IconChartPie size={24} />
              </div>
              <div className="ml-4">
                <h2 className="text-gray-600 text-sm">Traffic</h2>
                <p className="text-2xl font-semibold text-gray-800">42.3k</p>
                <p className="text-xs text-red-500">-3.8% from last month</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-medium text-gray-800">Monthly Revenue</h2>
                <div className="text-sm text-gray-500">Last 6 months</div>
              </div>
              <div className="bg-gray-100 h-60 rounded flex items-center justify-center">
                <p className="text-gray-400">Chart will be rendered here</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-medium text-gray-800">User Activity</h2>
                <div className="text-sm text-gray-500">Daily average</div>
              </div>
              <div className="bg-gray-100 h-60 rounded flex items-center justify-center">
                <p className="text-gray-400">Chart will be rendered here</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
