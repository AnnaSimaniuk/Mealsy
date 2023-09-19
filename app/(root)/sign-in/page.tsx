import SignInForm from "@/components/form/sign-in-form/SignInForm";
import Layout from "@/components/shared/layout/Layout/Layout";
import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/configs/auth";
import { redirect } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mealsy | Sign In",
  description: "Sign in to your Mealsy account.",
};
export default async function SignIn() {
  const session = await getServerSession(authConfig);
  if (session) redirect("/profile");
  return (
    <Layout className={"flex"}>
      <div className={"sign-in-bg hidden sm:block sm:w-[240px] lg:w-[400px]"} />
      <div className="flex mx-0 sm:mx-[27px] mt-[84px] mb-[149px] flex-col text-grey flex-1">
        <h3 className="text-xl lg:text-3xl font-medium">
          Welcome to the Mealsy Club!
        </h3>
        <SignInForm />
      </div>
    </Layout>
  );
}
