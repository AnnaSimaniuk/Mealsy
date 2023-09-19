import { ISessionUser } from "@/types/ISessionUser";
import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/configs/auth";
import { getUser } from "@/lib/actions/user.action";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import Layout from "@/components/shared/layout/Layout/Layout";
import ProfileAvatar from "@/components/shared/profile-header/profile-avatar-layout/ProfileAvatar";
import ProfileAvatarLayout from "@/components/shared/profile-header/profile-avatar-layout/ProfileAvatarLayout";
import ProfileForm from "@/components/form/profile-form/ProfileForm";
import { redirect } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mealsy | Edit profile",
  description: "Edit profile page",
};
const breadcrumbs = () => {
  return [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Profile",
      href: "/profile",
    },
    {
      name: `Edit profile`,
      href: `/setting`,
    },
  ];
};

export default async function SettingPage() {
  const session: ISessionUser | null = await getServerSession(authConfig);
  const user = await JSON.parse(await getUser(session?.user?.id));
  if (!user) {
    redirect("/sign-in");
  }

  return (
    <section>
      <Layout className={"flex flex-col mb-12 lg:mb-40"}>
        <Breadcrumbs breadcrumbs={breadcrumbs()} />
        <h2
          className={"font-bold text-base md:text-xl lg:text-3xl mb-8 lg:mb-12"}
        >
          Edit profile
        </h2>
        <div className={"flex gap-5 lg:gap-12 items-end mb-12 lg:mb-36"}>
          <ProfileAvatarLayout>
            <ProfileAvatar />
          </ProfileAvatarLayout>
          <div className={"flex flex-col gap-5"}>
            <h5 className={"text-primary text-base md:text-2xl lg:text-3xl"}>
              Download your image
            </h5>
            <p className={"text-xs md:text-base lg:text-xl"}>
              Image must be in JPG or PNG format and not exceed 5MB
            </p>
          </div>
        </div>
        <div>
          <ProfileForm user={user} />
        </div>
      </Layout>
    </section>
  );
}
