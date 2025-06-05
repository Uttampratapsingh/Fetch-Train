import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const StationLocationSearch = ({ onSearch, setLoading, setError }) => {
  const [stationCode, setStationCode] = useState("");

  const handleSearch = async () => {
    if (!stationCode.trim()) {
      setError("Please enter a station code");
      return;
    }

    setLoading(true);
    setError(null);
    onSearch(null);

    try {
      const response = await fetch(
        `https://indianrailapi.com/api/v2/StationLocationOnMap/apikey/9c82d96b525c828aa4b0382fd8f6a40b/StationCode/${stationCode}/`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch station location");
      }

      const data = await response.json();

      if (data.ResponseCode === "200" && data.Status === "SUCCESS") {
        onSearch(data);
      } else {
        setError("Station location not found");
      }
    } catch (err) {
      console.error("Error fetching station location:", err);
      setError("Failed to fetch station location. Please try again.");
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
          Find Station Location on Map
        </h2>
      </div>
      <div className="p-4">
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Enter station code (e.g., NDLS)"
            value={stationCode}
            onChange={(e) => setStationCode(e.target.value.toUpperCase())}
            onKeyPress={handleKeyPress}
            className="flex-1 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSearch}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition"
          >
            <FaSearch className="h-4 w-4" />
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default StationLocationSearch;
