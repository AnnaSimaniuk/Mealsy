"use client";

import CloseIcon from "@/assets/icons/CloseIcon";
import SearchInput from "@/components/shared/header/search-input/SearchInput";
import { useEffect, useState } from "react";
import ArrowRight from "@/assets/icons/ArrowRight";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import ProfileIcon from "@/public/image/profile-svgrepo-com.png";
import TelegramIcon from "@/assets/icons/TelegramIcon";
import NetworkIcon from "@/assets/icons/NetworkIcon";
import ArrowLeft from "@/assets/icons/ArrowLeft";
import { Accordion } from "@/components/ui/accordion";
import { getAllTags, getUniqueTags } from "@/lib/actions/tag.actions";
import { ITag } from "@/types/ITag";
import BurgerAccordionItem from "@/components/shared/header/burger-menu/burger-menu-content/burger-accordion-item/BurgerAccordionItem";
import RandomRecipe from "@/components/shared/header/header-dropdown/random-recipe/RandomRecipe";

interface BurgerMenuContentProps {
  setIsOpen: (isOpen: boolean) => void;
  isOpen: boolean;
}

const BurgerMenuContent = ({ setIsOpen, isOpen }: BurgerMenuContentProps) => {
  const [openRecipe, setOpenRecipe] = useState(false);
  const [uniqueTags, setUniqueTags] = useState<string[]>([]);
  const [tags, setTags] = useState<ITag[]>([]);
  const session = useSession();

  useEffect(() => {
    const getTags = async () => {
      const res = await getUniqueTags();
      setUniqueTags(res);
    };
    getTags();
  }, []);

  useEffect(() => {
    const getTags = async () => {
      const res = await JSON.parse(await getAllTags());
      setTags(res);
    };
    getTags();
  }, []);
  return (
    <>
      <div
        className={`fixed z-40 top-0 left-0 ${
          isOpen ? "w-[100vw] h-[100vh] bg-black-500" : "w-0 h-0"
        }`}
      />
      <div
        className={`bg-white flex flex-col gap-5 p-5 z-50 transition-all duration-500 overflow-x-hidden overflow-y-auto text-black text-base absolute top-0 left-0 w-[100vw] ${
          isOpen ? "translate-y-0 shadow" : "-translate-y-[100%]"
        }`}
      >
        <div onClick={() => setIsOpen(false)} className={"ml-auto"}>
          <CloseIcon />
        </div>
        <SearchInput />
        {session?.data && (
          <Link href={"/profile"} className={"w-full flex items-center gap-5"}>
            <Avatar>
              <AvatarImage
                src={
                  session?.data?.user?.image
                    ? session?.data?.user?.image
                    : ProfileIcon.src
                }
              />
            </Avatar>
            {session?.data?.user?.name && (
              <span>{session?.data?.user?.name}</span>
            )}
          </Link>
        )}
        {openRecipe ? (
          <div className={"flex flex-col gap-7"}>
            <div
              className={
                "w-full cursor-pointer flex items-center justify-between"
              }
              onClick={() => setOpenRecipe(false)}
            >
              <span className={"font-medium"}>Back</span>
              <ArrowLeft className={"ml-auto text-primary w-5 h-5"} />
            </div>
            <div className={"font-bold"}>Recipes</div>
            <Accordion type="single" collapsible className="w-full">
              {uniqueTags.map((title, index) => (
                <BurgerAccordionItem
                  key={title}
                  title={title}
                  tagsArr={tags}
                  index={index}
                />
              ))}
            </Accordion>
          </div>
        ) : (
          <div className={"flex flex-col gap-7"}>
            <div
              className={
                "w-full cursor-pointer flex items-center justify-between"
              }
              onClick={() => setOpenRecipe(true)}
            >
              <span>Recipe</span>
              <ArrowRight className={"ml-auto text-primary w-5 h-5"} />
            </div>
            {session?.data ? (
              <div className={"link"} onClick={() => signOut()}>
                Sign Out
              </div>
            ) : (
              <Link href={"/sign-in"} className={"link"}>
                Sign In
              </Link>
            )}
            <h5 className={"text-base lg:text-xl"}>Our social networks:</h5>
            <div className={"flex gap-x-5"}>
              <Link href={"/"}>
                <TelegramIcon />
              </Link>
              <Link href={"/"}>
                <NetworkIcon />
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default BurgerMenuContent;
