import { ReactNode } from "react";
import Link from "next/link";
import SettingIcon from "@/assets/icons/SettingIcon";
import Layout from "@/components/shared/layout/Layout/Layout";
import ProfileHeader from "@/components/shared/profile-header/ProfileHeader";
import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/configs/auth";
import { getUser } from "@/lib/actions/user.action";
import { ISessionUser } from "@/types/ISessionUser";
import { redirect } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mealsy | Profile",
  description: "Mealsy Profile Page",
};

export default async function ProfileLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session: ISessionUser | null = await getServerSession(authConfig);
  const user = await JSON.parse(await getUser(session?.user?.id));

  if (!user) {
    redirect("/sign-in");
  }

  return (
    <div className={"relative"}>
      <div
        className={
          "absolute top-0 left-0 profile-bg h-[89px] md:h-[155px] lg:h-[300px] w-full -z-2"
        }
      />
      <Layout className={"pt-[30px] flex flex-col"}>
        <Link
          href={"/setting"}
          className={
            "flex gap-x-2.5 p-2 md:p-5 self-end items-center relative bg-white-500 rounded-md"
          }
        >
          <SettingIcon className={"h-6 w-6 md:h-[34px] md:w-[34px]"} />
          <span
            className={
              "hidden md:block text-base lg:text-xl font-bold text-dark"
            }
          >
            Settings
          </span>
        </Link>
        <ProfileHeader user={user} />
        {children}
      </Layout>
    </div>
  );
}
