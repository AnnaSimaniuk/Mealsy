"use client";

import { useEffect, useState } from "react";
import RecipeCheckedIcon from "@/components/shared/recipe-full-info/recipe-ingredients/recipe-ingredient-item/RecipeCheckedIcon";
import { useSearchParams } from "next/navigation";

interface FilterItemCheckboxProps {
  display_name: string;
  setCheckedFilters: <Dispatch, SetStateAction>(value: Dispatch) => void;
  type: string;
  name: string;
}

const FilterItemCheckbox = ({
  display_name,
  setCheckedFilters,
  type,
  name,
}: FilterItemCheckboxProps) => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const condition = !!params.get("tag-name")?.split(",")?.includes(name);
  const [checked, setChecked] = useState(condition);

  const handleChecked = () => {
    setChecked(!checked);
    if (checked) {
      setCheckedFilters((prev) => prev.filter((item) => item.name !== name));
    } else {
      setCheckedFilters((prev) => [...prev, { name, type }]);
    }
  };

  useEffect(() => {
    if (!!params.get("tag-type")) {
      if (!!params.get("tag-type")?.split(",")?.includes(type)) {
        setChecked(true);
        setCheckedFilters([{ name, type }]);
      }
    }
  }, []);

  return (
    <div
      onClick={handleChecked}
      className={"flex gap-x-2.5 text-xl items-center cursor-pointer"}
    >
      <RecipeCheckedIcon checked={checked} />
      <div>{display_name}</div>
    </div>
  );
};

export default FilterItemCheckbox;
