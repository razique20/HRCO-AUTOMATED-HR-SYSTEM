"use client";

import { useEffect, useState } from "react";
import axios from "axios";

const LeaveRequestsPage = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const res = await axios.get("/api/leave-requests");
        setRequests(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchRequests();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Leave Requests</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {requests.length > 0 ? (
          requests.map((request) => (
            <div
              key={request.row_number}
              className="p-4 border rounded-md shadow-sm bg-white"
            >
              <h3 className="font-semibold text-lg">{request.Name || "N/A"}</h3>
              <p>Email: {request.Email || "N/A"}</p>
              <p>Leave Type: {request["Leave Type"] || "N/A"}</p>
              <p>Dates: {request.Dates || "N/A"}</p>
              <p className="truncate">Reason: {request.Reason || "N/A"}</p>
              <p>Status: {request.Status || "Pending"}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No requests found</p>
        )}
      </div>
    </div>
  );
};

export default LeaveRequestsPage;
