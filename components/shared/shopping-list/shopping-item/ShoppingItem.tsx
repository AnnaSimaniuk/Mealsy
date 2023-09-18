"use client";

import { useState } from "react";

interface ShoppingItemProps {
  setData: any;
  id: string;
  slug: string;
  checked: boolean;
  name: string;
  metric_unit?: {
    quantity: string;
    display: string;
  };
  primary_unit?: {
    quantity: string;
    display: string;
  };
}

const ShoppingItem = ({
  checked,
  name,
  metric_unit,
  primary_unit,
  slug,
  id,
  setData,
}: ShoppingItemProps) => {
  const [isChecked, setIsChecked] = useState(checked);
  const handleCheck = async () => {
    await fetch(`/api/shopping-list/${slug}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
      }),
    });
    setData((prev: any) => {
      const newItems = prev.neededIngredients.map((item: any) => {
        if (item._id === id) {
          return {
            ...item,
            checked: !isChecked,
          };
        }
        return item;
      });
      return {
        ...prev,
        neededIngredients: newItems,
      };
    });
    setIsChecked(!isChecked);
  };
  return (
    <div
      onClick={handleCheck}
      className={`flex justify-between items-center cursor-pointer w-full pb-2.5 lg:pb-5 border-b ${
        isChecked ? "border-b-grey-500" : "border-b-primary"
      }`}
    >
      <div className={"flex gap-2.5 items-center"}>
        <div>
          {isChecked ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle cx="12" cy="12" r="12" fill="#B5C3C9" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.27747 10.6153L6 12.1377L11.3303 16.6103L18.9977 7.47269L13.6674 3.00005L13.667 3.00056L17.4737 6.19479L11.0842 13.8095L7.27747 10.6153Z"
                fill="white"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle cx="12" cy="12" r="11.5" stroke="#67BB5A" />
            </svg>
          )}
        </div>
        <div
          className={`text-sm md:text-base lg:text-xl ${
            isChecked ? "text-grey-500" : "text-dark"
          }`}
        >
          {name}
        </div>
      </div>
      <div
        className={`text-sm md:text-base lg:text-xl ${
          isChecked ? "text-grey-500" : "text-dark"
        }`}
      >
        {metric_unit && metric_unit.display
          ? `${metric_unit.quantity} ${
              metric_unit.display ? metric_unit.display : ""
            }`
          : `${(primary_unit && primary_unit.quantity) || ""} ${
              primary_unit && primary_unit.display ? primary_unit.display : ""
            }`}
      </div>
    </div>
  );
};

export default ShoppingItem;
