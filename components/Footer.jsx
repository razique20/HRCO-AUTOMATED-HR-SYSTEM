"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 !important text-white py-10 px-6 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold mb-4">HRCO</h2>
          <p className="text-gray-400">
            Automate HR tasks effortlessly. Streamline your workflows and boost productivity.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link href="/" className="hover:text-blue-400 transition">Home</Link></li>
            <li><Link href="/dashboard" className="hover:text-blue-400 transition">Dashboard</Link></li>
            <li><Link href="/employees" className="hover:text-blue-400 transition">Employees</Link></li>
            <li><Link href="/add-employee" className="hover:text-blue-400 transition">Add Employee</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-blue-400 transition">Docs</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Blog</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Support</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">FAQs</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Email: <a href="mailto:support@hrco.com" className="hover:text-blue-400">support@hrco.com</a></li>
            <li>Phone: <a href="tel:+971500000000" className="hover:text-blue-400">+971 50 000 0000</a></li>
            <li>Location: Dubai, UAE</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} HRCO. All rights reserved.
      </div>
    </footer>
  );
}
