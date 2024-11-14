// "use client";
// import { sidebarLinks } from "@/constants";
// import { cn } from "@/lib/utils";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import "./styles/sidebar.scss";
// import { SwitchOrg } from "./SwitchOrg";
// import { Organization } from "./businesses/Organization";
// import { LoanProducts } from "./businesses/LoanProducts";
// import { SavingsProduct } from "./businesses/SavingsProduct";
// import { Fee } from "./businesses/Fee";
// import { Transactions } from "./businesses/Transactions";
// import { Services } from "./businesses/Services";
// import { ServiceAccount } from "./businesses/Service Account";
// import { Reports } from "./businesses/Reports";
// import { Settlement } from "./businesses/Settlement";
// import { Button } from "./ui/button";

// const Sidebar = () => {
//   const router = useRouter();
//   const pathname = usePathname();

//   return (
//     <section className="sidebar">
//       <SwitchOrg />

//       {/* Dashboard */}
//       <div className="sidebar-nav-item">
//         <Link
//           href="/"
//           className={`sidebar-nav-link ${
//             router.pathname === "/" ? "active" : ""
//           }`}
//         >
//           <Image
//             src="/icons/home.png"
//             alt="Dashboard Icon"
//             width={16}
//             height={16}
//             className="sidebar-nav-icon"
//           />
//           <span>Dashboard</span>
//         </Link>
//       </div>

//       {/* Customer Label */}
//       <div className="sidebar-customer-label">
//         <p className="text-[12px] font-[700] text-[#545F7D] ml-[10px] mb-[-5px]">
//           CUSTOMER
//         </p>
//       </div>

//       {sidebarLinks.map((item) => {
//         const isActive =
//           pathname === item.route || pathname.startsWith(`${item.route}/`);
//         return (
//           <Link
//             href={item.route}
//             key={item.label}
//             className={cn("sidebar-link", { background: isActive })}
//           >
//             <div className=" ml-[10px]">
//               <Image
//                 src={item.imgURL}
//                 alt={item.label}
//                 width={16}
//                 height={16}
//                 className={cn({ "brightness-3": isActive })}
//               />
//             </div>
//             <p className={cn("sidebar-label", { "text-[#213f7d]": isActive })}>
//               {item.label}
//             </p>
//           </Link>
//         );
//       })}

//       {/* Business Label */}
//       <div className="sidebar-business-label">
//         <p className="text-[12px] font-[700] text-[#545F7D] ml-[10px] mb-[-5px]">
//           BUSINESSES
//         </p>
//       </div>
//       <div className="flex flex-col left-0">
//         <Organization />
//         <LoanProducts />
//         <SavingsProduct />
//         <Fee />
//         <Transactions />
//         <Services />
//         <ServiceAccount />
//         <Settlement />
//         <Reports />
//       </div>

//       {/* Settings Label */}
//       <div className="sidebar-business-label">
//         <p className="text-[12px] font-[700] text-[#545F7D] ml-[10px] mb-[-5px]">
//           SETTINGS
//         </p>
//       </div>

//       <div className="flex flex-col left-0">
//         <Button
//           variant="ghost"
//           className="flex items-center justify-start text-[#213F7D] text-[16px]"
//         >
//           <Image
//             src="/icons/sliders.png"
//             alt="Settings icon"
//             width={16}
//             height={16}
//           />
//           Preferences
//         </Button>

//         <Button
//           variant="ghost"
//           className="flex items-center justify-start text-[#213F7D] text-[16px]"
//         >
//           <Image
//             width={16}
//             height={16}
//             src="/icons/badge-percent.png"
//             alt="Fees and Pricing icon"
//           />
//           Fees and Pricing
//         </Button>

//         <Button
//           variant="ghost"
//           className="flex items-center justify-start text-[#213F7D] text-[16px]"
//         >
//           <Image
//             src="/icons/clipboard-list.png"
//             width={16}
//             height={16}
//             alt="Audit Logs icon"
//           />
//           Audit Logs
//         </Button>
//       </div>
//       <div className="mt-12">
//         <hr />
//       </div>
//       <Link href="/login" >
//         <Button
//           variant="ghost"
//           className="flex items-center justify-start text-[#213F7D] text-[16px]"
//         >
//           <Image
//             src="/icons/logout.png"
//             alt="Logout icon"
//             width={16}
//             height={16}
//           />
//           Logout
//         </Button>
//       </Link>
//       <div className="text-[#213F7D] text-[12px] mt-[-5px] ml-[20px]">
//         v1.2.0
//       </div>
//     </section>
//   );
// };

