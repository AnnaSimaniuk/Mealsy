"use client";

import SignInBtn from "@/components/shared/header/sign-in-btn/SignInBtn";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import ProfileIcon from "../../../public/image/profile-svgrepo-com.png";
import SignOutBtn from "@/components/shared/header/sign-out-btn/SignOutBtn";

const AuthHeader = () => {
  const session = useSession();

  return (
    <>
      {session?.data && (
        <Link href={"/profile"}>
          <Avatar>
            <AvatarImage
              src={
                session?.data?.user?.image
                  ? session?.data?.user?.image
                  : ProfileIcon.src
              }
            />
          </Avatar>
        </Link>
      )}
      {session?.data ? <SignOutBtn /> : <SignInBtn />}
    </>
  );
};

export default AuthHeader;

//TODO вияснити як змусити перегружатись сесію
