import React, { useState } from 'react';
import Sidebar from '../component/Sidebar';
import DashboardCards from './DashboardCards'; 
import CustomerCards from '../component/Customer';
import AddProductForm from './AddProductForm'; 
import notificationIcon from '../assets/notification.png';
import settingIcon from '../assets/setting.png';
import setIcon from '../assets/ser.png';
import beingImage from '../assets/being.png';
import cdIcon from '../assets/cd.png';

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen w-full bg-[#F9FAFB] flex font-['Lato'] overflow-x-hidden">
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-40 md:hidden transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <div className={`fixed inset-y-0 left-0 z-50 transform md:relative md:translate-x-0 transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <Sidebar activeTab={activeTab} setActiveTab={(tab) => { setActiveTab(tab); setIsMobileMenuOpen(false); }} />
      </div>

      {/* Main Column Container */}
      <div className="flex-1 flex flex-col min-w-0 min-h-screen justify-between w-full">
        {/* Top Header */}
        <header className="h-20 bg-white border-b border-gray-100 px-4 md:px-8 flex items-center justify-between w-full sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 focus:outline-none cursor-pointer"
              aria-label="Toggle Mobile Menu"
            >
              <img src={cdIcon} alt="Toggle Menu" className="w-[12px] h-[18px] object-contain" />
            </button>

            <h1 className="text-lg md:text-xl font-bold text-[#1A202C] truncate">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1).replace('-', ' ')}
            </h1>
          </div>

          <div className="flex items-center space-x-2.5 md:space-x-5">
            <div className="relative hidden lg:flex items-center">
              <input 
                type="text" 
                placeholder="Search data, users, or reports" 
                className="w-[240px] xl:w-[340px] h-[44px] bg-[#F9FAFB] rounded-full pl-5 pr-11 text-[16px] text-[#00000099] placeholder-[#00000099] tracking-[0.08px] border border-transparent focus:border-gray-200 focus:outline-none" 
              />
              <img src={setIcon} alt="Search Icon" className="w-[12px] h-[12px] absolute right-4 text-black pointer-events-none" />
            </div>
            <button className="flex lg:hidden p-2 hover:bg-gray-50 rounded-full transition-colors cursor-pointer" aria-label="Search">
              <img src={settingIcon} alt="Search" className="w-[20px] h-[20px] object-contain" />
            </button>
            <button className="p-1.5 md:p-1 hover:bg-gray-50 rounded-full transition-colors cursor-pointer" aria-label="Notifications">
              <img src={notificationIcon} alt="Notification" className="w-[20px] h-[20px] md:w-[24px] md:h-[24px] object-contain" />
            </button>
            <div className="hidden sm:flex items-center bg-[#E8F5E9] p-1 rounded-full w-[46px] md:w-[50px] h-[26px] md:h-[28px] cursor-pointer">
              <div className="w-[20px] md:w-[22px] h-[20px] md:h-[22px] bg-white rounded-full flex items-center justify-center shadow-sm">
                <img src={settingIcon} alt="Settings" className="w-[12px] md:w-[14px] h-[12px] md:h-[14px] object-contain" />
              </div>
            </div>
            <div className="w-[36px] h-[36px] md:w-[40px] md:h-[40px] rounded-[40px] overflow-hidden flex-shrink-0 cursor-pointer border border-gray-100">
              <img src={beingImage} alt="User Profile" className="w-full h-full object-cover" />
            </div>
          </div>
        </header>
        <main className="flex-1 p-4 md:p-8 overflow-y-auto flex flex-col justify-between w-full max-w-[1600px] mx-auto">
          <div className="w-full flex-1 flex flex-col justify-between gap-6">
            {activeTab === 'dashboard' && <DashboardCards />}
            {activeTab === 'customers' && <CustomerCards />}
            {activeTab === 'add-products' && <AddProductForm />}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;