// // path: components/MobileNav.tsx
// "use client";
// import React from "react";
// import { User } from "@/types/User";
// import {
//   Sheet,
//   SheetClose,
//   SheetContent,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";
// import { sidebarLinks } from "@/constants";
// import { cn } from "@/lib/utils";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// interface MobileNavProps {
//   user: User;
// }

// const MobileNav: React.FC<MobileNavProps> = ({ user }) => {
//     const pathname = usePathname();

//   return (
//     <div>
//       {/* <p>{user.name} - Mobile Navigation</p> */}
//       {/* Mobile navigation content */}
//       <section className="w-[50%] max-w-[164px]">
//       <Sheet>
//         <SheetTrigger>
//           <Image
//             src="/icons/hamburger.svg"
//             width={30}
//             height={30}
//             alt="menu"
//             className="cursor-pointer"
//           />
//         </SheetTrigger>
//         <SheetContent side="left" className="border-none bg-white">
//           <SheetTitle></SheetTitle>
//           <Link
//             href="/"
//             className="cursor-pointer flex items-center gap-1 px-4"
//           >
//             <Image
//               src="/images/Logo.png"
//               width={34}
//               height={34}
//               alt="Lendsqr Logo"
//             />
//             <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
//             {user.name}
//             </h1>
//           </Link>
//           <div className="mobilenav-sheet">
//             <SheetClose asChild>
//               <nav className="flex h-full flex-col gap-6 pt-16 text-white">
//                 {sidebarLinks.map((item) => {
//                   const isActive =
//                     pathname === item.route ||
//                     pathname.startsWith(`${item.route}/`);

//                   return (
//                     <SheetClose asChild key={item.route}>
//                       <Link
//                         href={item.route}
//                         key={item.label}
//                         className={cn("mobilenav-sheet_close w-full", {
//                           "bg-bank-gradient": isActive,
//                         })}
//                       >
//                           <Image
//                             src={item.imgURL}
//                             alt={item.label}
//                             width={20}
//                             height={20}
//                             className={cn({
//                               "brightness-[3] invert-0": isActive,
//                             })}
//                           />
//                         <p
//                           className={cn("text-16 font-semibold text-black-2", {
//                             " !text-white": isActive,
//                           })}
//                         >
//                           {item.label}
//                         </p>
//                       </Link>
//                     </SheetClose>
//                   );
//                 })}

//                 USER
//               </nav>
//             </SheetClose>

//             FOOTER
//           </div>
//         </SheetContent>
//       </Sheet>
//     </section>
//     </div>
//   );
// };

// export default MobileNav;
// //==

// // "use client";
// // import {
// //   Sheet,
// //   SheetClose,
// //   SheetContent,
// //   SheetTitle,
// //   SheetTrigger,
// // } from "@/components/ui/sheet";
// // import { sidebarLinks } from "@/constants";
// // import { cn } from "@/lib/utils";
// // import Image from "next/image";
// // import Link from "next/link";
// // import { usePathname } from "next/navigation";

// // const MobileNav = () => {
// //   const pathname = usePathname();
// //   return (
// //     <section className="w-full max-w-[264px]">
// //       <Sheet>
// //         <SheetTrigger>
// //           <Image
// //             src="/icons/hamburger.svg"
// //             width={30}
// //             height={30}
// //             alt="menu"
// //             className="cursor-pointer"
// //           />
// //         </SheetTrigger>
// //         <SheetContent side="left" className="border-none bg-white">
// //           <SheetTitle></SheetTitle>
// //           <Link
// //             href="/"
// //             className="cursor-pointer flex items-center gap-1 px-4"
// //           >
// //             <Image
// //               src="/icons/logo.svg"
// //               width={34}
// //               height={34}
// //               alt="NextCash Logo"
// //             />
// //             <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
// //               NextCash
// //             </h1>
// //           </Link>
// //           <div className="mobilenav-sheet">
// //             <SheetClose asChild>
// //               <nav className="flex h-full flex-col gap-6 pt-16 text-white">
// //                 {sidebarLinks.map((item) => {
// //                   const isActive =
// //                     pathname === item.route ||
// //                     pathname.startsWith(`${item.route}/`);

// //                   return (
// //                     <SheetClose asChild key={item.route}>
// //                       <Link
// //                         href={item.route}
// //                         key={item.label}
// //                         className={cn("mobilenav-sheet_close w-full", {
// //                           "bg-bank-gradient": isActive,
// //                         })}
// //                       >
// //                           <Image
// //                             src={item.imgURL}
// //                             alt={item.label}
// //                             width={20}
// //                             height={20}
// //                             className={cn({
// //                               "brightness-[3] invert-0": isActive,
// //                             })}
// //                           />
// //                         <p
// //                           className={cn("text-16 font-semibold text-black-2", {
// //                             " !text-white": isActive,
// //                           })}
// //                         >
// //                           {item.label}
// //                         </p>
// //                       </Link>
// //                     </SheetClose>
// //                   );
// //                 })}

// //                 USER
// //               </nav>
// //             </SheetClose>

// //             FOOTER
// //           </div>
// //         </SheetContent>
// //       </Sheet>
// //     </section>
// //   );
// // };

// // export default MobileNav;


//===

// path: components/MobileNav.tsx
"use client";
import React from "react";
import { User } from "@/types/User";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles/mobileNav.scss"; 

interface MobileNavProps {
  user: User;
}

const MobileNav: React.FC<MobileNavProps> = ({ user }) => {
    const pathname = usePathname();

  return (
    <div className="mobile-nav">
      <Sheet>
        <SheetTrigger>
          <Image
            src="/icons/hamburger.svg"
            width={30}
            height={30}
            alt="menu"
            className="trigger-icon"
          />
        </SheetTrigger>
        <SheetContent side="left" className="sheet-content">
          <SheetTitle></SheetTitle>
          <Link href="/" className="logo-container">
            <Image
              src="/images/Logo.png"
              width={34}
              height={34}
              alt="Lendsqr Logo"
            />
            <h1 className="logo-title">{user.name}</h1>
          </Link>
          <div className="mobilenav-sheet">
            <SheetClose asChild>
              <nav className="flex h-full flex-col gap-6 pt-16 text-white">
                {sidebarLinks.map((item) => {
                  const isActive =
                    pathname === item.route ||
                    pathname.startsWith(`${item.route}/`);

                  return (
                    <SheetClose asChild key={item.route}>
                      <Link
                        href={item.route}
                        key={item.label}
                        className={cn("nav-item", {
                          "active": isActive,
                        })}
                      >
                        <Image
                          src={item.imgURL}
                          alt={item.label}
                          width={20}
                          height={20}
                          className="icon"
                        />
                        <p className="label">{item.label}</p>
                      </Link>
                    </SheetClose>
                  );
                })}
              </nav>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
