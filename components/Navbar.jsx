// components/Navbar.jsx
"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="w-fullmx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Brand */}
          <div className="flex-shrink-0">
            <Link href="/">
              <span className="text-2xl font-bold text-blue-600 cursor-pointer">
               HRCO
              </span>
            </Link>
          </div>

          {/* Navigation buttons */}
          <div className="flex items-center space-x-4">
            <Link href="/signup">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Signup
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
