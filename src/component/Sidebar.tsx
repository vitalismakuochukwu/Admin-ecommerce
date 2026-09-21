import React, { useState } from 'react';
// Main assets
import logo from '../assets/logo.png';
import homeIcon from '../assets/home.png';
import cdIcon from '../assets/cd.png';
import customerIcon from '../assets/customers.png'; 
import addIcon from '../assets/add.png';
import medIcon from '../assets/med.png';
import listIcon from '../assets/list.png';
import viewIcon from '../assets/view.png';
import arrowIcon from '../assets/arrow.png';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const [isProductMenuOpen, setIsProductMenuOpen] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false); // Controls collapse/normal state

  const getLinkStyles = (tabName: string) => {
    const isActive = activeTab === tabName;
    return `flex items-center px-[14px] py-2.5 rounded-lg font-['Lato'] text-[16px] leading-[22px] gap-3 transition-colors ${
      isActive 
        ? 'bg-[#4EA674] text-white font-bold' 
        : 'text-[#6A717F] font-normal hover:bg-gray-50'
    }`;
  };

  // Helper to make icons turn solid white when active, and gray when inactive
  const getIconFilter = (tabName: string) => {
    return activeTab === tabName ? 'brightness-0 invert' : '';
  };

  return (
    <aside className={`bg-white border-r border-gray-200 p-4 min-h-screen flex flex-col flex-shrink-0 transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-64'}`}>
      
      {/* Top Header with Logo and cd.png Toggle aligned side-by-side */}
      <div className="mb-8 flex items-center justify-between"> 
        {!isCollapsed && (
          <img src={logo} alt="Dealport Logo" className="w-[120px] h-[16.7px] object-contain transition-opacity duration-200" /> 
        )}
        
        {/* Clicking cd.png toggles between collapsed and normal */}
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)} 
          className={`cursor-pointer p-1 rounded hover:bg-gray-100 focus:outline-none ${isCollapsed ? 'mx-auto' : ''}`}
          title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
        >
          <img 
            src={cdIcon} 
            alt="Menu Toggle" 
            className={`w-[12px] h-[18px] object-contain transition-transform duration-300 ${isCollapsed ? 'rotate-180' : ''}`} 
          />
        </button>
      </div>

      {/* Main Menu Section */}
      <div className="mb-6">
        {!isCollapsed && (
          <p className="text-[#6A717F] font-['Lato'] text-[15px] font-normal leading-[24px] mb-3 px-[14px]"> 
            Main menu 
          </p>
        )}
        
        <nav className="flex flex-col space-y-1">
          <button 
            onClick={() => setActiveTab('dashboard')} 
            className={getLinkStyles('dashboard')}
            title={isCollapsed ? "Dashboard" : ""}
          >
            <img src={homeIcon} alt="Home" className={`w-5 h-5 object-contain flex-shrink-0 ${getIconFilter('dashboard')}`} />
            {!isCollapsed && <span className="flex-1 text-left truncate">Dashboard</span>}
          </button>

          <button 
            onClick={() => setActiveTab('customers')} 
            className={getLinkStyles('customers')}
            title={isCollapsed ? "Customers" : ""}
          >
            <img src={customerIcon} alt="Customers" className={`w-[22px] h-[22px] object-contain flex-shrink-0 ${getIconFilter('customers')}`} />
            {!isCollapsed && <span className="flex-1 text-left truncate">Customers</span>}
          </button>
        </nav>
      </div>

      {/* Product Section */}
      <div>
        {!isCollapsed ? (
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
        ) : (
          <div className="border-t border-gray-200 my-3"></div>
        )}

        {(isProductMenuOpen || isCollapsed) && (
          <nav className="flex flex-col space-y-1">
            <button 
              onClick={() => setActiveTab('add-products')} 
              className={getLinkStyles('add-products')}
              title={isCollapsed ? "Add Products" : ""}
            >
              <img src={addIcon} alt="Add Products" className={`w-[22px] h-[22px] object-contain flex-shrink-0 ${getIconFilter('add-products')}`} />
              {!isCollapsed && <span className="flex-1 text-left truncate">Add Products</span>}
            </button>

            <button 
              onClick={() => setActiveTab('product-media')} 
              className={getLinkStyles('product-media')}
              title={isCollapsed ? "Product Media" : ""}
            >
              <img src={medIcon} alt="Product Media" className={`w-[16.5px] h-[16.5px] object-contain ml-[2.75px] mr-[2.75px] flex-shrink-0 ${getIconFilter('product-media')}`} />
              {!isCollapsed && <span className="flex-1 text-left truncate">Product Media</span>}
            </button>

            <button 
              onClick={() => setActiveTab('product-list')} 
              className={getLinkStyles('product-list')}
              title={isCollapsed ? "Product List" : ""}
            >
              <img src={listIcon} alt="Product List" className={`w-[22px] h-[22px] object-contain flex-shrink-0 ${getIconFilter('product-list')}`} />
              {!isCollapsed && <span className="flex-1 text-left truncate">Product List</span>}
            </button>

            <button 
              onClick={() => setActiveTab('product-reviews')} 
              className={getLinkStyles('product-reviews')}
              title={isCollapsed ? "Product Reviews" : ""}
            >
              <img src={viewIcon} alt="Product Reviews" className={`w-[22px] h-[22px] object-contain flex-shrink-0 ${getIconFilter('product-reviews')}`} />
              {!isCollapsed && <span className="flex-1 text-left truncate">Product Reviews</span>}
            </button>
          </nav>
        )}
      </div>

    </aside>
  );
};

export default Sidebar;