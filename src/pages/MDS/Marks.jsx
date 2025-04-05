import React, { useEffect, useState } from "react";
import axios from "axios";

const Marks = ({ user }) => {
  const [marks, setMarks] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!user || !user.reg_no) {
      setError("User registration number is missing.");
      setLoading(false);
      return;
    }

    const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

    axios
      .get(`${API_URL}/api/marks/${user.reg_no}`)
      .then((res) => {
        setMarks(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching marks:", err);
        setError("Failed to fetch marks.");
        setLoading(false);
      });
  }, [user?.reg_no]);

  if (loading) return <p className="text-center text-blue-600 text-lg font-semibold">Loading...</p>;
  if (error) return <p className="text-center text-red-500 text-lg font-semibold">{error}</p>;
  if (!marks?.marks || marks.marks.length === 0)
    return <p className="text-center text-gray-600 text-lg font-semibold">No marks records found.</p>;

  return (
    <div className="max-w-6xl mx-auto p-8 bg-white shadow-xl rounded-lg">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">📚 Internal Marks</h2>
      
      {/* Student Details */}
      <div className="mb-6 p-4 bg-gray-100 rounded-lg shadow-md">
        <p className="text-lg font-semibold">👤 Name: <span className="text-gray-700">{marks.name}</span></p>
        <p className="text-lg font-semibold">🆔 Registration No: <span className="text-gray-700">{marks.reg_no}</span></p>
        <p className="text-lg font-semibold">📅 Year: <span className="text-gray-700">{marks.year}</span></p>
        <p className="text-lg font-semibold">🎓 Batch: <span className="text-gray-700">{marks.batch}</span></p>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 text-lg">
          {/* Table Header */}
          <thead className="bg-blue-600 text-white text-xl">
            <tr>
              <th className="py-3 px-6 border">📖 SUBJECT</th>
              <th className="py-3 px-6 border">📚 THEORY</th>
              <th className="py-3 px-6 border">🧪 PRACTICAL</th>
              <th className="py-3 px-6 border">🏥 CLINICAL</th>
              <th className="py-3 px-6 border">📈 TOTAL</th>
              <th className="py-3 px-6 border">🏅 GRADE</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="text-xl">
            {marks.marks.map((record, index) => (
              <tr key={index} className="border hover:bg-gray-100 transition">
                <td className="py-4 px-6 border text-center">{record.subject}</td>
                <td className="py-4 px-6 border text-center">{record.theory}</td>
                <td className="py-4 px-6 border text-center">{record.practical}</td>
                <td className="py-4 px-6 border text-center">{record.clinical}</td>
                <td className="py-4 px-6 border text-center font-bold">{record.total}</td>
                <td className="py-4 px-6 border text-center text-green-600 font-semibold">
                  {record.grade || "N/A"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Marks;
