"use client";

import { useRef, useState } from "react";
import { CheckedIcon, UncheckedIcon } from "@/assets/icons/CheckboxIcon";

const RecipeCheckedIcon = ({ checked }: { checked: boolean }) => {
  return (
    <div className={"cursor-pointer"}>
      {checked ? <CheckedIcon /> : <UncheckedIcon />}
    </div>
  );
};

export default RecipeCheckedIcon;
