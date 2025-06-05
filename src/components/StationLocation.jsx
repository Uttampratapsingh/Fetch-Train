import React from "react";
import { FaMapMarkerAlt, FaExternalLinkAlt, FaClock } from "react-icons/fa";

const StationLocation = ({ data }) => {
  const handleOpenMap = () => {
    window.open(data.URL, "_blank");
  };

  return (
    <div className="bg-white rounded-lg shadow-lg">
      <div className="p-4 border-b">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="h-8 w-8 text-blue-600" />
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">
                {data.StationName}
              </h2>
              <p className="text-gray-600">Station Code: {data.StationCode}</p>
            </div>
          </div>
          <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
            {data.Status}
          </span>
        </div>
      </div>

      <div className="p-4 grid md:grid-cols-2 gap-6">
        {/* Station Information */}
        <div className="bg-blue-50 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-3">
            <FaMapMarkerAlt className="h-5 w-5 text-blue-600" />
            <h3 className="text-lg font-semibold text-gray-800">Station Details</h3>
          </div>
          <div className="space-y-2">
            <p className="text-gray-700">
              <span className="font-medium">Station Name:</span> {data.StationName}
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Station Code:</span> {data.StationCode}
            </p>
            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <FaClock className="h-4 w-4" />
              <span>Last Updated: {data.LastUpdate}</span>
            </div>
          </div>
        </div>

        {/* Map Actions */}
        <div className="bg-green-50 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-3">
            <FaExternalLinkAlt className="h-5 w-5 text-green-600" />
            <h3 className="text-lg font-semibold text-gray-800">Location on Map</h3>
          </div>
          <div className="space-y-4">
            <p className="text-gray-700">
              View the exact location of {data.StationName} on Google Maps
            </p>
            <button
              onClick={handleOpenMap}
              className="flex items-center justify-center gap-2 w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition"
            >
              <FaExternalLinkAlt className="h-4 w-4" />
              Open in Google Maps
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StationLocation;
