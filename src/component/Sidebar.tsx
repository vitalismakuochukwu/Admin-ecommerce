import React, { useState } from 'react';
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
  const [isCollapsed, setIsCollapsed] = useState(false);

  const getLinkStyles = (tabName: string) => {
    const isActive = activeTab === tabName;
    return `flex items-center py-2.5 rounded-lg font-['Lato'] text-[16px] leading-[22px] transition-all duration-200 ${
      isCollapsed ? 'justify-center px-0 w-10 mx-auto' : 'px-[14px] gap-3 w-full'
    } ${
      isActive 
        ? 'bg-[#4EA674] text-white font-bold' 
        : 'text-[#6A717F] font-normal hover:bg-gray-50'
    }`;
  };

  const getIconFilter = (tabName: string) => {
    // Keeps it white when it is the active selected tab
    if (activeTab === tabName) return 'brightness-0 invert';
    // Forces the dashboard icon to be black when not active
    if (tabName === 'dashboard') return 'brightness-0';
    return '';
  };

  return (
    <aside className={`bg-white border-r border-gray-200 py-4 min-h-screen flex flex-col flex-shrink-0 transition-all duration-300 ${isCollapsed ? 'w-20 px-2' : 'w-64 px-4'}`}>
      
      {/* Header & Toggle Button */}
      <div className={`mb-8 flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'}`}> 
        {!isCollapsed && (
          <img src={logo} alt="Dealport Logo" className="w-[120px] h-[16.7px] object-contain transition-opacity duration-200" /> 
        )}
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)} 
          className="cursor-pointer p-2 rounded-lg hover:bg-gray-100 focus:outline-none flex items-center justify-center transition-colors"
          title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
        >
          <img 
            src={cdIcon} 
            alt="Menu Toggle" 
            className={`w-[14px] h-[18px] object-contain transition-transform duration-300 ${isCollapsed ? 'rotate-180' : ''}`} 
          />
        </button>
      </div>

      {/* Main Menu Nav */}
      <div className="mb-6 w-full flex flex-col">
        {!isCollapsed && (
          <p className="text-[#6A717F] font-['Lato'] text-[15px] font-normal leading-[24px] mb-3 px-[14px]"> 
            Main menu 
          </p>
        )}
        
        <nav className="flex flex-col space-y-2 w-full">
          <button 
            onClick={() => setActiveTab('dashboard')} 
            className={getLinkStyles('dashboard')}
            title={isCollapsed ? "Dashboard" : ""}
          >
            <img src={homeIcon} alt="Dashboard" className={`w-5 h-5 object-contain flex-shrink-0 transition-all ${getIconFilter('dashboard')}`} />
            {!isCollapsed && <span className="flex-1 text-left truncate">Dashboard</span>}
          </button>

          <button 
            onClick={() => setActiveTab('customers')} 
            className={getLinkStyles('customers')}
            title={isCollapsed ? "Customers" : ""}
          >
            <img src={customerIcon} alt="Customers" className={`w-[22px] h-[22px] object-contain flex-shrink-0 transition-all ${getIconFilter('customers')}`} />
            {!isCollapsed && <span className="flex-1 text-left truncate">Customers</span>}
          </button>
        </nav>
      </div>

      {/* Product Menu Nav */}
      <div className="w-full flex flex-col">
        {!isCollapsed ? (
          <button 
            onClick={() => setIsProductMenuOpen(!isProductMenuOpen)}
            className="w-full flex items-center justify-between px-[14px] py-2 mb-2 cursor-pointer group rounded-lg hover:bg-gray-50 transition-colors"
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
          <div className="border-t border-gray-200 my-4 mx-4"></div>
        )}

        {(isProductMenuOpen || isCollapsed) && (
          <nav className="flex flex-col space-y-2 w-full">
            <button 
              onClick={() => setActiveTab('add-products')} 
              className={getLinkStyles('add-products')}
              title={isCollapsed ? "Add Products" : ""}
            >
              <img src={addIcon} alt="Add Products" className={`w-[22px] h-[22px] object-contain flex-shrink-0 transition-all ${getIconFilter('add-products')}`} />
              {!isCollapsed && <span className="flex-1 text-left truncate">Add Products</span>}
            </button>

            <button 
              onClick={() => setActiveTab('product-media')} 
              className={getLinkStyles('product-media')}
              title={isCollapsed ? "Product Media" : ""}
            >
              <img src={medIcon} alt="Product Media" className={`w-[20px] h-[20px] object-contain flex-shrink-0 transition-all ${getIconFilter('product-media')}`} />
              {!isCollapsed && <span className="flex-1 text-left truncate">Product Media</span>}
            </button>

            <button 
              onClick={() => setActiveTab('product-list')} 
              className={getLinkStyles('product-list')}
              title={isCollapsed ? "Product List" : ""}
            >
              <img src={listIcon} alt="Product List" className={`w-[22px] h-[22px] object-contain flex-shrink-0 transition-all ${getIconFilter('product-list')}`} />
              {!isCollapsed && <span className="flex-1 text-left truncate">Product List</span>}
            </button>

            <button 
              onClick={() => setActiveTab('product-reviews')} 
              className={getLinkStyles('product-reviews')}
              title={isCollapsed ? "Product Reviews" : ""}
            >
              <img src={viewIcon} alt="Product Reviews" className={`w-[22px] h-[22px] object-contain flex-shrink-0 transition-all ${getIconFilter('product-reviews')}`} />
              {!isCollapsed && <span className="flex-1 text-left truncate">Product Reviews</span>}
            </button>
          </nav>
        )}
      </div>

    </aside>
  );
};

export default Sidebar;