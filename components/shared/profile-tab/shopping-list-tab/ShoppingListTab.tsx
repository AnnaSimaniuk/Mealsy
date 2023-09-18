import { useEffect, useState } from "react";
import { IShoppingList } from "@/types/IShoppingList";
import ShoppingListTabItem from "@/components/shared/profile-tab/shopping-list-tab/shopping-list-tab-item/ShoppingListTabItem";
import EmptyPage from "@/components/shared/profile-tab/empty-page/EmptyPage";

const ShoppingListTab = () => {
  const [shoppingList, setShoppingList] = useState<IShoppingList[]>([]);
  const getShoppingList = async () => {
    const response = await fetch(`api/shopping-list`);
    const data = await response.json();
    setShoppingList(data);
  };
  useEffect(() => {
    getShoppingList();
  }, []);
  return (
    <div className={"flex flex-col mt-12 mb-12 md:mb-[150px] gap-y-7"}>
      {shoppingList.length > 0 ? (
        shoppingList.map(({ recipe, neededIngredients }) => (
          <ShoppingListTabItem
            key={recipe._id}
            image={recipe.thumbnail_url}
            name={recipe.name}
            count={neededIngredients.length}
            slug={recipe.slug}
          />
        ))
      ) : (
        <EmptyPage
          title={"You haven't created a shopping list yet!"}
          description={
            "When you add ingredients to your shopping list, you'll see them here. Happy shopping!"
          }
          image={"/image/shopping-list.png"}
        />
      )}
    </div>
  );
};

export default ShoppingListTab;
