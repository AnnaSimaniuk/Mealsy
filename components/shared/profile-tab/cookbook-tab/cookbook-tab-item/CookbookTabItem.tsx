"use client";

import Image from "next/image";
import ThreePointIcon from "@/assets/icons/ThreePointIcon";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { useContext, useState } from "react";
import { Input } from "../../../../ui/input";
import { Button } from "../../../../ui/button";
import { RecipeContextStore } from "../../../../context/RecipeContext";
import Link from "next/link";
import { ICookbook } from "@/types/ICookbook";

interface CookbookTabItemProps {
  imageRecipe1?: string;
  imageRecipe2?: string;
  imageRecipe3?: string;
  name: string;
  count: number;
  id: string;
}

const CookbookTabItem = ({
  imageRecipe1,
  imageRecipe2,
  imageRecipe3,
  name,
  count,
  id,
}: CookbookTabItemProps) => {
  const [editName, setEditName] = useState<string>(name);
  const [isEditName, setIsEditName] = useState<boolean>(false);
  // @ts-ignore
  const { setCookbook } = useContext(RecipeContextStore);

  const handleEditName = async () => {
    setIsEditName(false);
    if (!editName) return;
    if (editName === name) return;
    const res = await fetch("/api/cookbook", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: editName,
        id: id,
      }),
    });
    if (res.status !== 200) return;
    const data = await res.json();

    setCookbook((prev: ICookbook[]) =>
      prev.map((item) => (item._id === data._id ? data : item))
    );
  };

  const handleDeleteCookbook = async () => {
    const res = await fetch("/api/cookbook", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    });
    if (res.status !== 200) return;
    const data = await res.json();
    setCookbook((prev: ICookbook[]) =>
      prev.filter((item) => item._id !== data._id)
    );
  };
  return (
    <div
      className={
        "flex flex-col max-w-[167px] md:max-w-[295px] lg:max-w-[370px] text-dark gap-2.5"
      }
    >
      <div
        className={
          "flex flex-col gap-2.5 max-h-[500px] rounded-md overflow-hidden"
        }
      >
        <Image
          src={imageRecipe1 || "/image/new-cookbook1.png"}
          alt={name}
          width={370}
          height={246}
          className={
            "w-[167px] md:w-[295px] lg:w-[370px] h-[111px] md:h-[196px] lg:h-[246px] object-cover"
          }
        />
        <div className={"flex gap-2.5"}>
          <Image
            src={imageRecipe2 || "/image/new-cookbook2.png"}
            alt={name}
            width={185}
            height={245}
            className={
              "w-[80px] md:w-[144px] lg:w-[185px] h-[106px] md:h-[184px] lg:h-[245px] object-cover"
            }
          />
          <Image
            src={imageRecipe3 || "/image/new-cookbook3.png"}
            alt={name}
            width={185}
            height={245}
            className={
              "w-[80px] md:w-[144px] lg:w-[185px] h-[106px] md:h-[184px] lg:h-[245px] object-cover"
            }
          />
        </div>
      </div>
      <div className={"flex justify-between"}>
        <Link href={`/profile/cookbook/${name.replace(" ", "-")}`}>
          <h3 className={"text-sm md:text-base lg:text-xl font-bold link"}>
            {name}
          </h3>
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger className={"cursor-pointer"}>
            <ThreePointIcon />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <div
              className={
                "cursor-pointer text-sm md:text-base lg:text-xl px-2 py-1.5"
              }
              onClick={() => setIsEditName(true)}
            >
              Edit name
            </div>
            {isEditName && (
              <div className={"flex gap-2.5 px-2 py-1.5"}>
                <Input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                />
                <DropdownMenuItem>
                  <Button onClick={handleEditName}>Save</Button>
                </DropdownMenuItem>
              </div>
            )}
            <DropdownMenuItem
              className={
                "text-[#FD3B3B] cursor-pointer text-sm md:text-base lg:text-xl"
              }
              onClick={handleDeleteCookbook}
            >
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <p className={"text-xs md:text-sm lg:text-base"}>
        {count} {count > 1 ? "recipes" : "recipe"}
      </p>
    </div>
  );
};

export default CookbookTabItem;
