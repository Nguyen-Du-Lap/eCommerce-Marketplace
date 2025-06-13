'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { Public_Sans } from "next/font/google";
import "../globals.css";
import Providers from "@/providers";

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// This creates a completely separate layout for admin that doesn't inherit from the root layout
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
  const navItems = [
    { name: 'Dashboard', path: '/admin', icon: '📊' },
    { name: 'Products', path: '/admin/products', icon: '📦' },
    { name: 'Categories', path: '/admin/categories', icon: '📋' },
    { name: 'Orders', path: '/admin/orders', icon: '🛒' },
    { name: 'Users', path: '/admin/users', icon: '👥' },
    { name: 'Settings', path: '/admin/settings', icon: '⚙️' },
  ];
  
  return (
    <html lang="en">
      <body className={`${publicSans.variable} antialiased`}>
        <Providers>
          <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-white shadow-md">
              <div className="p-6 border-b">
                <h1 className="text-2xl font-bold text-blue-600">Admin Panel</h1>
              </div>
              <nav className="p-4">
                <ul className="space-y-2">
                  {navItems.map((item) => (
                    <li key={item.path}>
                      <Link 
                        href={item.path}
                        className={`flex items-center p-3 rounded-lg transition-colors ${
                          pathname === item.path 
                            ? 'bg-blue-50 text-blue-700 font-medium' 
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        <span className="mr-3">{item.icon}</span>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="absolute bottom-0 w-64 p-4 border-t">
                <Link href="/" className="flex items-center text-sm text-gray-600 hover:text-blue-600">
                  <span className="mr-2">🏠</span>
                  Back to Website
                </Link>
              </div>
            </aside>
            
            {/* Main Content */}
            <main className="flex-1 overflow-auto">
              <header className="bg-white shadow-sm">
                <div className="flex justify-between items-center px-6 py-4">
                  <h2 className="text-lg font-medium">eCommerce Admin</h2>
                  <div className="flex items-center space-x-4">
                    <button className="p-1 rounded-full bg-gray-100 text-gray-600">
                      {"🔔"}
                    </button>
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                        A
                      </div>
                      <span className="text-sm font-medium">Admin User</span>
                    </div>
                  </div>
                </div>
              </header>
              
              <div className="p-6">
                {children}
              </div>
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}


