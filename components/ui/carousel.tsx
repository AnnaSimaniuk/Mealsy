"use client";

import ArrowLeft from "@/assets/icons/ArrowLeft";
import ArrowRight from "@/assets/icons/ArrowRight";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface IRecipeType {
  image: string;
  tag: string;
  id: number;
  display_name: string;
}

const Carousel = () => {
  const [arrowLeft, setArrowLeft] = useState<boolean>(false);
  const [arrowRight, setArrowRight] = useState<boolean>(true);
  const [translate, setTranslate] = useState<number>(0);
  const [recipe, setRecipe] = useState<IRecipeType[] | []>([]);

  const handleClickLeft = () => {
    if (arrowLeft) return;
    setTranslate((prevState) => prevState - 175);
  };

  const handleClickRight = () => {
    if (arrowRight) return;
    setTranslate((prevState) => prevState + 175);
  };

  const getData = async () => {
    const res = await fetch("/api/cuisine").then((res) => res.json());
    setRecipe(res);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (translate >= 0) {
      setArrowRight(true);
    } else {
      setArrowRight(false);
    }

    if (translate <= recipe.length * -145) {
      setArrowLeft(true);
    } else {
      setArrowLeft(false);
    }
  }, [translate, recipe]);

  return (
    <div className={"flex flex-col gap-y-5"}>
      <div className={"flex gap-x-5"}>
        <div onClick={handleClickLeft}>
          <ArrowLeft
            className={`${
              arrowLeft
                ? "text-[#D0F0BF] cursor-default"
                : "text-primary cursor-pointer"
            }`}
          />
        </div>
        <div onClick={handleClickRight}>
          <ArrowRight
            className={`${
              arrowRight
                ? "text-[#D0F0BF] cursor-default"
                : "text-primary cursor-pointer"
            }`}
          />
        </div>
      </div>
      <div className={"overflow-hidden relative w-full h-[250px]"}>
        <div
          style={{ transform: `translateX(${translate}px)` }}
          className={`flex gap-x-8 w-full absolute top-0 left-0 transition-all duration-300 ease-in-out`}
        >
          {recipe.length > 0 &&
            recipe.map((item) => (
              <div key={item.id} className={"flex flex-col gap-y-2"}>
                <Image
                  src={item.image}
                  alt={item.display_name}
                  width={145}
                  height={145}
                  className={
                    "rounded-md md:min-w-[145px] md:min-h-[145px] min-w-[100px] min-h-[100px]"
                  }
                />
                <Link
                  href={`/recipe?tag-name=${item.tag}&sort=matches`}
                  className={"link"}
                >
                  {item.display_name} cuisine
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
