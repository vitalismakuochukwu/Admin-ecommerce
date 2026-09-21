import React, { useState } from 'react';
import settingIcon from '../assets/setting.png';
import ritaIcon from '../assets/rita.png';
import rieIcon from '../assets/rie.png';
import usaIcon from '../assets/usa.png';
import retIcon from '../assets/ret.png';
import bleIcon from '../assets/ble.png';
import whiteIcon from '../assets/white.png';
import calenderIcon from '../assets/calender.png';
import markIcon from '../assets/mark.png';
import peIcon from '../assets/pe.png';
import phoneImg from '../assets/phone.png';

const AddProductForm = () => {
  const [formData, setFormData] = useState({
    search: '',
    name: 'iPhone 15',
    description:
      'The iPhone 15 delivers cutting-edge performance with the A16 Bionic chip, an immersive Super Retina XDR display, advanced dual-camera system, and exceptional battery life, all encased in stunning aerospace-grade aluminum.',
    price: 999.89,
    discountedPrice: 99.00,
    taxIncluded: true,
    startDate: '',
    endDate: '',
    stockQuantity: '',
    stockStatus: 'In Stock',
    isUnlimited: true,
    isHighlighted: true,
    category: '',
    tag: '',
    color: 'green'
  });

  // Dynamic sale price calculation ($999.89 - $99.00 = $900.89)
  const salePrice = Math.max(
    0,
    Number(formData.price) - Number(formData.discountedPrice)
  ).toFixed(2);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-full min-h-screen bg-[#F8FAFC] p-8 flex flex-col gap-6 font-['Lato',sans-serif]">
      {/* Top Header Section */}
      <div className="flex items-center justify-between w-full max-w-[1010px]">
        <h2 className="text-[#023337] text-[20px] font-bold tracking-tight">
          Add New Product
        </h2>

        {/* Search Input */}
        <div className="flex items-center w-[280px] h-[38px] px-3 rounded-lg border border-[#E5E7EB] bg-white shadow-sm focus-within:border-[#4EA674] transition-colors">
          <input
            type="text"
            name="search"
            value={formData.search}
            onChange={handleChange}
            placeholder="Search product for add"
            className="w-full text-[#1A202C] placeholder:text-[#9CA3AF] text-[13px] outline-none bg-transparent"
          />
          <img
            src={settingIcon}
            alt="Search icon"
            className="w-[16px] h-[16px] opacity-40 cursor-pointer hover:opacity-70"
          />
        </div>
      </div>

      {/* Main Two-Column Layout */}
      <div className="flex items-start gap-6 max-w-[1010px]">
        {/* ========================================= */}
        {/* LEFT COLUMN: Main Product Details Form    */}
        {/* ========================================= */}
        <div className="w-[494px] rounded-xl bg-white border border-[#E5E7EB] shadow-sm flex flex-col p-6 gap-6">
          {/* Basic Details Section */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[#1A202C] text-[16px] font-bold border-b border-transparent">
              Basic Details
            </h3>

            <div className="flex flex-col gap-1.5">
              <label className="text-[#1A202C] text-[13px] font-bold">
                Product Name
              </label>
              <div className="flex h-[40px] px-3 items-center rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] focus-within:border-[#4EA674] focus-within:bg-white transition-colors">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent outline-none text-[#1A202C] text-[13px] font-normal"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[#1A202C] text-[13px] font-bold">
                Product Description
              </label>
              <div className="flex flex-col h-[130px] p-3 rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] focus-within:border-[#4EA674] focus-within:bg-white transition-colors relative">
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full h-[85px] bg-transparent outline-none resize-none text-[#1A202C] text-[13px] leading-[20px]"
                />
                <div className="absolute bottom-3 right-3 flex items-center gap-3">
                  <button type="button" className="hover:opacity-70 transition-opacity">
                    <img src={ritaIcon} alt="Edit" className="w-[14px] h-[14px] opacity-60" />
                  </button>
                  <button type="button" className="hover:opacity-70 transition-opacity">
                    <img src={rieIcon} alt="Expand" className="w-[14px] h-[14px] opacity-60" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[#1A202C] text-[16px] font-bold">Pricing</h3>

            <div className="flex flex-col gap-1.5">
              <label className="text-[#1A202C] text-[13px] font-bold">
                Product Price
              </label>
              <div className="flex h-[40px] px-3 items-center justify-between rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] focus-within:border-[#4EA674] focus-within:bg-white transition-colors">
                <div className="flex items-center flex-1">
                  <span className="text-[#1A202C] text-[13px] font-bold mr-1">$</span>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    className="w-full bg-transparent outline-none text-[#1A202C] text-[13px] font-bold"
                  />
                </div>
                <div className="flex items-center gap-1.5 cursor-pointer pl-2">
                  <img src={usaIcon} alt="US Flag" className="w-[20px] h-[14px] object-cover rounded-[2px]" />
                  <img src={retIcon} alt="Dropdown" className="w-[12px] h-[12px] opacity-50" />
                </div>
              </div>
            </div>

            {/* Discounted Price & Tax Included */}
            <div className="flex gap-4">
              <div className="flex flex-col gap-1.5 flex-1">
                <label className="text-[#1A202C] text-[13px] font-bold">
                  Discounted Price <span className="text-[#6A717F] font-normal text-[12px]">(Optional)</span>
                </label>
                <div className="flex h-[40px] px-3 items-center justify-between rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] focus-within:border-[#4EA674] focus-within:bg-white transition-colors">
                  <div className="flex items-center w-1/3">
                    <span className="text-[#1A202C] text-[13px] font-bold mr-1">$</span>
                    <input
                      type="number"
                      name="discountedPrice"
                      value={formData.discountedPrice}
                      onChange={handleChange}
                      className="w-full bg-transparent outline-none text-[#1A202C] text-[13px] font-bold"
                    />
                  </div>
                  <span className="text-[#1A202C] text-[13px] font-bold">
                    Sale= ${salePrice}
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-1.5 w-[130px]">
                <label className="text-[#1A202C] text-[13px] font-bold">
                  Tax Included
                </label>
                <div className="flex h-[40px] items-center gap-4">
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="taxIncluded"
                      className="hidden"
                      checked={formData.taxIncluded}
                      onChange={() => setFormData((prev) => ({ ...prev, taxIncluded: true }))}
                    />
                    <img src={formData.taxIncluded ? bleIcon : whiteIcon} alt="Yes" className="w-[16px] h-[16px]" />
                    <span className="text-[13px] text-[#1A202C] font-semibold">Yes</span>
                  </label>

                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="taxIncluded"
                      className="hidden"
                      checked={!formData.taxIncluded}
                      onChange={() => setFormData((prev) => ({ ...prev, taxIncluded: false }))}
                    />
                    <img src={!formData.taxIncluded ? bleIcon : whiteIcon} alt="No" className="w-[16px] h-[16px]" />
                    <span className="text-[13px] text-[#6A717F]">No</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Expiration Dates */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[#1A202C] text-[13px] font-bold">
                Expiration
              </label>
              <div className="flex gap-4">
                <div className="flex h-[40px] px-3 items-center justify-between flex-1 rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] relative focus-within:border-[#4EA674] focus-within:bg-white transition-colors">
                  <input
                    type="text"
                    name="startDate"
                    placeholder="Start"
                    value={formData.startDate}
                    onChange={handleChange}
                    className="w-full bg-transparent outline-none text-[#1A202C] text-[13px] placeholder:text-[#6A717F]"
                  />
                  <img src={calenderIcon} alt="Calendar" className="w-[16px] h-[16px] opacity-60 pointer-events-none" />
                </div>

                <div className="flex h-[40px] px-3 items-center justify-between flex-1 rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] relative focus-within:border-[#4EA674] focus-within:bg-white transition-colors">
                  <input
                    type="text"
                    name="endDate"
                    placeholder="End"
                    value={formData.endDate}
                    onChange={handleChange}
                    className="w-full bg-transparent outline-none text-[#1A202C] text-[13px] placeholder:text-[#6A717F]"
                  />
                  <img src={calenderIcon} alt="Calendar" className="w-[16px] h-[16px] opacity-60 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* Inventory Section */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[#1A202C] text-[16px] font-bold">Inventory</h3>

            <div className="flex gap-4">
              <div className="flex flex-col gap-1.5 flex-1">
                <label className="text-[#1A202C] text-[13px] font-bold">
                  Stock Quantity
                </label>
                <div className="flex h-[40px] px-3 items-center rounded-lg border border-[#E5E7EB] bg-[#F9FAFB]">
                  <span className="text-[#6A717F] text-[13px]">
                    {formData.isUnlimited ? 'Unlimited' : formData.stockQuantity || 'Enter quantity'}
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-1.5 flex-1">
                <label className="text-[#1A202C] text-[13px] font-bold">
                  Stock Status
                </label>
                <div className="flex h-[40px] px-3 items-center justify-between rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] relative focus-within:border-[#4EA674] focus-within:bg-white transition-colors">
                  <select
                    name="stockStatus"
                    value={formData.stockStatus}
                    onChange={handleChange}
                    className="w-full bg-transparent outline-none text-[#1A202C] text-[13px] appearance-none cursor-pointer pr-4"
                  >
                    <option value="In Stock">In Stock</option>
                    <option value="Out of Stock">Out of Stock</option>
                  </select>
                  <img src={retIcon} alt="Dropdown" className="w-[12px] h-[12px] opacity-50 absolute right-3 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Toggle & Highlight Checkbox */}
            <div className="flex flex-col gap-3 mt-1">
              <div className="flex items-center gap-2">
                <div
                  onClick={() => setFormData((prev) => ({ ...prev, isUnlimited: !prev.isUnlimited }))}
                  className={`flex w-[38px] h-[20px] p-[2px] items-center rounded-full cursor-pointer transition-colors duration-200 ${
                    formData.isUnlimited ? 'bg-[#4EA674] justify-end' : 'bg-gray-300 justify-start'
                  }`}
                >
                  <div className="w-[16px] h-[16px] bg-white rounded-full shadow-sm" />
                </div>
                <span className="text-[#1A202C] text-[13px] select-none">Unlimited</span>
              </div>

              <label className="flex items-center gap-2 cursor-pointer select-none">
                <div
                  className="flex items-center justify-center w-[18px] h-[18px] rounded bg-[#4EA674]"
                  onClick={() => setFormData((prev) => ({ ...prev, isHighlighted: !prev.isHighlighted }))}
                >
                  {formData.isHighlighted && (
                    <img src={markIcon} alt="Checked" className="w-[12px] h-[12px] filter brightness-0 invert" />
                  )}
                </div>
                <span className="text-[#6A717F] text-[13px]">
                  Highlight this product in a featured section.
                </span>
              </label>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-3 mt-2">
            <button
              type="button"
              className="flex items-center gap-1.5 py-2 px-3 rounded-lg border border-[#E5E7EB] bg-white hover:bg-gray-50 transition-colors shadow-sm"
            >
              <img src={peIcon} alt="Draft" className="w-[14px] h-[14px]" />
              <span className="text-[#1A202C] text-[13px] font-bold">
                Save to draft
              </span>
            </button>

            <button
              type="button"
              className="py-2 px-4 rounded-lg bg-[#4EA674] hover:bg-[#439366] text-white text-[13px] font-bold transition-colors shadow-sm"
            >
              Publish Product
            </button>
          </div>
        </div>

        <div className="w-[485px] rounded-xl bg-white border border-[#E5E7EB] shadow-sm flex flex-col p-6 gap-6">
          <div className="flex flex-col gap-3">
            <h2 className="text-[#1A202C] text-[18px] font-bold">
              Upload Product Image
            </h2>
            <span className="text-[#023337] text-[14px] font-bold">
              Product Image
            </span>
            <div className="w-full h-[255px] border border-[#E5E7EB] rounded-lg bg-white relative flex items-center justify-center overflow-hidden">
              <img
                src={ phoneImg}
                alt="Product Preview"
                className="h-[210px] object-contain"
              />
              <button
                type="button"
                className="absolute bottom-3 left-3 flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#E5E7EB] bg-white shadow-sm hover:bg-gray-50 transition-colors"
              >
                <div className="w-3.5 h-3.5 border border-gray-400 rounded-sm" />
                <span className="text-[#6A717F] text-[13px]">Browse</span>
              </button>
              <button
                type="button"
                className="absolute bottom-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#E5E7EB] bg-white shadow-sm hover:bg-gray-50 transition-colors"
              >
                <div className="w-3.5 h-3.5 border border-gray-800 rounded-full border-t-transparent" />
                <span className="text-[#1A202C] text-[13px] font-medium">Replace</span>
              </button>
            </div>
            <div className="flex items-center gap-3 mt-1">
              <div className="w-[85px] h-[85px] rounded-lg border border-[#E5E7EB] relative flex items-center justify-center bg-white">
                <img
                  src={phoneImg}
                  alt="Thumb 1"
                  className="h-[65px] object-contain"
                />
                <button
                  type="button"
                  className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-white border border-gray-300 flex items-center justify-center shadow-sm text-gray-500 text-[10px]"
                >
                  ✕
                </button>
              </div>
              <div className="w-[85px] h-[85px] rounded-lg border border-[#E5E7EB] relative flex items-center justify-center bg-white">
                <img
                  src={phoneImg}
                  alt="Thumb 2"
                  className="h-[65px] object-contain"
                />
                <button
                  type="button"
                  className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-white border border-gray-300 flex items-center justify-center shadow-sm text-gray-500 text-[10px]"
                >
                  ✕
                </button>
              </div>
              <div className="w-[120px] h-[85px] rounded-lg border border-dashed border-[#9CA3AF] bg-[#F9FAFB] flex flex-col items-center justify-center gap-1 cursor-pointer hover:bg-gray-100 transition-colors">
                <div className="w-5 h-5 rounded-full bg-[#4EA674] text-white flex items-center justify-center text-xs font-bold leading-none">
                  +
                </div>
                <span className="text-[#4EA674] text-[13px] font-medium">
                  Add Image
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-2">
            <h2 className="text-[#1A202C] text-[18px] font-bold">
              Categories
            </h2>
            <div className="flex flex-col gap-1.5">
              <label className="text-[#023337] text-[14px] font-bold">
                Product Categories
              </label>
              <div className="flex h-[40px] px-3 items-center justify-between rounded-lg border border-[#E5E7EB] bg-white shadow-sm relative focus-within:border-[#4EA674]">
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full bg-transparent outline-none text-[#6A717F] text-[13px] appearance-none cursor-pointer pr-4"
                >
                  <option value="" disabled>Select your product</option>
                  <option value="electronics">Electronics</option>
                  <option value="smartphones">Smartphones</option>
                </select>
                <img src={retIcon} alt="Dropdown" className="w-[12px] h-[12px] opacity-50 absolute right-3 pointer-events-none" />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[#023337] text-[14px] font-bold">
                Product Tag
              </label>
              <div className="flex h-[40px] px-3 items-center justify-between rounded-lg border border-[#E5E7EB] bg-white shadow-sm relative focus-within:border-[#4EA674]">
                <select
                  name="tag"
                  value={formData.tag}
                  onChange={handleChange}
                  className="w-full bg-transparent outline-none text-[#6A717F] text-[13px] appearance-none cursor-pointer pr-4"
                >
                  <option value="" disabled>Select your product</option>
                  <option value="featured">Featured</option>
                  <option value="new">New Arrival</option>
                </select>
                <img src={retIcon} alt="Dropdown" className="w-[12px] h-[12px] opacity-50 absolute right-3 pointer-events-none" />
              </div>
            </div>

            {/* Color Swatches */}
            <div className="flex flex-col gap-2 mt-1">
              <label className="text-[#023337] text-[14px] font-bold">
                Select your color
              </label>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setFormData((p) => ({ ...p, color: 'green' }))}
                  className={`w-11 h-11 rounded-lg bg-[#D2E9C4] transition-all ${
                    formData.color === 'green' ? 'ring-2 ring-gray-400 scale-105' : ''
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setFormData((p) => ({ ...p, color: 'pink' }))}
                  className={`w-11 h-11 rounded-lg bg-[#F7CECE] transition-all ${
                    formData.color === 'pink' ? 'ring-2 ring-gray-400 scale-105' : ''
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setFormData((p) => ({ ...p, color: 'gray' }))}
                  className={`w-11 h-11 rounded-lg bg-[#D1DCDE] transition-all ${
                    formData.color === 'gray' ? 'ring-2 ring-gray-400 scale-105' : ''
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setFormData((p) => ({ ...p, color: 'cream' }))}
                  className={`w-11 h-11 rounded-lg bg-[#F8F3D4] transition-all ${
                    formData.color === 'cream' ? 'ring-2 ring-gray-400 scale-105' : ''
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setFormData((p) => ({ ...p, color: 'dark' }))}
                  className={`w-11 h-11 rounded-lg bg-[#333A42] transition-all ${
                    formData.color === 'dark' ? 'ring-2 ring-gray-400 scale-105' : ''
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductForm;