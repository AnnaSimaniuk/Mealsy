"use client";

import Image from "next/image";
import CircleIcon from "@/assets/icons/CircleIcon";
import { useContext } from "react";
import { ConstructorContextStore } from "@/components/context/ConstructorContext";

interface ExcludedItemProps {
  option: string;
  images: { [key: string]: string };
}

const ExcludedItem = ({ option, images }: ExcludedItemProps) => {
  const { excludeIngredients, setExcludeIngredients } = useContext(
    ConstructorContextStore
  );

  const handleClick = () => {
    setExcludeIngredients((prev) => {
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
          "w-24 h-24 bg-[#EDFFE3] rounded-full flex items-center justify-center cursor-pointer relative overflow-hidden"
        }
      >
        <Image alt={option} src={images[option]} width={45} />
        <CircleIcon
          className={"absolute t-0 r-0 overflow-hidden"}
          circleClassName={
            excludeIngredients.includes(option) ? "draw-circle" : ""
          }
        />
        <div
          className={`w-[5px] h-[90px] absolute bg-[#FD3B3B] z-10 opacity-0 ${
            excludeIngredients.includes(option) ? "draw-line" : ""
          }`}
        />
      </div>
      <div className={"font-medium text-base"}>{option}</div>
    </div>
  );
};

export default ExcludedItem;
