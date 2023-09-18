"use client";

import ShoppingItem from "@/components/shared/shopping-list/shopping-item/ShoppingItem";
import { INeededIngredient } from "@/types/IShoppingList";

interface ShoppingListProps {
  slug: string;
  list: INeededIngredient[];
  setData: any;
}

const ShoppingList = ({ list, slug, setData }: ShoppingListProps) => {
  return (
    <div
      className={
        "flex flex-col gap-5 lg:gap-10 w-full md:w-[310px] lg:w-[500px]"
      }
    >
      {list.map((item: any) => (
        <ShoppingItem
          id={item._id}
          checked={item.checked}
          name={item.name}
          metric_unit={item.metric_unit}
          primary_unit={item.primary_unit}
          key={item._id}
          slug={slug}
          setData={setData}
        />
      ))}
    </div>
  );
};

export default ShoppingList;
