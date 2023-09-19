"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInValidation } from "@/lib/validation/signInValidation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Divider from "@/components/ui/divider";
import { signIn } from "next-auth/react";
import Link from "next/link";
import GoogleButton from "@/components/ui/google-button";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useRouter, useSearchParams } from "next/navigation";
import SpinnerIcon from "@/assets/icons/SpinnerIcon";
import ForgotPassword from "@/components/shared/auth/forgot-password/ForgotPassword";

const SignInForm = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof signInValidation>>({
    resolver: zodResolver(signInValidation),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof signInValidation>) => {
    setLoading(true);
    const res = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    });
    setLoading(false);

    if (res?.error) {
      toast({
        title: "Account creation failed!",
        description: res?.error,
        variant: "destructive",
        duration: 3000,
      });
    } else {
      toast({
        title: "Success",
        description: "You have successfully logged in",
        duration: 3000,
      });
      form.reset();
      window.location.href = "/";
    }
  };

  return (
    <div className={"mt-7 flex flex-col gap-y-5"}>
      <h4 className={"font-medium txt-base xl:text-xl"}>Enter profile</h4>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={"flex flex-col gap-5"}
        >
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
          <div className={"flex justify-end"}>
            <ForgotPassword />
          </div>
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
              "Sign in"
            )}
          </Button>
        </form>
      </Form>
      <Divider text={"or enter"} />
      <GoogleButton text={"Sign in with Google"} />
      <div className={"text-sm lg:text-base text-black"}>
        Not registered?{" "}
        <Link href={"/sign-up"} className={"text-primary cursor-pointer link"}>
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default SignInForm;
