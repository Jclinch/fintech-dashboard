// import Image from 'next/image';
// import Link from 'next/link';
// import { useState } from 'react';

// const TopNav = () => {
//   return (
//     <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-white z-50">
//       {/* Left side - Logo */}
//       <Link href="/" className="mb-8 p-6 cursor-pointer flex items-center gap-2">
//           <Image
//             src="/images/Logo.png"
//             width={200}
//             height={60}
//             alt="Logo"
//             className=" "
//           />
//         </Link>

//       {/* Middle - Search bar */}
//       <div className="flex-1 max-w-md mx-4">
//         <div className="flex items-center bg-gray-100 rounded-lg overflow-hidden">
//           <input
//             type="text"
//             placeholder="Search for anything"
//             className="flex-grow p-2 bg-gray-100 outline-none"
//           />
//           <button className="px-4 py-2 bg-teal-500 text-white">
//             <Image src="/icons/search.png" alt="Search Icon" width={16} height={16} />
//           </button>
//         </div>
//       </div>

//       {/* Right side - Links and Icons */}
//       <div className="flex items-center gap-6">
//         <Link href="/docs" className="text-gray-600 hover:underline">
//           Docs
//         </Link>

//         {/* Notification icon */}
//         <button className="relative">
//           <Image src="/icons/bell.png" alt="Notifications" width={20} height={20} />
//           {/* Notification badge */}
//           <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-500 rounded-full"></span>
//         </button>

//         {/* User Avatar and Name */}
//         <div className="flex items-center gap-2">
//           <Image
//             src="/avatars/adedeji.png"
//             alt="User Avatar"
//             width={32}
//             height={32}
//             className="rounded-full"
//           />
//           <span className="text-gray-800">Adedeji</span>
//           <Image src="/icons/arrow-down.png" alt="Dropdown Icon" width={12} height={12} />
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default TopNav;

//===

import Image from 'next/image';
import Link from 'next/link';

const TopNav = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-white z-50 shadow-md">
      {/* Left side - Logo */}
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/images/Logo.png"
          width={150}
          height={40}
          alt="Logo"
          className="cursor-pointer"
        />
      </Link>

      {/* Middle - Search bar */}
      <div className="flex-1 max-w-md mx-4">
        <div className="flex items-center bg-gray-100 rounded-lg overflow-hidden">
          <input
            type="text"
            placeholder="Search for anything"
            className="flex-grow px-4 py-2 bg-gray-100 outline-none"
          />
          <button className="search-button px-4 py-2 bg-teal-500 text-white">
            <Image src="/icons/search-icon.png" alt="Search Icon" width={16} height={16} />
          </button>
        </div>
      </div>

      {/* Right side - Links and Icons */}
      <div className="flex items-center gap-6">
        <Link href="/docs" className="text-gray-600 hover:underline">
          Docs
        </Link>

        {/* Notification icon */}
        <button className="relative">
          <Image src="/icons/bell.png" alt="Notifications" width={20} height={20} />
          {/* Notification badge */}
          <span className="absolute top-0 right-0 inline-block w-2.5 h-2.5 bg-red-500 rounded-full ring-2 ring-white"></span>
        </button>

        {/* User Avatar and Name */}
        <div className="flex items-center gap-2 cursor-pointer">
          <Image
            src="/avatars/adedeji.png"
            alt="User Avatar"
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="text-gray-800 font-medium">Adedeji</span>
          <Image src="/icons/arrow-down.png" alt="Dropdown Icon" width={12} height={12} />
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
