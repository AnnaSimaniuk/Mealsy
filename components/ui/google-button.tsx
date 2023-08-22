"use client";

import { signIn } from "next-auth/react";
import GoogleIcon from "@/assets/icons/GoogleIcon";
import { useSearchParams } from "next/navigation";

interface GoogleButtonProps {
  text: string;
}

const GoogleButton = ({ text }: GoogleButtonProps) => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";
  return (
    <div
      className={
        "flex items-center gap-x-2 py-2 px-[10px] cursor-pointer shadow rounded-md w-fit self-center"
      }
      onClick={() => signIn("google", { callbackUrl })}
    >
      <GoogleIcon />
      <span
        className={
          "text-black hover:text-primary transition-colors duration-300 ease-in-out"
        }
      >
        {text}
      </span>
    </div>
  );
};

export default GoogleButton;
