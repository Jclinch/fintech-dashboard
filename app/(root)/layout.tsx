// path: lendsqr-fe-test\app\(root)\layout.tsx

import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import TopNav from "@/app/(root)/TopNav";
import React from "react";
import { User } from "@/types/User";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedInUser: User = {
    name: "Adedeji",
    email: "test@testmail.com",
    avatarUrl: "/avatars/user-img.png",
  };

  return (
    <div className="relative h-screen w-full font-inter">
      {/* Top Navigation */}
      <TopNav user={loggedInUser} />

      {/* Main layout with Sidebar and Content */}
      <main className="flex h-full pt-16">
        {" "}
        {/* Add padding-top to offset TopNav */}
        <Sidebar user={loggedInUser} />
        <div className="flex-grow">
          {/* Mobile Navigation */}
          <div className="block lg:hidden">
            <MobileNav user={loggedInUser} />
          </div>

          {/* Main content */}
          <div className="p-4">{children}</div>
        </div>
      </main>
    </div>
  );
}
