import React from 'react';
import lineIcon from '../assets/line.png'; 

interface CardWrapperProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

interface StandardStatProps {
  mainValue: string;
  label?: string;          
  trendText: string;
  isTrendUp: boolean;
  prevLabel?: string;      
  prevValue?: string;      
}

interface SplitStatProps {
  leftTitle: string;
  leftValue: string;
  leftSubtext: string;
  rightTitle: string;
  rightValue: string;
  rightSubtext: string;
}

export const CardWrapper: React.FC<CardWrapperProps> = ({ title, subtitle = "Last 7 days", children }) => {
  return (
    <div className="flex-1 w-full h-[202px] bg-white rounded-[8px] shadow-[0_1px_3px_0_rgba(0,0,0,0.20)] p-6 flex flex-col relative font-['Lato']">
      <div className="flex justify-between items-start mb-4">
        <div className="flex flex-col">
          <h3 className="text-[#23272E] text-[18px] font-bold leading-[26px] mb-0.5">{title}</h3>
          <span className="text-[#6A717F] text-[14px] tracking-[-0.28px]">{subtitle}</span>
        </div>
        <img src={lineIcon} alt="Menu" className="w-[20px] h-[20px] object-contain cursor-pointer" />
      </div>
      <div className="flex-1 mt-1">
        {children}
      </div>
      <button className="absolute bottom-6 right-6 border border-[#6467F2] text-[#6467F2] rounded-[30px] px-[20px] py-[2px] text-[16px] leading-[26px] tracking-[-0.32px] hover:bg-indigo-50 transition-colors">  Details </button>  
    </div>
  );
};

export const StandardStat: React.FC<StandardStatProps> = ({ mainValue, label, trendText, isTrendUp, prevLabel, prevValue }) => {
  return (
    <div>
      <div className="flex items-baseline gap-2 mb-2">
        <span className="text-[#023337] text-[32px] font-bold leading-normal">{mainValue}</span>
        {label && <span className="text-black text-[16px]">{label}</span>}
        <span className={`text-[14px] font-medium ml-1 flex items-center ${isTrendUp ? 'text-[#21C45D]' : 'text-[#EF4444]'}`}>
          {isTrendUp ? '↑' : '↓'} {trendText}
        </span>
      </div>
      
      {prevLabel && (
        <div className="text-[14px] leading-normal mt-3">
          <span className="text-[#6A717F]">{prevLabel} </span>
          <span className="text-[#6467F2] font-bold">{prevValue}</span>
        </div>
      )}
    </div>
  );
};

export const SplitStat: React.FC<SplitStatProps> = ({ leftTitle, leftValue, leftSubtext, rightTitle, rightValue, rightSubtext }) => {
  return (
    <div className="flex items-center gap-10 mt-2">
      <div className="flex flex-col gap-1.5">
        <span className="text-black text-[14px] font-normal">{leftTitle}</span>
        <div className="flex items-baseline gap-2">
          <span className="text-[#023337] text-[24px] font-bold leading-none">{leftValue}</span>
          <span className="text-[14px] font-medium text-[#21C45D]">{leftSubtext}</span>
        </div>
      </div>
      <div className="w-[1px] h-[44px] bg-gray-200"></div>
      <div className="flex flex-col gap-1.5">
        <span className="text-black text-[14px] font-normal">{rightTitle}</span>
        <div className="flex items-baseline gap-2">
          <span className="text-[#EF4444] text-[24px] font-bold leading-none">{rightValue}</span>
          <span className="text-[14px] font-medium text-[#EF4444]">{rightSubtext}</span>
        </div>
      </div>
    </div>
  );
};

const DashboardCards: React.FC = () => {
  return (
    /* Changed from `flex` to `flex flex-col md:flex-row` so cards stack vertically on mobile and sit side-by-side on desktop */
    <div className="flex flex-col md:flex-row gap-5 w-full">
      <CardWrapper title="Total Sales">
        <StandardStat 
          mainValue="$350K" 
          label="Sales" 
          trendText="10.4%" 
          isTrendUp={true} 
          prevLabel="Previous 7days" 
          prevValue="($235)" 
        />
      </CardWrapper>

      <CardWrapper title="Total Orders">
        <StandardStat 
          mainValue="10.7K" 
          label="order" 
          trendText="14.4%" 
          isTrendUp={true} 
          prevLabel="Previous 7days" 
          prevValue="(7.6k)" 
        />
      </CardWrapper>

      <CardWrapper title="Pending & Canceled">
        <SplitStat 
          leftTitle="Pending"
          leftValue="509"
          leftSubtext="user 204"
          rightTitle="Canceled"
          rightValue="94"
          rightSubtext="↓ 14.4%"
        />
      </CardWrapper>
    </div>
  );
};

export default DashboardCards;