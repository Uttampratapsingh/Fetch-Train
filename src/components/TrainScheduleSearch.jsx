import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const TrainScheduleSearch = ({ onSearch, setLoading, setError }) => {
  const [trainNumber, setTrainNumber] = useState("");

  const handleSearch = async () => {
    if (!trainNumber.trim()) {
      setError("Please enter a train number");
      return;
    }

    setLoading(true);
    setError(null);
    onSearch(null);

    try {
      const response = await fetch(
        `https://indianrailapi.com/api/v2/TrainSchedule/apikey/9c82d96b525c828aa4b0382fd8f6a40b/TrainNumber/${trainNumber}/`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch train schedule");
      }

      const data = await response.json();

      if (data.ResponseCode === "200" && data.Status === "SUCCESS") {
        onSearch(data);
      } else {
        setError(data.Message || "Train schedule not found");
      }
    } catch (err) {
      console.error("Error fetching train schedule:", err);
      setError("Failed to fetch train schedule. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg">
      <div className="p-4 border-b">
        <h2 className="text-center text-xl text-gray-700 font-semibold">
          Search Train Schedule
        </h2>
      </div>
      <div className="p-4">
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Enter train number (e.g., 12565)"
            value={trainNumber}
            onChange={(e) => setTrainNumber(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSearch}
            className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            <FaSearch className="h-4 w-4" />
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrainScheduleSearch;
