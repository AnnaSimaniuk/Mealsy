"use client";
import QuestionMarkIcon from "@/assets/icons/QuestionMarkIcon";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useContext } from "react";
import { ConstructorContextStore } from "@/components/context/ConstructorContext";
import { AdditionalIngredientsOption } from "@/types/AdditionalIngredientsOption";

const options: AdditionalIngredientsOption[] = ["0", "1", "2", "3", "4", "5"];

const AdditionalIngredients = () => {
  // @ts-ignore
  const { additionalIngredients, setAdditionalIngredients } = useContext(
    ConstructorContextStore
  );

  return (
    <div className={"flex flex-col"}>
      <div className={"flex items-center gap-2.5"}>
        <h5 className="font-bold">
          Include additional ingredients in the recipe?
        </h5>
        <div className={"relative"}>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <QuestionMarkIcon />
              </TooltipTrigger>
              <TooltipContent className={"bottom-8"}>
                <p className="text-sm">
                  You can include up to 5 ingredients in the recipe.
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
      <div className={"flex justify-between mt-[30px] mb-2.5"}>
        {options.map((option) => (
          <div
            key={option}
            onClick={() => setAdditionalIngredients(option)}
            className={`flex items-center justify-center w-10 h-10 lg:w-14 lg:h-14 rounded-full cursor-pointer text-base lg:text-2xl font-semibold bg-[#EDFFE3] border hover:border-primary transition duration-300 ease-in-out ${
              additionalIngredients === option
                ? "border-primary"
                : "border-[#EDFFE3]"
            }`}
          >
            {option}
          </div>
        ))}
      </div>
      <div className={"flex gap-2 items-center"}>
        <div className={"text-red-500 text-xl lg:text-3xl font-semibold"}>
          !
        </div>
        <p className={"text-secondary text-xs lg:text-md"}>
          Spices, sauces, syrups and herbs are not considered{" "}
          <span className={"font-bold"}>main</span> ingredients
        </p>
      </div>
    </div>
  );
};

export default AdditionalIngredients;
