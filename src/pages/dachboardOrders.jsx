import React, { useState } from "react";
import UserProfileSection from "../components/UserProfileSection";
import OrdersComponent from "../components/orders";
import { Link } from "react-router-dom";


const Header2 = () => {
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <div className="h-screen flex flex-col">
      {/* Header ثابت */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="px-4 lg:px-8 py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <a href="/" className="flex-shrink-0">
              <img
                src="/images/odigix-black-palestine.bd850c53.png"
                alt="Logo"
                className="h-8 w-auto object-contain"
              />
            </a>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-auto px-4 hidden md:block">
              <div className="relative">
                <form className="relative">
                  <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:border-[rgb(90,71,251)]">
                    <input
                      className="w-full py-2 px-3 outline-none"
                      placeholder="Search"
                      type="text"
                    />
                  </div>
                </form>
              </div>
            </div>

            {/* User & Cart */}
            <div className="flex items-center gap-3">
            <Link
          to="/daschboard"
         >
              {/* Profile Section */}
              <div className="hidden sm:flex items-center gap-2 p-2 rounded-lg transition-all duration-200 hover:bg-gray-200 hover:scale-105 active:scale-95 cursor-pointer">
                <div className="relative">
                  <img
                    className="w-10 h-10 rounded-full object-cover"
                    src="https://backend.odigix.com/storage/avatars/45053c83-1b35-4492-9b9a-477bcbe107fa.png"
                    alt="User Avatar"
                  />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
                </div>
                <span className="text-sm font-bold text-gray-900">HOUSSINE</span>
              </div>
            </ Link  >

              {/* Cart Button */}
              <button className="relative bg-[rgb(90,71,251)] text-white px-4 py-2 rounded-lg flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <circle cx="8" cy="21" r="1"></circle>
                  <circle cx="19" cy="21" r="1"></circle>
                  <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                </svg>
                <span className="hidden sm:inline text-sm font-medium">
                  200 DZD
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="px-8 border-t">
          <div className="flex items-center justify-start space-x-8 text-gray-600 py-3">
            {["Home", "Shop", "Points of Sale"].map((tab) => (
              <button
                key={tab}
                className={`text-md font-semibold uppercase transition duration-300 pb-2 ${
                  activeTab === tab
                    ? "text-[rgb(90,71,251)] border-b-2 border-[rgb(90,71,251)]"
                    : "hover:text-[rgb(90,71,251)]"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </header>

    
     
      <div className="flex-1 overflow-auto flex flex-col md:flex-row">
  <UserProfileSection className="w-full md:w-1/4" />
  <OrdersComponent className="w-full md:w-3/4" />
</div>
    </div>
  );
};

export default Header2;
