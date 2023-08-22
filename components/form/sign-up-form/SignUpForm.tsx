"use client";

import GoogleButton from "@/components/ui/google-button";
import Divider from "@/components/ui/divider";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpValidation } from "@/lib/validation/signUpValidation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { signUp } from "@/lib/actions/user.action";
import { useState } from "react";
import SpinnerIcon from "@/assets/icons/SpinnerIcon";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

const SignUpForm = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<z.infer<typeof signUpValidation>>({
    resolver: zodResolver(signUpValidation),
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof signUpValidation>) => {
    setLoading(true);
    const res = await signUp(values);
    setLoading(false);
    if (res.isCreated) {
      toast({
        title: "Account created!",
        description:
          "We've created your account for you. Please sign in to continue.",
        duration: 3000,
      });
      form.reset();
      router.push("/sign-in");
    } else {
      toast({
        title: "Account creation failed!",
        description: res.message,
        variant: "destructive",
        duration: 3000,
      });
    }
  };

  return (
    <div className={"flex gap-y-5 mt-[30px] flex-col"}>
      <h5 className={"text-2xl"}>Create an account</h5>
      <GoogleButton text={"Sign up with Google"} />
      <Divider text={"or use email"} />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={"flex flex-col gap-5"}
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="text"
                    {...field}
                    placeholder="Your name"
                    className={"border-grey-500"}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="email"
                    {...field}
                    placeholder="Your email"
                    className={"border-grey-500"}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="password"
                    {...field}
                    placeholder="Password"
                    className={"border-grey-500"}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type={"submit"}
            className={"w-fit self-center"}
            disabled={loading}
          >
            {loading ? (
              <>
                <SpinnerIcon className={"animate-spin mr-2"} />
                <span className={"pt-[2px]"}>Loading...</span>
              </>
            ) : (
              "Create an account"
            )}
          </Button>
        </form>
      </Form>
      <div className={"text-base text-black"}>
        Already have an account?{" "}
        <Link href={"/sign-in"} className={"text-primary cursor-pointer link"}>
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default SignUpForm;