// export default Sidebar;


//--
"use client";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles/sidebar.scss";
import { SwitchOrg } from "./SwitchOrg";
import { Organization } from "./businesses/Organization";
import { LoanProducts } from "./businesses/LoanProducts";
import { SavingsProduct } from "./businesses/SavingsProduct";
import { Fee } from "./businesses/Fee";
import { Transactions } from "./businesses/Transactions";
import { Services } from "./businesses/Services";
import { ServiceAccount } from "./businesses/ServiceAccount";
import { Reports } from "./businesses/Reports";
import { Settlement } from "./businesses/Settlement";
import { Button } from "./ui/button";
import { User } from "@/types/User";

interface SidebarProps {
  user: User;
}

const Sidebar: React.FC<SidebarProps> = () => {
  const pathname = usePathname();

  return (
    <section className="sidebar">
      <SwitchOrg />

      {/* Dashboard */}
      <div className="sidebar-nav-item">
        <Link href="/" className={`sidebar-nav-link ${pathname === "/" ? "active" : ""}`}>
          <Image
            src="/icons/home.png"
            alt="Dashboard Icon"
            width={16}
            height={16}
            className="sidebar-nav-icon"
          />
          <span>Dashboard</span>
        </Link>
      </div>

      {/* Customer Label */}
      <div className="sidebar-customer-label">
        <p className="text-[12px] font-[700] text-[#545F7D] ml-[10px] mb-[-5px]">
          CUSTOMER
        </p>
      </div>

      {sidebarLinks.map((item) => {
        const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);
        return (
          <Link
            href={item.route}
            key={item.label}
            className={cn("sidebar-link", { background: isActive })}
          >
            <div className="ml-[10px]">
              <Image
                src={item.imgURL}
                alt={item.label}
                width={16}
                height={16}
                className={cn({ "brightness-3": isActive })}
              />
            </div>
            <p className={cn("sidebar-label", { "text-[#213f7d]": isActive })}>
              {item.label}
            </p>
          </Link>
        );
      })}

      {/* Business Label */}
      <div className="sidebar-business-label">
        <p className="text-[12px] font-[700] text-[#545F7D] ml-[10px] mb-[-5px]">
          BUSINESSES
        </p>
      </div>
      <div className="flex flex-col left-0">
        <Organization />
        <LoanProducts />
        <SavingsProduct />
        <Fee />
        <Transactions />
        <Services />
        <ServiceAccount />
        <Settlement />
        <Reports />
      </div>

      {/* Settings Label */}
      <div className="sidebar-business-label">
        <p className="text-[12px] font-[700] text-[#545F7D] ml-[10px] mb-[-5px]">
          SETTINGS
        </p>
      </div>

      <div className="flex flex-col left-0">
        <Button variant="ghost" className="flex items-center justify-start text-[#213F7D] text-[16px]">
          <Image src="/icons/sliders.png" alt="Settings icon" width={16} height={16} />
          Preferences
        </Button>

        <Button variant="ghost" className="flex items-center justify-start text-[#213F7D] text-[16px]">
          <Image width={16} height={16} src="/icons/badge-percent.png" alt="Fees and Pricing icon" />
          Fees and Pricing
        </Button>

        <Button variant="ghost" className="flex items-center justify-start text-[#213F7D] text-[16px]">
          <Image src="/icons/clipboard-list.png" width={16} height={16} alt="Audit Logs icon" />
          Audit Logs
        </Button>
      </div>
      
      {/* Divider and Logout */}
      <div className="mt-12">
        <hr />
      </div>
      <Link href="/login">
        <Button variant="ghost" className="flex items-center justify-start text-[#213F7D] text-[16px]">
          <Image src="/icons/logout.png" alt="Logout icon" width={16} height={16} />
          Logout
        </Button>
      </Link>
      
      <div className="text-[#213F7D] text-[12px] mt-[-5px] ml-[20px]">
        v1.2.0
      </div>
    </section>
  );
};

export default Sidebar;
