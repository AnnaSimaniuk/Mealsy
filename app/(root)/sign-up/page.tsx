import Layout from "@/components/shared/layout/Layout/Layout";
import SignUpForm from "@/components/form/sign-up-form/SignUpForm";

export default function SignUp() {
  return (
    <Layout className={"flex"}>
      <div className={"sign-in-bg hidden sm:block sm:w-[240px] lg:w-[400px]"} />
      <div className="flex mx-0 sm:mx-[27px] mt-[84px] mb-[149px] flex-col text-grey flex-1">
        <h3 className="text-xl lg:text-3xl font-medium">
          Welcome to the Mealsy Club!
        </h3>
        <SignUpForm />
      </div>
    </Layout>
  );
}
