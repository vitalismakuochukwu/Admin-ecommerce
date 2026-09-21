import React from 'react';
import lineIcon from '../assets/line.png'; 
import chartImg from '../assets/chart.png';
import CustomerDetails from '../component/CustomerDetails'; 

interface CardWrapperProps {
  title: string;
  showDetailsBtn?: boolean;
  children: React.ReactNode;
}

export const CardWrapper: React.FC<CardWrapperProps> = ({ title, showDetailsBtn = false, children }) => {
  return (
    <div className="w-full bg-white rounded-[8px] shadow-[0_1px_3px_0_rgba(0,0,0,0.20)] p-[20px] md:p-[24px] flex flex-col relative font-['Lato'] overflow-hidden">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-[#23272E] text-[18px] font-bold leading-[26px]">{title}</h3>
        <img src={lineIcon} alt="Menu" className="w-[20px] h-[20px] object-contain cursor-pointer" />
      </div>
      
      <div className="flex-1 flex flex-col justify-end">
        {children}
      </div>

      {showDetailsBtn && (
        <button className="absolute bottom-6 right-6 border border-[#6467F2] text-[#6467F2] rounded-[30px] px-[20px] py-[2px] text-[16px] leading-[26px] tracking-[-0.32px] hover:bg-indigo-50 transition-colors">
          Details
        </button>
      )}
    </div>
  );
};

interface StandardStatProps {
  mainValue: string;
  label?: string;
  trendText: string;
  isTrendUp: boolean;
  bottomLabel?: string;
}

export const StandardStat: React.FC<StandardStatProps> = ({ mainValue, label, trendText, isTrendUp, bottomLabel }) => {
  return (
    <div>
      <div className="flex items-center gap-2">
        <span className="text-[#023337] text-[28px] md:text-[32px] font-bold leading-none">{mainValue}</span>
        {label && <span className="text-black text-[16px]">{label}</span>}
        <span className={`text-[14px] font-medium flex items-center ${isTrendUp ? 'text-[#21C45D]' : 'text-[#EF4444]'}`}>
          {isTrendUp ? '↑' : '↓'} {trendText}
        </span>
      </div>
      
      {bottomLabel && (
        <div className="text-[14px] leading-normal text-[#8B909A] mt-[4px]">
          {bottomLabel}
        </div>
      )}
    </div>
  );
};

interface ChartStatProps {
  value: string;
  label: string;
  isActive?: boolean;
}

const ChartStat: React.FC<ChartStatProps> = ({ value, label, isActive }) => {
  return (
    <div className={`flex flex-col justify-center items-start gap-[8px] pb-[12px] min-w-[110px] flex-1 cursor-pointer transition-colors ${
      isActive ? 'border-b-[2px] border-[#4EA674]' : 'border-b-[2px] border-[#F3F4F6] hover:border-gray-300'
    }`}>
      <span className="text-[#23272E] font-['Lato'] text-[20px] md:text-[24px] font-bold leading-[22px]">
        {value}
      </span>
      <span className="text-[#8B909A] font-['Lato'] text-[12px] md:text-[13px] font-medium leading-[18px] tracking-[-0.26px] whitespace-nowrap">
        {label}
      </span>
    </div>
  );
};

interface ChartTooltipProps {
  day: string;
  value: string;
  top: string;
  left: string;
}

const ChartTooltip: React.FC<ChartTooltipProps> = ({ day, value, top, left }) => {
  return (
    <div 
      className="absolute flex flex-col justify-center items-center py-1 px-3 bg-[#EAF8E7] rounded border border-[#4EA674] shadow-[0_2px_4px_rgba(0,0,0,0.05)] z-10 pointer-events-none"
      style={{ top, left, transform: 'translate(-50%, -100%)' }}
    >
      <span className="text-[#6A717F] font-['Poppins'] text-[10px] font-medium leading-none mb-1">
        {day}
      </span>
      <span className="text-[#023337] font-['Lato'] text-[12px] font-bold leading-none">
        {value}
      </span>
      <div className="absolute -bottom-[5px] left-1/2 transform -translate-x-1/2 w-[6px] h-[6px] bg-white border border-[#4EA674] rounded-full"></div>
      <div className="absolute top-[100%] left-1/2 transform -translate-x-1/2 w-[1px] h-[85px] border-l border-dashed border-[#C3D0C7] -z-10"></div>
    </div>
  );
};

const Customer = () => {
  return (
    <div className="flex flex-col gap-[24px] md:gap-[32px] w-full">
      
      {/* TOP SECTION: Stats & Chart Row - Stacks vertically on mobile, side-by-side on desktop */}
      <div className="flex flex-col lg:flex-row gap-[24px] items-stretch w-full">
        
        {/* LEFT COLUMN: Stacked Stat Cards */}
        <div className="flex flex-col gap-[16px] md:gap-[20px] w-full lg:w-[361px] flex-shrink-0">
          <CardWrapper title="Total Customers">
            <StandardStat mainValue="11,040" trendText="14.4%" isTrendUp={true} bottomLabel="Last 7 days" />
          </CardWrapper>

          <CardWrapper title="New Customers">
            <StandardStat mainValue="2,370" trendText="20%" isTrendUp={true} bottomLabel="Last 7 days" />
          </CardWrapper>

          <CardWrapper title="Visitor">
            <StandardStat mainValue="250k" trendText="20%" isTrendUp={true} bottomLabel="Last 7 days" />
          </CardWrapper>
        </div>

        {/* RIGHT COLUMN: Chart Overview */}
        <div className="w-full lg:w-[826px] bg-white rounded-[8px] shadow-[0_1px_3px_0_rgba(0,0,0,0.20)] flex flex-col font-['Lato'] relative">
          <div className="flex justify-between items-center pt-[20px] px-[20px] md:pt-[24px] md:px-[24px] pb-[16px]">
            <h2 className="text-[#23272E] text-[18px] font-bold leading-[26px]">
              Customer Overview
            </h2>
            
            <div className="flex items-center gap-[12px] md:gap-[16px]">
              <div className="flex p-[4px] gap-[4px] bg-[#F3F5F7] rounded-[12px] items-start">
                <button className="px-[10px] md:px-[12px] py-[4px] rounded-[8px] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.05)] text-[#4EA674] font-['Poppins'] text-[11px] md:text-[12px] font-medium leading-[14px]">
                  This week
                </button>
                <button className="px-[10px] md:px-[12px] py-[4px] text-[#6A717F] font-['Poppins'] text-[11px] md:text-[12px] font-normal leading-[14px] hover:bg-white/50 rounded-[8px] transition-colors">
                  Last week
                </button>
              </div>
              
              <img src={lineIcon} alt="Options" className="w-[20px] h-[20px] object-contain cursor-pointer rotate-90 hidden sm:block" />
            </div>
          </div>

          {/* Metric Selector Tabs (Scrollable on small screens to prevent squishing) */}
          <div className="flex gap-[20px] md:gap-[32px] px-[20px] md:px-[24px] w-full mb-[24px] overflow-x-auto pb-2">
            <ChartStat value="25k" label="Active Customers" isActive={true} />
            <ChartStat value="5.6k" label="Repeat Customers" isActive={false} />
            <ChartStat value="250k" label="Shop Visitor" isActive={false} />
            <ChartStat value="5.5%" label="Conversion Rate" isActive={false} />
          </div>

          <div className="flex-1 flex px-[16px] md:px-[24px] pb-[24px] w-full">
            <div className="flex flex-col justify-between items-end pr-[12px] md:pr-[16px] text-[#8B909A] font-['Lato'] text-[11px] md:text-[12px] pb-[24px]">
              <span>50k</span>
              <span>40k</span>
              <span>30k</span>
              <span>20k</span>
              <span>10k</span>
              <span>0k</span>
            </div>

            <div className="flex-1 flex flex-col relative min-w-0">
              <div className="flex-1 relative w-full h-[185px]">
                <img 
                  src={chartImg} 
                  alt="Customer Trend Chart" 
                  className="w-full h-full object-cover" 
                />
                <ChartTooltip 
                  day="Thursday" 
                  value="25,409" 
                  top="40%" 
                  left="63%" 
                />
              </div>

              <div className="flex justify-between items-center text-[#8B909A] font-['Lato'] text-[11px] md:text-[12px] mt-[12px] px-[8px] md:px-[16px]">
                <span>Sun</span>
                <span>Mon</span>
                <span>Tue</span>
                <span className="text-[#023337] font-bold">Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* BOTTOM SECTION: Customer Details Table */}
      <CustomerDetails />
      
    </div>
  );
};

export default Customer;