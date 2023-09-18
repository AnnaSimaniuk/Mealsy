"use client";

import { Slider } from "@/components/ui/slider";
import { useContext } from "react";
import { ConstructorContextStore } from "@/components/context/ConstructorContext";

const options = [
  "Up to 20 minutes",
  "Up to 40 minutes",
  "Up to 60 minutes",
  "More 1 hour",
];

const TimeCooking = () => {
  // @ts-ignore
  const { time, setTime } = useContext(ConstructorContextStore);

  return (
    <div className={"flex flex-col"}>
      <h5 className="font-bold mb-2 lg:mb-[30px]">Cooking time:</h5>
      <Slider
        max={4}
        step={1}
        defaultValue={time}
        onValueChange={(value: number[]) => setTime(value)}
      />
      <div
        className={
          "flex items-center text-center font-medium text-[10px] lg:text-base justify-around pt-2"
        }
      >
        {options.map((option, index) => (
          <div key={index}>{option}</div>
        ))}
      </div>
    </div>
  );
};

export default TimeCooking;
