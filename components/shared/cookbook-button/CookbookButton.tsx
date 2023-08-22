"use client";

import { useContext, useEffect, useMemo, useState } from "react";
import BookmarkFillIcon from "@/assets/icons/BookmarkFillIcon";
import BookmarkIcon from "@/assets/icons/BookmarkIcon";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { useToast } from "@/components/ui/use-toast";
import Link from "next/link";
import AddRecipeForm from "@/components/form/cookbook/AddRecipeForm";
import { RecipeContextStore } from "@/components/context/RecipeContext";
import CreateCookbookModal from "@/components/shared/cookbook-button/CreateCookbookModal";
import { Button } from "@/components/ui/button";

interface CookbookButtonProps {
  image: string;
  name: string;
  id: string;
  className?: string;
}

const CookbookButton = ({
  image,
  name,
  id,
  className,
}: CookbookButtonProps) => {
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);
  const { toast } = useToast();
  const { cookbook } = useContext(RecipeContextStore);

  useEffect(() => {
    if (!cookbook) return;
    const isBookmarked = cookbook.some((item) =>
      item.recipes.some((recipe) => recipe._id === id)
    );
    setIsBookmarked(isBookmarked);
  }, [cookbook]);

  if (!Array.isArray(cookbook))
    return (
      <div
        className={"absolute top-2 right-2 cursor-pointer"}
        onClick={() => {
          toast({
            title: "Sorry. You can't add this recipe to cookbook. 😔",
            description: (
              <>
                <p>
                  Please login to add this recipe to cookbook. Thank you! 😊
                </p>
                <Link href={"/sign-in"} className={"link"}>
                  Sing in
                </Link>
              </>
            ),
            variant: "destructive",
            duration: 5000,
          });
        }}
      >
        <BookmarkIcon fillBorder={"#fff"} fillIcon={"none"} />
      </div>
    );

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className={`cursor-pointer ${className}`}>
          {isBookmarked ? (
            <BookmarkFillIcon />
          ) : (
            <BookmarkIcon fillBorder={"#F7931E"} fillIcon={"none"} />
          )}
        </div>
      </DialogTrigger>
      <DialogContent
        className={
          "text-dark flex flex-col items-center max-h-[95vh] overflow-auto custom-scrollbar"
        }
      >
        <DialogTitle className={"font-medium text-3xl mb-2.5"}>
          SAVE RECIPE
        </DialogTitle>
        <Image
          src={image}
          alt={name}
          height={522}
          width={522}
          className={"w-[522px] h-[522px] rounded-md"}
        />
        <h4 className={"text-3xl font-bold mb-7"}>{name}</h4>
        {cookbook?.length > 0 ? (
          <AddRecipeForm recipeId={id} setIsBookmarked={setIsBookmarked} />
        ) : (
          <>
            <p>You don't have any cookbook. Please create a new one.</p>
            <CreateCookbookModal
              trigger={<Button variant={"outline"}>Create</Button>}
            />
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CookbookButton;
