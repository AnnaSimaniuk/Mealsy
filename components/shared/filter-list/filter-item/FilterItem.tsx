"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import { ITag } from "@/types/ITag";
import FilterItemCheckbox from "@/components/shared/filter-list/filter-item/FilterItemCheckbox";

interface FilterItemProps {
  type: string;
  arr: ITag[];
  setCheckedFilters: <Dispatch, SetStateAction>(value: Dispatch) => void;
}

const FilterItem = ({ type, arr, setCheckedFilters }: FilterItemProps) => {
  const [limit, setLimit] = useState<number>(5);

  const handleShowMore = () => {
    if (limit === arr.length) {
      setLimit(5);
    } else {
      setLimit(arr.length);
    }
  };
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value={type}>
        <AccordionTrigger className={"text-base lg:text-xl"}>
          {type.replace("_", " ").toUpperCase()}
        </AccordionTrigger>
        <AccordionContent>
          {arr.map((item, index) => {
            if (index < limit) {
              return (
                <FilterItemCheckbox
                  key={item.id}
                  display_name={item.display_name}
                  setCheckedFilters={setCheckedFilters}
                  type={type}
                  name={item.name}
                />
              );
            } else {
              return null;
            }
          })}
          {arr.length > 5 && (
            <div
              className={`text-base lg:text-xl font-bold text-primary cursor-pointer`}
              onClick={handleShowMore}
            >
              {limit === arr.length ? "Show less" : "Show more"}
            </div>
          )}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default FilterItem;
