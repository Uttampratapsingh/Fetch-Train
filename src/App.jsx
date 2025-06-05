import { useState } from "react";
import TrainInfo from "./components/TrainInfo";
import TrainSearch from "./components/TrainSearch";
import { FaTrain } from "react-icons/fa";
import StationSearch from "./components/StationSearch";
import StationTrains from "./components/StationTrains";
import CoachPosition from "./components/CoachPosition";
import CoachSearch from "./components/CoachSearch";
import StationLocation from "./components/StationLocation";
import StationLocationSearch from "./components/StationLocationSearch";
import TrainSchedule from "./components/TrainSchedule";
import TrainScheduleSearch from "./components/TrainScheduleSearch";


const App = () => {
  const [activeTab, setActiveTab] = useState("train");
  const [trainData, setTrainData] = useState(null);
  const [stationData, setStationData] = useState(null);
  const [coachData, setCoachData] = useState(null);
  const [locationData, setLocationData] = useState(null);
  const [scheduleData, setScheduleData] = useState(null);
  const [searchedStationCode, setSearchedStationCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setTrainData(null);
    setStationData(null);
    setCoachData(null);
    setLocationData(null);
    setScheduleData(null);
    setError(null);
    setSearchedStationCode("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-3 mb-4">
            <FaTrain className="h-12 w-12 text-blue-600" />
          </div>
          <p className="text-xl text-gray-600">Track your train information in real-time</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-md flex flex-wrap gap-1">
            {[
              { tab: "train", label: "Train Info" },
              { tab: "station", label: "Station Trains" },
              { tab: "coach", label: "Coach Position" },
              { tab: "location", label: "Station Location" },
              { tab: "schedule", label: "Train Schedule" },
            ].map(({ tab, label }) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`text-sm px-4 py-2 rounded ${
                  activeTab === tab
                    ? "bg-blue-600 text-white"
                    : "bg-transparent text-gray-700 hover:bg-blue-100"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Search Section */}
        <div className="max-w-2xl mx-auto mb-8">
          {activeTab === "train" ? (
            <TrainSearch
              onSearch={setTrainData}
              setLoading={setLoading}
              setError={setError}
            />
          ) : activeTab === "station" ? (
            <StationSearch
              onSearch={(data) => {
                setStationData(data);
                const stationCodeInput = document.querySelector(
                  'input[placeholder*="station code"]'
                );
                if (stationCodeInput && data) {
                  setSearchedStationCode(stationCodeInput.value.toUpperCase());
                }
              }}
              setLoading={setLoading}
              setError={setError}
            />
          ) : activeTab === "coach" ? (
            <CoachSearch
              onSearch={setCoachData}
              setLoading={setLoading}
              setError={setError}
            />
          ) : activeTab === "location" ? (
            <StationLocationSearch
              onSearch={setLocationData}
              setLoading={setLoading}
              setError={setError}
            />
          ) : (
            <TrainScheduleSearch
              onSearch={setScheduleData}
              setLoading={setLoading}
              setError={setError}
            />
          )}
        </div>

        {/* Results Section */}
        <div className="max-w-6xl mx-auto">
          {loading && (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">
                {activeTab === "train"
                  ? "Fetching train information..."
                  : activeTab === "station"
                  ? "Fetching station trains..."
                  : activeTab === "coach"
                  ? "Fetching coach position..."
                  : activeTab === "location"
                  ? "Fetching station location..."
                  : "Fetching train schedule..."}
              </p>
            </div>
          )}

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
              <p className="text-red-700 font-medium">{error}</p>
            </div>
          )}

          {activeTab === "train" && trainData && !loading && !error && (
            <TrainInfo data={trainData} />
          )}

          {activeTab === "station" && stationData && !loading && !error && (
            <StationTrains data={stationData} stationCode={searchedStationCode} />
          )}

          {activeTab === "coach" && coachData && !loading && !error && (
            <CoachPosition data={coachData} />
          )}

          {activeTab === "location" && locationData && !loading && !error && (
            <StationLocation data={locationData} />
          )}

          {activeTab === "schedule" && scheduleData && !loading && !error && (
            <TrainSchedule data={scheduleData} />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;