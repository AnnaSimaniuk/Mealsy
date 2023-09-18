"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { subscribeValidation } from "@/lib/validation/subscribeValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { addSubscribe } from "@/lib/actions/subscribe.action";
import { useEffect, useState } from "react";
import SpinnerIcon from "@/assets/icons/SpinnerIcon";

const SubscribeForm = ({ classInput = "" }: { classInput?: string }) => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof subscribeValidation>>({
    resolver: zodResolver(subscribeValidation),
    defaultValues: {
      email: "",
      name: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof subscribeValidation>) => {
    setLoading(true);
    const res: { message: string } = await addSubscribe(values);
    setLoading(false);
    setMessage(res.message);
    form.reset();
  };

  useEffect(() => {
    if (message !== "") {
      setTimeout(() => {
        setMessage("");
      }, 2000);
    }
  }, [message]);

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={"flex flex-col gap-[30px]"}
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
                    className={classInput}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
                    className={classInput}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type={"submit"} className={"w-fit"} disabled={loading}>
            {loading ? <SpinnerIcon className={"animate-spin"} /> : "Subscribe"}
          </Button>
        </form>
      </Form>
      <p className={"text-primary text-base lg:text-lg font-medium"}>{message}</p>
    </>
  );
};

export default SubscribeForm;
