import { ReactNode } from "react";
import Link from "next/link";
import SettingIcon from "@/assets/icons/SettingIcon";
import Layout from "@/components/shared/layout/Layout/Layout";
import ProfileHeader from "@/components/shared/profile-header/ProfileHeader";
import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/configs/auth";
import { IUser } from "@/types/IUser";
import { getUser } from "@/lib/actions/user.action";

export default async function ProfileLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getServerSession(authConfig);
  const user: IUser = await getUser(session?.user?.id);
  return (
    <div className={"relative"}>
      <div
        className={"absolute top-0 left-0 profile-bg h-[300px] w-full -z-2"}
      />
      <Layout className={"pt-[30px] flex flex-col"}>
        <Link
          href={"/profile/setting"}
          className={
            "flex gap-x-2.5 p-5 self-end items-center relative bg-white-500 rounded-md"
          }
        >
          <SettingIcon />
          <span className={"text-xl font-bold text-dark"}>Settings</span>
        </Link>
        <ProfileHeader user={user} />
        {children}
      </Layout>
    </div>
  );
}
