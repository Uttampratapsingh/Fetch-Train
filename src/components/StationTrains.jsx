import { FaTrain, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const StationTrains = ({ data, stationCode }) => {
  return (
    <div className="shadow-lg rounded-lg bg-white">
      <div className="p-4 border-b flex items-center justify-between">
        <div className="flex items-center gap-3">
          <FaTrain className="h-8 w-8 text-blue-600" />
          <div>
            <h2 className="text-2xl text-gray-800 font-bold">
              Station: {stationCode}
            </h2>
            <p className="text-gray-600">{data.Trains.length} trains found</p>
          </div>
        </div>
        <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded">
          {data.Status}
        </span>
      </div>

      <div className="p-4 overflow-x-auto">
        <table className="min-w-full border border-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-gray-600 font-semibold">Train Number</th>
              <th className="px-4 py-2 text-left text-gray-600 font-semibold">Train Name</th>
              <th className="px-4 py-2 text-left text-gray-600 font-semibold">Source</th>
              <th className="px-4 py-2 text-left text-gray-600 font-semibold">Destination</th>
              <th className="px-4 py-2 text-left text-gray-600 font-semibold">Arrival Time</th>
              <th className="px-4 py-2 text-left text-gray-600 font-semibold">Departure Time</th>
            </tr>
          </thead>
          <tbody>
            {data.Trains.map((train, index) => (
              <tr key={index} className="border-t">
                <td className="px-4 py-2 font-medium">{train.TrainNo}</td>
                <td className="px-4 py-2">{train.TrainName}</td>
                <td className="px-4 py-2">
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt className="h-4 w-4 text-blue-600" />
                    {train.Source}
                  </div>
                </td>
                <td className="px-4 py-2">
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt className="h-4 w-4 text-green-600" />
                    {train.Destination}
                  </div>
                </td>
                <td className="px-4 py-2">
                  <div className="flex items-center gap-2">
                    <FaClock className="h-4 w-4 text-gray-500" />
                    {train.ArrivalTime}
                  </div>
                </td>
                <td className="px-4 py-2">
                  <div className="flex items-center gap-2">
                    <FaClock className="h-4 w-4 text-gray-500" />
                    {train.DepartureTime}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StationTrains;
