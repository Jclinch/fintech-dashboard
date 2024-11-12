// //path: lendsqr-fe-test\app\(root)\layout.tsx

// import MobileNav from "@/components/MobileNav";
// import Sidebar from "@/components/Sidebar";
// import TopNav from "@/app/(root)/TopNav";
// import React from "react";

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   const loggedIn = { userName: "test", email: "test@testmail.com" };

//   return (
//     <main className="root flex h-screen w-full font-inter">
//       <TopNav user={loggedIn} />
//       <Sidebar user={loggedIn} />

//       <div className="flex-grow">
//         <TopNav />
//         <div className="block lg:hidden">
//           <MobileNav user={loggedIn} />
//         </div>

//         {/* Main content */}
//         <div className="p-4">
//           {children}
//         </div>
//       </div>
//     </main>
//   );
// }

//===

// path: lendsqr-fe-test\app\(root)\layout.tsx

import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import TopNav from "@/app/(root)/TopNav";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { userName: "test", email: "test@testmail.com" };

  return (
    <div className="relative h-screen w-full font-inter">
      {/* Top Navigation */}
      <TopNav user={loggedIn} />

      {/* Main layout with Sidebar and Content */}
      <main className="flex h-full pt-16"> {/* Add padding-top to offset TopNav */}
        <Sidebar user={loggedIn} />

        <div className="flex-grow">
          {/* Mobile Navigation */}
          <div className="block lg:hidden">
            <MobileNav user={loggedIn} />
          </div>

          {/* Main content */}
          <div className="p-4">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
