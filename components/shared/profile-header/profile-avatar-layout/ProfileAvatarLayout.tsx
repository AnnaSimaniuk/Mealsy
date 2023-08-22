"use client";

import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

const ProfileAvatarLayout = ({ children }: { children: ReactNode }) => {
  return (
    <SessionProvider>
      <div
        className={
          "w-[217px] h-[217px] relative shadow rounded-md border-[3px] border-white"
        }
      >
        {children}
      </div>
    </SessionProvider>
  );
};

export default ProfileAvatarLayout;
