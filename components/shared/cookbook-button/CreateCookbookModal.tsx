"use client";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { ReactNode, useContext, useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { RecipeContextStore } from "@/components/context/RecipeContext";
import { ICookbook } from "@/types/ICookbook";

interface CreateCookbookModalProps {
  trigger: ReactNode;
}

const CreateCookbookModal = ({ trigger }: CreateCookbookModalProps) => {
  const [inputValue, setInputValue] = useState<string>("");
  // @ts-ignore
  const { cookbook, setCookbook } = useContext(RecipeContextStore);
  const { toast } = useToast();

  const handleAddCookbook = async () => {
    const currentBook = cookbook.find(
      (item: ICookbook) => item.name === inputValue
    );

    if (currentBook) {
      toast({
        title: "Hey! This cookbook already exists. 😊",
        variant: "destructive",
        duration: 5000,
      });
      setInputValue("");
      return;
    }

    const res = await fetch("/api/cookbook", {
      method: "POST",
      body: JSON.stringify({
        name: inputValue,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.status !== 200) return setCookbook(null); //TODO: redirect to 404 page
    const data: ICookbook = await res.json();

    setCookbook((prev: ICookbook[]) => [...prev, data]);
    setInputValue("");
    toast({
      title: "Cookbook added successfully! 🎉",
      description: (
        <>
          <p>You can now add recipes to your cookbook. 😊</p>
        </>
      ),
      duration: 3000,
    });
  };
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent
        className={
          "text-dark flex flex-col items-center max-h-[100vh] md:max-h-[95vh] overflow-auto custom-scrollbar"
        }
      >
        <DialogTitle
          className={"font-medium text-xl md:text-2xl lg:text-3xl mb-2.5"}
        >
          CREATE A NEW COOKBOOK
        </DialogTitle>
        <div className={"flex flex-col gap-2.5"}>
          <Image
            src={"/image/new-cookbook1.png"}
            alt={"bg"}
            width={205}
            height={126}
            className={"w-full h-[126px]"}
          />
          <div className={"flex justify-between w-full"}>
            <Image
              src={"/image/new-cookbook2.png"}
              alt={"bg"}
              width={122}
              height={55}
            />
            <Image
              src={"/image/new-cookbook3.png"}
              alt={"bg"}
              width={122}
              height={55}
            />
          </div>
        </div>
        <Input
          placeholder={"Enter the name of the cookbook"}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className={"w-[80%]"}
        />
        <DialogFooter className={"gap-[30px] self-end mt-4 mb-7"}>
          <DialogTrigger asChild>
            <Button variant={"outline"}>Close</Button>
          </DialogTrigger>
          <DialogTrigger asChild>
            <div>
              <Button
                onClick={handleAddCookbook}
                disabled={inputValue.length === 0}
              >
                Create
              </Button>
            </div>
          </DialogTrigger>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateCookbookModal;
