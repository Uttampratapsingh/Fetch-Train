import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const StationSearch = ({ onSearch, setLoading, setError }) => {
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
        `https://indianrailapi.com/api/v2/AllTrainOnStation/apikey/9c82d96b525c828aa4b0382fd8f6a40b/StationCode/${stationCode}/`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch station information");
      }

      const data = await response.json();

      if (data.ResponseCode === "200" && data.Status === "SUCCESS") {
        onSearch(data);
      } else {
        setError(data.Message || "Station not found or no trains available");
      }
    } catch (err) {
      console.error("Error fetching station data:", err);
      setError("Failed to fetch station information. Please try again.");
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
    <div className="shadow-lg rounded-lg bg-white">
      <div className="p-4 border-b">
        <h2 className="text-center text-xl text-gray-700">
          Search All Trains on Station
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
            className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
          />
          <button
            onClick={handleSearch}
            className="flex items-center bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring"
          >
            <FaSearch className="h-4 w-4 mr-2" />
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default StationSearch;
