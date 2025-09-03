// app/page.jsx
"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-20">

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-32 px-6 text-center">
        <h1 className="text-5xl font-bold mb-6">HRCO</h1>
        <p className="text-xl max-w-2xl mx-auto mb-8">
          Automate your HR tasks effortlessly. From onboarding to scheduling, HRCO makes human resource management smarter and simpler.
        </p>
        <Link href="/dashboard">
          <button className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-100 transition">
            Go to Dashboard
          </button>
        </Link>
      </section>

      {/* Features / Services */}
      <section className="px-6 md:px-20 space-y-12">
        <h2 className="text-3xl font-bold text-center mb-12">What HRCO Can Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-xl font-semibold mb-2">Automated Onboarding</h3>
            <p className="text-gray-600">
              Automatically collect employee information, send welcome emails, and schedule orientation events.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-xl font-semibold mb-2">HR Workflow Automation</h3>
            <p className="text-gray-600">
              Reduce manual tasks by automating employee approvals, notifications, and reminders.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-xl font-semibold mb-2">Calendar & Event Management</h3>
            <p className="text-gray-600">
              Schedule and track employee events, meetings, and orientations with automatic reminders.
            </p>
          </div>
        </div>
      </section>

      {/* Why HRCO */}
      <section className="bg-gray-50 py-20 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose HRCO?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <p className="text-4xl font-bold mb-2">⚡</p>
            <h3 className="text-xl font-semibold mb-2">Speed</h3>
            <p className="text-gray-600">
              Automate repetitive HR tasks and focus on what really matters.
            </p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold mb-2">🔒</p>
            <h3 className="text-xl font-semibold mb-2">Security</h3>
            <p className="text-gray-600">
              Keep your employee data safe and compliant with automated workflows.
            </p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold mb-2">📊</p>
            <h3 className="text-xl font-semibold mb-2">Efficiency</h3>
            <p className="text-gray-600">
              Track progress and get insights instantly with real-time dashboards.
            </p>
          </div>
        </div>
      </section>

      {/* Future Services / Roadmap */}
      <section className="px-6 md:px-20 space-y-8">
        <h2 className="text-3xl font-bold text-center mb-12">Coming Soon / Future Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-xl font-semibold mb-2">AI Resume Screening</h3>
            <p className="text-gray-600">
              Automatically screen resumes and rank candidates based on skills and experience.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-xl font-semibold mb-2">Smart Employee Analytics</h3>
            <p className="text-gray-600">
              Get insights on employee performance and engagement through AI-driven analytics.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-xl font-semibold mb-2">Integrated Payroll Automation</h3>
            <p className="text-gray-600">
              Simplify payroll processing, deductions, and tax compliance with automation.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20 px-6">
        <h2 className="text-3xl font-bold mb-6">Ready to Automate HR?</h2>
        <p className="text-gray-600 mb-6 max-w-xl mx-auto">
          Get started today and make HR processes simple, fast, and efficient.
        </p>
        <Link href="/dashboard">
          <button className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition">
            Go to Dashboard
          </button>
        </Link>
      </section>
    </div>
  );
}
