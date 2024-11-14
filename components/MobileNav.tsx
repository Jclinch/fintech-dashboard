// path: components/MobileNav.tsx
import React from "react";
import { User } from "@/types/User";

interface MobileNavProps {
  user: User;
}

const MobileNav: React.FC<MobileNavProps> = ({ user }) => {
  return (
    <div>
      <p>{user.name} - Mobile Navigation</p>
      {/* Mobile navigation content */}
    </div>
  );
};

export default MobileNav;
