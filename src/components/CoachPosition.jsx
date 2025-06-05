import React from "react";
import { FaTrain, FaCarSide, FaCoffee } from "react-icons/fa";

const CoachPosition = ({ data }) => {
  const getCoachIcon = (code) => {
    switch (code) {
      case "ENG":
        return <FaTrain className="h-4 w-4" />;
      case "PC":
        return <FaCoffee className="h-4 w-4" />;
      default:
        return <FaCarSide className="h-4 w-4" />;
    }
  };

  const getCoachColor = (code) => {
    switch (code) {
      case "ENG":
        return "bg-red-500 text-white";
      case "AC":
        return "bg-blue-500 text-white";
      case "SL":
        return "bg-green-500 text-white";
      case "GEN":
        return "bg-yellow-500 text-black";
      case "GRD":
        return "bg-gray-500 text-white";
      case "PC":
        return "bg-orange-500 text-white";
      default:
        return "bg-gray-400 text-white";
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg">
      {/* Header */}
      <div className="p-4 border-b flex items-center justify-between">
        <div className="flex items-center gap-3">
          <FaTrain className="h-8 w-8 text-blue-600" />
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Train {data.TrainNumber} - Coach Position
            </h2>
            <p className="text-gray-600">{data.Coaches.length} coaches</p>
          </div>
        </div>
        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">
          {data.Status}
        </span>
      </div>

      <div className="p-4 space-y-6">
        {/* Coach Layout */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-4 text-center">Coach Layout</h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {data.Coaches.map((coach) => (
              <div
                key={coach.SerialNo}
                className={`${getCoachColor(
                  coach.Code
                )} px-3 py-2 rounded-lg min-w-[60px] text-center shadow-sm flex flex-col items-center gap-1`}
              >
                {getCoachIcon(coach.Code)}
                <span className="text-xs font-medium">{coach.Number}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="bg-white p-4 rounded-lg border">
          <h3 className="text-lg font-semibold mb-3">Coach Types</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-red-500 rounded"></div>
              <span className="text-sm">Engine</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-500 rounded"></div>
              <span className="text-sm">AC</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-500 rounded"></div>
              <span className="text-sm">Sleeper</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-yellow-500 rounded"></div>
              <span className="text-sm">General</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gray-500 rounded"></div>
              <span className="text-sm">Guard</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-orange-500 rounded"></div>
              <span className="text-sm">Pantry</span>
            </div>
          </div>
        </div>

        {/* Detailed Coach List */}
        <div className="bg-white rounded-lg border overflow-hidden">
          <div className="bg-gray-50 px-4 py-3 border-b">
            <h3 className="text-lg font-semibold">Detailed Coach Information</h3>
          </div>
          <div className="divide-y">
            {data.Coaches.map((coach) => (
              <div
                key={coach.SerialNo}
                className="px-4 py-3 hover:bg-gray-50"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-500 min-w-[30px]">
                      #{coach.SerialNo}
                    </span>
                    <div
                      className={`${getCoachColor(
                        coach.Code
                      )} px-2 py-1 rounded text-xs font-medium flex items-center gap-1`}
                    >
                      {getCoachIcon(coach.Code)}
                      {coach.Number}
                    </div>
                    <span className="font-medium">{coach.Name}</span>
                  </div>
                  <span className="text-xs border border-gray-300 rounded px-2 py-1">
                    {coach.Code}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Last Update Info */}
        <div className="text-center text-sm text-gray-500">
          Last updated: {data.LastUpdate}
        </div>
      </div>
    </div>
  );
};

export default CoachPosition;
