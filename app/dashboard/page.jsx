// app/dashboard/page.jsx
"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function DashboardSummary() {
  const [employees, setEmployees] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const res = await axios.get("/api/employees");
        setEmployees(res.data);
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };

    const fetchEvents = async () => {
      try {
        const res = await axios.get("/api/events");
        setEvents(res.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEmployees();
    fetchEvents();
  }, []);

  console.log(employees);
  

  const totalEmployees = employees.length;
  const pendingEmployees = employees.filter(e => !e.Status || e.Status === "Pending").length;
  const upcomingEvents = events.slice(0, 5); // next 5 events

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold">HR Dashboard Summary</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
  <div className="bg-white rounded-xl shadow p-4">
    <p className="text-gray-500">Total Employees</p>
    <p className="text-2xl font-bold">{employees.length}</p>
  </div>
  <div className="bg-white rounded-xl shadow p-4">
    <p className="text-gray-500">On Leave</p>
    <p className="text-2xl font-bold">{employees.filter(e => e.Status === "On Leave").length}</p>
  </div>
  <div className="bg-white rounded-xl shadow p-4">
    <p className="text-gray-500">Upcoming Events</p>
    <p className="text-2xl font-bold">{events.length}</p>
  </div>
  <div className="bg-white rounded-xl shadow p-4">
    <p className="text-gray-500">Pending Requests</p>
    <p className="text-2xl font-bold">0</p>
  </div>
</div>

      {/* Recent Employees */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Recent Employees</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {employees.slice(-6).reverse().map((emp, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg p-4 hover:shadow-2xl transition duration-300"
            >
              <p className="text-lg font-semibold mb-2">{emp.Name}</p>
              <p className="text-gray-600 mb-1">Email: {emp.Email}</p>
              <p className="text-gray-500 text-sm">Status: {emp.Status || "Pending"}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Events */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {upcomingEvents.length > 0 ? (
            upcomingEvents.map((event, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-lg p-4 hover:shadow-2xl transition duration-300"
              >
                <p className="text-lg font-semibold mb-2">{event.summary}</p>
                <p className="text-gray-600 mb-1">Status: {event.status}</p>
                <p className="text-gray-500 mb-1">
                  Start: {new Date(event.start.dateTime).toLocaleString()}
                </p>
                {event.end?.dateTime && (
                  <p className="text-gray-400 text-sm">
                    End: {new Date(event.end.dateTime).toLocaleString()}
                  </p>
                )}
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500 py-4">
              <h1>No Events Found</h1>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
