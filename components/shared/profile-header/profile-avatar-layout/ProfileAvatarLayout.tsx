"use client";

import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

const ProfileAvatarLayout = ({ children }: { children: ReactNode }) => {
  return (
    <SessionProvider>
      <div
        className={
          "min-w-[80px] w-20 md:w-[157px] lg:w-[217px] h-20 md:h-[157px] lg:h-[217px] relative shadow rounded-md border-[3px] border-white"
        }
      >
        {children}
      </div>
    </SessionProvider>
  );
};

export default ProfileAvatarLayout;
