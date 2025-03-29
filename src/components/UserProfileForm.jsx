import { PlusCircleIcon } from "@heroicons/react/24/outline";
import React, { useRef } from "react";

const UserProfileForm = () => {
  const fileInputRef = useRef(null);
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="p-6 lg:ml-[30px] ml-0 mt-[10px] mr-[20px] bg-white w-full min-h-[800px]">

      {/* عنوان الإعدادات */}
      <div className="p-6 border-b">
        <h2 className="text-lg font-bold text-black">Profile Settings</h2>
        <p className="text-sm text-gray-500 mt-1">Update your personal information</p>
      </div>

      {/* صورة الملف الشخصي */}
      <div className="flex flex-col sm:flex-row items-center gap-6 mb-8 mt-[10px]">
        <div className="flex flex-col items-center">
          <div className="relative group">
            <img
              src="https://backend.odigix.com/storage/avatars/45053c83-1b35-4492-9b9a-477bcbe107fa.png"
              alt="Avatar Preview"
              className="w-32 h-32 rounded-xl object-cover bg-gray-50 ring-2 ring-primary/10"
            />
            <div className="absolute bottom-0 right-0">
              <button
                onClick={handleButtonClick}
                className="w-10 h-10 rounded-full bg-white text-gray-600 flex items-center justify-center shadow-lg transform transition-all duration-200 hover:bg-gray-200"
              >
                <PlusCircleIcon className="w-7 h-7" />
              </button>
              {/* إدخال ملف مخفي */}
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept="image/*"
                onChange={(e) => console.log("Selected file:", e.target.files[0])}
              />
            </div>
          </div>
        </div>
        <div className="text-center sm:text-left">
          <h3 className="font-medium text-gray-900">Profile Picture</h3>
          <p className="text-sm text-gray-500 mt-1">Upload a new profile picture</p>
        </div>
      </div>

      {/* نموذج تعديل البيانات */}
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">First Name</label>
            <input
              type="text"
              className="w-full border p-2 rounded-lg outline-none transition-all duration-300 focus:ring-2 focus:ring-primary/50 focus:border-primary"
              defaultValue="houssine"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Last Name</label>
            <input
              type="text"
              className="w-full border p-2 rounded-lg outline-none transition-all duration-300 focus:ring-2 focus:ring-primary/50 focus:border-primary"
              defaultValue="houssine"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              className="w-full border p-2 rounded-lg outline-none transition-all duration-300 focus:ring-2 focus:ring-primary/50 focus:border-primary"
              defaultValue="houssinoteman958@gmail.com"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              className="w-full border p-2 rounded-lg bg-gray-200 outline-none transition-all duration-300 focus:ring-2 focus:ring-primary/50 focus:border-primary"
              defaultValue="+213 6 87 98 73 65"
              disabled
            />
            <p className="text-xs text-gray-500">Updating your phone number is not allowed.</p>
          </div>
        </div>

        {/* زر حفظ التغييرات */}
        <div className="flex items-center justify-end gap-4 pt-4 border-t">
          <button type="submit" className="bg-primary text-white px-6 py-2 rounded-lg shadow-lg hover:scale-105 transition">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserProfileForm;
