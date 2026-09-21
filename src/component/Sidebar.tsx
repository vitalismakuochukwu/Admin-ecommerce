import React, { useState } from 'react';
// Main assets
import logo from '../assets/logo.png';
import homeIcon from '../assets/home.png';
import cdIcon from '../assets/cd.png';
// New assets
import customerIcon from '../assets/customers.png'; 
import addIcon from '../assets/add.png';
import medIcon from '../assets/med.png';
import listIcon from '../assets/list.png';
import viewIcon from '../assets/view.png';
// Import the new arrow icon
import arrowIcon from '../assets/arrow.png';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const [isProductMenuOpen, setIsProductMenuOpen] = useState(true);
  const getLinkStyles = (tabName: string) => {
    const isActive = activeTab === tabName;
    return `flex items-center px-[14px] py-2.5 rounded-lg font-['Lato'] text-[16px] leading-[22px] gap-2 transition-colors ${
      isActive 
        ? 'bg-[#4EA674] text-white font-bold' 
        : 'text-[#6A717F] font-normal hover:bg-gray-50'
    }`;
  };

  return (
    <aside className="w-64 bg-white border-r border-gray-200 p-4 min-h-screen flex flex-col flex-shrink-0">
      <div className="mb-8 flex items-center justify-between cursor-pointer"> 
        <img src={logo} alt="Dealport Logo" className="w-[120px] h-[16.7px] object-contain" /> 
        <img src={cdIcon} alt="Menu Toggle" className="w-[9px] h-[18px] object-contain" />
      </div>
      <div className="mb-6">
        <p className="text-[#6A717F] font-['Lato'] text-[15px] font-normal leading-[24px] mb-3 px-[14px]"> 
          Main menu 
        </p>
        
        <nav className="flex flex-col space-y-1">
          <button onClick={() => setActiveTab('dashboard')} className={getLinkStyles('dashboard')}>
            <img src={homeIcon} alt="Home" className={`w-5 h-5 object-contain ${activeTab === 'dashboard' ? 'brightness-200' : ''}`} />
            <span className="flex-1 text-left">Dashboard</span>
          </button>
          <button onClick={() => setActiveTab('customers')} className={getLinkStyles('customers')}>
            <img src={customerIcon} alt="Customers" className={`w-[22px] h-[22px] object-contain ${activeTab === 'customers' ? 'brightness-200' : ''}`} />
            <span className="flex-1 text-left">Customers</span>
          </button>
        </nav>
      </div>
      <div>
        <button 
          onClick={() => setIsProductMenuOpen(!isProductMenuOpen)}
          className="w-full flex items-center justify-between px-[14px] mb-3 cursor-pointer group"
        >
          <p className="text-[#6A717F] font-['Lato'] text-[15px] font-normal leading-[24px] group-hover:text-gray-900 transition-colors"> 
            Product
          </p>
          <img 
            src={arrowIcon} 
            alt="Toggle Menu" 
            className={`w-3 h-3 object-contain transition-transform duration-200 ${isProductMenuOpen ? 'rotate-180' : 'rotate-0'}`} 
          />
        </button>

        {isProductMenuOpen && (
          <nav className="flex flex-col space-y-1">
            <button onClick={() => setActiveTab('add-products')} className={getLinkStyles('add-products')}>
              <img src={addIcon} alt="Add Products" className={`w-[22px] h-[22px] object-contain ${activeTab === 'add-products' ? 'brightness-200' : ''}`} />
              <span className="flex-1 text-left">Add Products</span>
            </button>

            <button onClick={() => setActiveTab('product-media')} className={getLinkStyles('product-media')}>
              <img src={medIcon} alt="Product Media" className={`w-[16.5px] h-[16.5px] object-contain ml-[2.75px] mr-[2.75px] ${activeTab === 'product-media' ? 'brightness-200' : ''}`} />
              <span className="flex-1 text-left">Product Media</span>
            </button>

            <button onClick={() => setActiveTab('product-list')} className={getLinkStyles('product-list')}>
              <img src={listIcon} alt="Product List" className={`w-[22px] h-[22px] object-contain ${activeTab === 'product-list' ? 'brightness-200' : ''}`} />
              <span className="flex-1 text-left">Product List</span>
            </button>

            <button onClick={() => setActiveTab('product-reviews')} className={getLinkStyles('product-reviews')}>
              <img src={viewIcon} alt="Product Reviews" className={`w-[22px] h-[22px] object-contain ${activeTab === 'product-reviews' ? 'brightness-200' : ''}`} />
              <span className="flex-1 text-left">Product Reviews</span>
            </button>
          </nav>
        )}
      </div>

    </aside>
  );
};

export default Sidebar;