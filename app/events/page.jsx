// app/events/page.jsx
"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function EventsPage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get("/api/events");
        setEvents(res.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    fetchEvents();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Upcoming Events</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {events.length > 0 ? (
          events.map((event, idx) => (
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
              {event.description && (
                <p className="text-gray-400 text-sm mt-2">{event.description}</p>
              )}
              {event.htmlLink && (
                <a
                  href={event.htmlLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 text-sm hover:underline mt-2 block"
                >
                  View Event
                </a>
              )}
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500 py-4">
            <h1>No Events Found</h1>
          </div>
        )}
      </div>
    </div>
  );
}
