import React, { useState } from 'react';
import Sidebar from '../component/Sidebar';
import DashboardCards from './DashboardCards'; 
import CustomerCards from '../component/Customer';
import AddProductForm from './AddProductForm'; // Adjust path if your file is in a different folder

// Asset imports for header
import notificationIcon from '../assets/notification.png';
import settingIcon from '../assets/setting.png';
import setIcon from '../assets/ser.png';
import beingImage from '../assets/being.png';

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex font-['Lato']">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Header Bar */}
        <header className="h-20 bg-white border-b border-gray-100 px-8 flex items-center justify-between">
          <h1 className="text-xl font-bold text-[#1A202C]">
            {activeTab.charAt(0).toUpperCase() + activeTab.slice(1).replace('-', ' ')}
          </h1>
          
          <div className="flex items-center space-x-5">
            {/* Search Input Bar */}
            <div className="relative flex items-center">
              <input type="text" placeholder="Search data, users, or reports" className="w-[340px] h-[44px] bg-[#F9FAFB] rounded-full pl-5 pr-11 text-[16px] text-[#00000099] placeholder-[#00000099] tracking-[0.08px] border border-transparent focus:border-gray-200 focus:outline-none" />
              <img src={setIcon} alt="Search" className="w-[12px] h-[12px] absolute right-4 text-black pointer-events-none" />
            </div>

            <button className="p-1 hover:bg-gray-50 rounded-full transition-colors">
              <img src={notificationIcon} alt="Notification" className="w-[24px] h-[24px] object-contain" />
            </button>

            <div className="flex items-center bg-[#E8F5E9] p-1 rounded-full w-[50px] h-[28px] cursor-pointer">
              <div className="w-[22px] h-[22px] bg-white rounded-full flex items-center justify-center shadow-sm">
                <img src={settingIcon} alt="Settings" className="w-[14px] h-[14px] object-contain" />
              </div>
            </div>

            <div className="w-[40px] h-[40px] rounded-[40px] overflow-hidden flex-shrink-0 cursor-pointer border border-gray-100">
              <img src={beingImage} alt="User Profile" className="w-full h-full object-cover" />
            </div>
          </div>
        </header>

        {/* Dynamically switch views based on the active tab */}
        <main className="flex-1 p-8 overflow-y-auto">
          {activeTab === 'dashboard' && <DashboardCards />}
          {activeTab === 'customers' && <CustomerCards />}
          {activeTab === 'add-products' && <AddProductForm />}
          
          {/* Remaining tabs to be implemented */}
          {/* {activeTab === 'product-media' && <div className="text-xl font-semibold text-gray-700">Product Media View</div>}
          {activeTab === 'product-list' && <div className="text-xl font-semibold text-gray-700">Product List View</div>}
          {activeTab === 'product-reviews' && <div className="text-xl font-semibold text-gray-700">Product Reviews View</div>} */}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;