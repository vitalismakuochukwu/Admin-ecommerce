import editIcon from '../assets/edit.png';
import deleteIcon from '../assets/delete.png';
import circleIcon from '../assets/circle.png';
import leftIcon from '../assets/left.png';
import rightIcon from '../assets/right.png';

export const CustomerTableHeader = () => {
  const commonCellClasses = "flex h-[40px] p-[10px] justify-center items-center gap-[10px] min-w-[110px] flex-1 text-[#023337] font-['Lato'] text-[14px] md:text-[15px] font-medium leading-normal whitespace-nowrap";

  return (
    <div className="flex p-[8px] items-center gap-[16px] self-stretch rounded-[6px] bg-[#EAF8E7] mb-2 min-w-[750px]">
      <div className={commonCellClasses}>Customer Id</div>
      <div className={commonCellClasses}>Name</div>
      <div className={commonCellClasses}>Phone</div>
      <div className={commonCellClasses}>Order Count</div>
      <div className={commonCellClasses}>Total Spend</div>
      <div className={commonCellClasses}>Status</div>
      <div className="flex w-[79px] h-[40px] p-[10px] justify-center items-center gap-[10px] text-[#023337] font-['Lato'] text-[14px] md:text-[15px] font-medium leading-normal flex-shrink-0">Action</div>
    </div>
  );
};

interface CustomerData { 
  id: string; 
  name: string; 
  phone: string; 
  orderCount: number; 
  totalSpend: string; 
  status: 'Active' | 'Inactive' | 'VIP';
}

export const CustomerTableRow = ({ data }: { data: CustomerData }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'text-[#21C45D]';
      case 'Inactive': return 'text-[#EF4444]';
      case 'VIP': return 'text-[#F59E0B]';
      default: return 'text-[#21C45D]';
    }
  };
  const cellClasses = "flex h-[40px] p-[10px] justify-center items-center gap-[10px] min-w-[110px] flex-1 text-[#000] font-['Lato'] text-[14px] md:text-[15px] font-normal whitespace-nowrap";

  return (
    <div className="flex p-[8px] items-center gap-[16px] self-stretch border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors min-w-[750px]">
      <div className={cellClasses}>{data.id}</div>
      <div className={cellClasses}>{data.name}</div>
      <div className={cellClasses}>{data.phone}</div>
      <div className={cellClasses}>{data.orderCount}</div>
      <div className={cellClasses}>{data.totalSpend}</div>
      
      <div className={cellClasses}>
        <img src={circleIcon} alt="Status" className="w-[8px] h-[8px] object-contain" />
        <span className={getStatusColor(data.status)}>
          {data.status}
        </span>
      </div>
      
      <div className="flex w-[79px] h-[40px] p-[10px] justify-center items-center gap-[12px] flex-shrink-0">
        <button className="hover:opacity-70 transition-opacity cursor-pointer" aria-label="Edit">
          <img src={editIcon} alt="Edit" className="w-[18px] md:w-[20px] h-[18px] md:h-[20px] object-contain" />
        </button>
        <button className="hover:opacity-70 transition-opacity cursor-pointer" aria-label="Delete">
          <img src={deleteIcon} alt="Delete" className="w-[12px] md:w-[13.75px] h-[14px] md:h-[16.25px] object-contain" />
        </button>
      </div>
    </div>
  );
};

export const Pagination = () => {
  const pages = [1, 2, 3, 4, 5, '...', 24];

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-[24px] md:mt-[32px] w-full">
      <button className="flex items-center gap-[8px] px-[12px] py-[8px] border border-gray-200 rounded-[6px] hover:bg-gray-50 transition-colors w-full sm:w-auto justify-center cursor-pointer">
        <img src={leftIcon} alt="Previous" className="w-[10px] h-[8.75px] object-contain flex-shrink-0" />
        <span className="text-[#000] font-['Lato'] text-[14px] md:text-[15px] font-medium">Previous</span>
      </button>

      <div className="flex items-center gap-[4px] overflow-x-auto max-w-full pb-2 sm:pb-0">
        {pages.map((page, index) => (
          <button 
            key={index}
            className={`flex w-[32px] md:w-[36px] h-[32px] md:h-[36px] p-[10px] flex-col justify-center items-center gap-[10px] rounded-[4px] font-['Lato'] text-[14px] md:text-[15px] font-bold transition-colors cursor-pointer flex-shrink-0 ${
              page === 1 
                ? 'bg-[#C1E6BA] text-[#023337]' 
                : 'bg-transparent text-[#023337] hover:bg-gray-100'
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      <button className="flex items-center gap-[8px] px-[12px] py-[8px] border border-gray-200 sm:border-0 hover:bg-gray-50 transition-colors rounded-[6px] w-full sm:w-auto justify-center cursor-pointer">
        <span className="text-[#000] font-['Lato'] text-[14px] md:text-[15px] font-medium">Next</span>
        <img src={rightIcon} alt="Next" className="w-[10px] h-[8.75px] object-contain flex-shrink-0" />
      </button>
    </div>
  );
};

const CustomerDetails = () => {
  const customers: CustomerData[] = [
    { id: '#CUST001', name: 'John Doe', phone: '+1234567890', orderCount: 25, totalSpend: '3,450.00', status: 'Active' },
    { id: '#CUST002', name: 'Sarah Jenkins', phone: '+1234567891', orderCount: 12, totalSpend: '1,200.00', status: 'Active' },
    { id: '#CUST003', name: 'Michael Brown', phone: '+1234567892', orderCount: 8, totalSpend: '850.00', status: 'Inactive' },
    { id: '#CUST004', name: 'Jane Smith', phone: '+1234567893', orderCount: 5, totalSpend: '250.00', status: 'Inactive' },
    { id: '#CUST005', name: 'Emily Davis', phone: '+1234567894', orderCount: 30, totalSpend: '4,600.00', status: 'VIP' },
    { id: '#CUST006', name: 'Robert Wilson', phone: '+1234567895', orderCount: 42, totalSpend: '7,100.00', status: 'VIP' },
  ];

  return (
    <div className="flex flex-col gap-[20px] md:gap-[24px] w-full bg-white rounded-[8px] p-[16px] md:p-[24px] shadow-sm">
      <h2 className="text-[#23272E] font-['Lato'] text-[18px] font-bold leading-[26px]">
        Customer Details
      </h2>
      <div className="w-full overflow-x-auto pb-2">
        <div className="flex flex-col w-full">
          <CustomerTableHeader />
          
          <div className="flex flex-col w-full">
            {customers.map((customer, index) => (
              <CustomerTableRow key={index} data={customer} />
            ))}
          </div>
        </div>
      </div>

      <Pagination />
    </div>
  );
};

export default CustomerDetails;