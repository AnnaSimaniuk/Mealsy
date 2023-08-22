import SignInForm from "@/components/form/sign-in-form/SignInForm";
import Layout from "@/components/shared/layout/Layout/Layout";
import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/configs/auth";
import { redirect } from "next/navigation";

export default async function SignIn() {
  const session = await getServerSession(authConfig);
  if (session) redirect("/profile");
  return (
    <Layout className={"flex"}>
      <div className={"sign-in-bg w-[400px]"} />
      <div className="flex mx-[27px] mt-[84px] mb-[149px] flex-col text-grey flex-1">
        <h3 className="text-3xl font-medium">Welcome to the Mealsy Club!</h3>
        <SignInForm />
      </div>
    </Layout>
  );
}
