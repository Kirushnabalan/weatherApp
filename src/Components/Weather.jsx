import React from 'react';
import searchicon from '../assets/search.png';
import clearicon from '../assets/clear-sky.png';
import humanity from '../assets/humanity.png';
import wind_icon from '../assets/wind.png';

const Weather = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-[#2f4680] to-[#00ae4]">
      <div className="p-10 rounded-[10px] bg-white shadow-lg w-80">
        {/* Search Bar */}
        <div className="flex items-center bg-gray-100 p-3 rounded-full shadow-md">
          <input 
            type="text" 
            placeholder="Search" 
            className="flex-1 p-2 text-gray-700 outline-none bg-transparent rounded-l-full"
          />
          <img 
            src={searchicon} 
            alt="Search icon" 
            className="h-8 w-8 cursor-pointer"
          />
        </div>

        {/* Weather Icon & Temperature */}
        <div className="flex flex-col items-center mt-6">
          <img 
            src={clearicon} 
            alt="Weather Icon" 
            className="w-24 h-24"
          />
          <p className="text-3xl font-bold text-gray-800 mt-2">16°C</p>
          <p className="text-lg text-gray-600">London</p>
        </div>

        {/* Humidity & Wind Speed */}
        <div className="flex justify-between items-center mt-6 bg-gray-100 p-4 rounded-lg shadow-md">
          {/* Humidity */}
          <div className="flex items-center gap-3">
            <img src={humanity} alt="Humidity Icon" className="w-8 h-8" />
            <div>
              <p className="text-lg font-semibold text-gray-800">91%</p>
              <span className="text-sm text-gray-600">Humidity</span>
            </div>
          </div>

          {/* Wind Speed */}
          <div className="flex items-center gap-3">
            <img src={wind_icon} alt="Wind Icon" className="w-8 h-8" />
            <div>
              <p className="text-lg font-semibold text-gray-800">3.6 km/h</p>
              <span className="text-sm text-gray-600">Wind Speed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
