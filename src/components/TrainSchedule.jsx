import React from "react";
import { FaTrain, FaMapMarkerAlt, FaClock, FaRoute } from "react-icons/fa";

const TrainSchedule = ({ data }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg">
      <div className="p-4 border-b">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <FaTrain className="h-8 w-8 text-blue-600" />
            <div>
              <h2 className="text-2xl text-gray-800 font-semibold">
                Train Schedule
              </h2>
              <p className="text-gray-600">{data.Route.length} stations on route</p>
            </div>
          </div>
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm font-medium">
            {data.Status}
          </span>
        </div>
      </div>

      <div className="p-4">
        {/* Route Summary */}
        <div className="mb-6 flex items-center justify-center">
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
            <div className="text-center">
              <div className="w-4 h-4 bg-blue-600 rounded-full mb-1"></div>
              <span className="text-sm font-medium text-gray-700">
                {data.Route[0]?.StationCode}
              </span>
            </div>
            <div className="flex-1 h-1 bg-gradient-to-r from-blue-600 to-green-600 rounded"></div>
            <FaRoute className="h-6 w-6 text-gray-600" />
            <div className="flex-1 h-1 bg-gradient-to-r from-blue-600 to-green-600 rounded"></div>
            <div className="text-center">
              <div className="w-4 h-4 bg-green-600 rounded-full mb-1"></div>
              <span className="text-sm font-medium text-gray-700">
                {data.Route[data.Route.length - 1]?.StationCode}
              </span>
            </div>
          </div>
        </div>

        {/* Schedule Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left text-gray-600">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="px-4 py-2 font-semibold">Sr. No</th>
                <th className="px-4 py-2 font-semibold">Station Code</th>
                <th className="px-4 py-2 font-semibold">Station Name</th>
                <th className="px-4 py-2 font-semibold">Arrival Time</th>
                <th className="px-4 py-2 font-semibold">Departure Time</th>
                <th className="px-4 py-2 font-semibold">Distance (km)</th>
              </tr>
            </thead>
            <tbody>
              {data.Route.map((station, index) => (
                <tr key={index} className="border-b">
                  <td className="px-4 py-2 font-medium">{station.SerialNo}</td>
                  <td className="px-4 py-2">
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt className="h-4 w-4 text-blue-600" />
                      {station.StationCode}
                    </div>
                  </td>
                  <td className="px-4 py-2">{station.StationName}</td>
                  <td className="px-4 py-2">
                    <div className="flex items-center gap-2">
                      <FaClock className="h-4 w-4 text-gray-500" />
                      {station.ArrivalTime}
                    </div>
                  </td>
                  <td className="px-4 py-2">
                    <div className="flex items-center gap-2">
                      <FaClock className="h-4 w-4 text-gray-500" />
                      {station.DepartureTime}
                    </div>
                  </td>
                  <td className="px-4 py-2">{station.Distance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TrainSchedule;
