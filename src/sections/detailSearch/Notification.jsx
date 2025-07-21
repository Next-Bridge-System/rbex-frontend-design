import React from "react";
import smallNotification from "../../assets/smallNotification.png";
import notification from "../../assets/notification.png";

const Notification = () => {
  return (
    <div className="max-w-7xl mx-auto bg-[#B8C5E1]/20 border mt-16 mb-16 border-[#B8C5E1] rounded-md p-6 sm:p-9 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
      {/* Left side */}
      <div className="flex flex-col gap-2 w-full md:max-w-[60%]">
        <div className="flex items-center gap-2">
          <img src={smallNotification} alt="notify icon" className="w-5 h-5" />
          <h2 className="text-[#233D7B] font-bold font-lato text-lg">Notify Me</h2>
        </div>
        <p className="text-sm text-[#464E60] font-lato">
          Receive email notifications for the latest ads matching your search criteria
        </p>

        {/* Form Section */}
        <div className="flex  mx-auto flex-wrap gap-4 mt-4">
          <input
            type="email"
            placeholder="Type your email address"
            className="px-4 py-2 rounded-md border border-gray-300 min-w-[250px] w-full  sm:w-auto"
          />
          <select className="px-4 py-2 rounded-md border border-gray-300 min-w-[160px] w-[200px] sm:w-auto">
            <option className="text-[10px]">Daily</option>
            <option className="text-[10px]">Weekly</option>
            <option className="text-[10px]">Monthly</option>
          </select>
          <button className="bg-[#FF9900] hover:bg-orange-600 text-white px-10 py-2 rounded-md w-[160px] sm:w-auto">
            Submit
          </button>
        </div>
      </div>

      {/* Right side large bell */}
      <div className="w-full md:w-auto flex justify-center md:justify-end">
        <img src={notification} alt="notification bell" className="h-24 md:h-28 object-contain" />
      </div>
    </div>
  );
};

export default Notification;
