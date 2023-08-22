"use client";

import { useContext } from "react";
import { RecipeContextStore } from "../../../context/RecipeContext";
import CookbookTabItem from "@/components/shared/profile-tab/cookbook-tab/cookbook-tab-item/CookbookTabItem";
import CookbookCreateNew from "@/components/shared/profile-tab/cookbook-tab/CookbookCreateNew";

const CookbookTab = () => {
  const { cookbook } = useContext(RecipeContextStore);
  return (
    <div className={"flex my-[105px] flex-wrap justify-between gap-5"}>
      {cookbook?.length > 0 &&
        cookbook.map((item) => (
          <CookbookTabItem
            key={item._id}
            count={item.recipes.length}
            name={item.name}
            imageRecipe1={item.recipes[0]?.thumbnail_url}
            imageRecipe2={item.recipes[1]?.thumbnail_url}
            imageRecipe3={item.recipes[2]?.thumbnail_url}
            id={item._id}
          />
        ))}
      <CookbookCreateNew />
    </div>
  );
};

export default CookbookTab;
