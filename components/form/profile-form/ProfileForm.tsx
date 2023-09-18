"use client";

import { IUser } from "@/types/IUser";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { profileValidation } from "@/lib/validation/profileValidation";
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import SpinnerIcon from "@/assets/icons/SpinnerIcon";
import { changeDataUser } from "@/lib/actions/user.action";
import { useRouter } from "next/navigation";

interface ProfileFormProps {
  user: IUser;
}

const ProfileForm = ({ user }: ProfileFormProps) => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const router = useRouter();
  const form = useForm<z.infer<typeof profileValidation>>({
    resolver: zodResolver(profileValidation),
    defaultValues: {
      email: user.email,
      userName: user.userName,
      gender: user.gender || "",
      birthDate: undefined,
    },
  });

  const onSubmit = async (values: z.infer<typeof signUpValidation>) => {
    setLoading(true);
    await changeDataUser(values);
    setLoading(false);
    toast({
      title: "Success",
      description: "You have successfully changed your data",
      duration: 3000,
    });
    router.push("/profile");
  };

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={"flex flex-col gap-5 max-w-[700px]"}
        >
          <div className={"text-base md:text-xl"}>Your name:</div>
          <FormField
            control={form.control}
            name="userName"
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
          <div className={"flex gap-2.5 justify-between flex-col sm:flex-row"}>
            <div className={"flex flex-col gap-5 flex-1"}>
              <div className={"text-base md:text-xl"}>Your birthday:</div>
              <FormField
                control={form.control}
                name="birthDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"secondary"}
                            className={cn(
                              "w-full border border-secondary bg-white px-6 py-2.5 text-base lg:text-xl",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-6 w-6 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className={"flex flex-col gap-5 flex-1"}>
              <div className={"text-base md:text-xl"}>Your gender:</div>
              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder={"Choose gender:"} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Choose gender:</SelectLabel>
                            <SelectItem value={"male"}>Male</SelectItem>
                            <SelectItem value={"female"}>Female</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className={"text-base md:text-xl"}>Your email:</div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="email"
                    disabled={true}
                    {...field}
                    placeholder="Your email"
                    className={"border-grey-500"}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className={"text-base md:text-xl"}>Your new password:</div>
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

          <div className={"flex gap-5"}>
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
                "Save"
              )}
            </Button>
            <Link href={"/profile"}>
              <Button variant={"outline"}>Cancel</Button>
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ProfileForm;
