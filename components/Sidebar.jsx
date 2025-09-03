// components/Sidebar.jsx
"use client";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiUsers, FiCalendar, FiHome, FiPieChart, FiClipboard , FiList} from "react-icons/fi";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`bg-white  h-screen top-0 left-0 transition-all duration-300 flex flex-col p-4 ${
          isOpen ? "w-64" : "w-16"
        }`}
      >
        {/* Hamburger */}
        <button
          className="text-gray-700 mb-6 self-end"
          onClick={toggleSidebar} 
        >
          <FiMenu size={24} />
        </button>

        {/* Navigation */}
        <nav className="flex flex-col space-y-4 mt-4">
          <Link href="/">
            <div className="flex items-center space-x-3 hover:bg-blue-100 p-2 rounded-md cursor-pointer">
              <FiHome size={20} />
              {isOpen && <span className="font-medium">Home</span>}
            </div>
          </Link>

          <Link href="/dashboard">
            <div className="flex items-center space-x-3 hover:bg-blue-100 p-2 rounded-md cursor-pointer">
              <FiPieChart size={20} />
              {isOpen && <span className="font-medium">Dashboard</span>}
            </div>
          </Link>

          <Link href="/employees">
            <div className="flex items-center space-x-3 hover:bg-blue-100 p-2 rounded-md cursor-pointer">
              <FiUsers size={20} />
              {isOpen && <span className="font-medium">Employees</span>}
            </div>
          </Link>

          <Link href="/events">
            <div className="flex items-center space-x-3 hover:bg-blue-100 p-2 rounded-md cursor-pointer">
              <FiCalendar size={20} />
              {isOpen && <span className="font-medium">Events</span>}
            </div>
          </Link>

           <Link href="/leave-request">
            <div className="flex items-center space-x-3 hover:bg-blue-100 p-2 rounded-md cursor-pointer">
              <FiClipboard size={20} />
              {isOpen && <span className="font-medium">Leave Request</span>}
            </div>
          </Link>

          <Link href="/leave-request/requests">
            <div className="flex items-center space-x-3 hover:bg-blue-100 p-2 rounded-md cursor-pointer">
              <FiList size={20} />
              {isOpen && <span className="font-medium">Leave Requests</span>}
            </div>
          </Link>
        </nav>
      </div>

      {/* Main content wrapper to offset sidebar */}
      <div className={`flex-1 ml-${isOpen ? "64" : "16"}`}>
        {/* Your main content will go here */}
      </div>
    </div>
  );
}
