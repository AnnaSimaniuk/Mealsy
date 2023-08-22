import Link from "next/link";
import { Button } from "@/components/ui/button";

export const SignInBtn = () => {
  return (
    <Link href={"/sign-in"}>
      <Button>Sign In</Button>
    </Link>
  );
};

export default SignInBtn;
