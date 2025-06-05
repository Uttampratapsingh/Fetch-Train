import { FaTrain, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const TrainInfo = ({ data }) => {
  return (
    <div className="shadow-lg rounded-lg bg-white">
      <div className="p-4 border-b flex items-center justify-between">
        <div className="flex items-center gap-3">
          <FaTrain className="h-8 w-8 text-blue-600" />
          <div>
            <h2 className="text-2xl text-gray-800 font-bold">{data.TrainName}</h2>
            <p className="text-gray-600">Train No: {data.TrainNo}</p>
          </div>
        </div>
        <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded">
          {data.Status}
        </span>
      </div>

      <div className="p-4 grid md:grid-cols-2 gap-6">
        {/* Source Information */}
        <div className="bg-blue-50 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-3">
            <FaMapMarkerAlt className="h-5 w-5 text-blue-600" />
            <h3 className="text-lg font-semibold text-gray-800">Source</h3>
          </div>
          <div className="space-y-2">
            <p className="text-gray-700">
              <span className="font-medium">Station Code:</span> {data.Source.Code}
            </p>
            <div className="flex items-center gap-2">
              <FaClock className="h-4 w-4 text-gray-500" />
              <span className="text-gray-700">
                <span className="font-medium">Departure:</span> {data.Source.Arrival}
              </span>
            </div>
          </div>
        </div>

        {/* Destination Information */}
        <div className="bg-green-50 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-3">
            <FaMapMarkerAlt className="h-5 w-5 text-green-600" />
            <h3 className="text-lg font-semibold text-gray-800">Destination</h3>
          </div>
          <div className="space-y-2">
            <p className="text-gray-700">
              <span className="font-medium">Station Code:</span> {data.Destination.Code}
            </p>
            <div className="flex items-center gap-2">
              <FaClock className="h-4 w-4 text-gray-500" />
              <span className="text-gray-700">
                <span className="font-medium">Arrival:</span> {data.Destination.Arrival}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Route Visualization */}
      <div className="mt-6 flex items-center justify-center p-4">
        <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
          <div className="text-center">
            <div className="w-4 h-4 bg-blue-600 rounded-full mb-1"></div>
            <span className="text-sm font-medium text-gray-700">{data.Source.Code}</span>
          </div>
          <div className="flex-1 h-1 bg-gradient-to-r from-blue-600 to-green-600 rounded"></div>
          <FaTrain className="h-6 w-6 text-gray-600" />
          <div className="flex-1 h-1 bg-gradient-to-r from-blue-600 to-green-600 rounded"></div>
          <div className="text-center">
            <div className="w-4 h-4 bg-green-600 rounded-full mb-1"></div>
            <span className="text-sm font-medium text-gray-700">{data.Destination.Code}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainInfo;