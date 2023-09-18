"use client";

import Image, { StaticImageData } from "next/image";
import CircleIcon from "@/assets/icons/CircleIcon";
import { useContext } from "react";
import { ConstructorContextStore } from "@/components/context/ConstructorContext";
import { ExcludedIngredientsOption } from "@/types/ExcludedIngredientsOption";

interface ExcludedItemProps {
  option: ExcludedIngredientsOption;
  images: { [key: string]: StaticImageData };
}

const ExcludedItem = ({ option, images }: ExcludedItemProps) => {
  // @ts-ignore
  const { excludeIngredients, setExcludeIngredients } = useContext(
    ConstructorContextStore
  );

  const handleClick = () => {
    setExcludeIngredients((prev: ExcludedIngredientsOption[]) => {
      if (prev.includes(option)) {
        return prev.filter((item) => item !== option);
      }
      return [...prev, option];
    });
  };

  return (
    <div className={"flex flex-col gap-2 items-center"} onClick={handleClick}>
      <div
        className={
          "w-10 h-10 xl:w-24 xl:h-24 bg-[#EDFFE3] rounded-full flex items-center justify-center cursor-pointer relative overflow-hidden"
        }
      >
        <Image
          alt={option}
          src={images[option]}
          width={45}
          className={"w-5 xl:w-11"}
        />
        <CircleIcon
          className={
            "absolute t-0 r-0 overflow-hidden w-10 xl:w-[95px] h-10 xl:h-[95px]"
          }
          circleClassName={
            excludeIngredients.includes(option) ? "draw-circle" : ""
          }
        />
        <div
          className={`w-[3px] xl:w-[5px] h-10 xl:h-[90px] absolute bg-[#FD3B3B] z-10 opacity-0 ${
            excludeIngredients.includes(option) ? "draw-line" : ""
          }`}
        />
      </div>
      <div className={"text-sm font-medium lg:text-base"}>{option}</div>
    </div>
  );
};

export default ExcludedItem;
