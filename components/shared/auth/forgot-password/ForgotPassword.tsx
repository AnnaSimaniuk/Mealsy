"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import SpinnerIcon from "@/assets/icons/SpinnerIcon";
import { forgotPassword } from "@/lib/actions/user.action";
import { useToast } from "@/components/ui/use-toast";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleClick = async () => {
    setLoading(true);
    const res = await forgotPassword(email);
    setLoading(false);

    if (res?.passwordSend) {
      setEmail("");
      toast({
        title: "New password sent to your email!",
        description: "Please change your password after login.",
        duration: 3000,
      });
    } else {
      toast({
        title: "We couldn't send you new password!",
        description: res.message,
        variant: "destructive",
        duration: 3000,
      });
    }
  };

  return (
    <Dialog>
      <DialogTrigger className={"text-primary"}>Forgot password?</DialogTrigger>
      <DialogContent className={"flex flex-col gap-5"}>
        <DialogHeader>
          <DialogTitle>
            Please enter your email address. We will send you new password to
            your email.
          </DialogTitle>
        </DialogHeader>
        <DialogDescription>
          <Input
            type={"email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={"Email"}
          />
        </DialogDescription>
        <DialogFooter>
          <DialogTrigger>
            <Button disabled={loading} onClick={handleClick}>
              {loading ? (
                <>
                  <SpinnerIcon className={"animate-spin mr-2"} />
                  <span className={"pt-[2px]"}>Loading...</span>
                </>
              ) : (
                "Send"
              )}
            </Button>
          </DialogTrigger>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ForgotPassword;
