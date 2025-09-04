"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function JobsPage() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get("/api/jobs");
        setJobs(res.data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };
    fetchJobs();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Job Listings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <div key={job._id} className="bg-white rounded-xl shadow-md p-4">
            <h2 className="text-xl font-semibold">{job.title}</h2>
            <p className="text-gray-600">{job.department} - {job.location}</p>
            <p className="text-sm text-gray-500">{job.employmentType}</p>
            <p className="text-gray-700 mt-2">{job.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
