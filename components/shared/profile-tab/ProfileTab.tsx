"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BookmarkFillIcon from "../../../assets/icons/BookmarkFillIcon";
import TaskIcon from "@/assets/icons/TaskIcon";
// import HeartIcon from "@/assets/icons/HeartIcon";
import CookbookTab from "@/components/shared/profile-tab/cookbook-tab/CookbookTab";
import { SessionProvider } from "next-auth/react";
import RecipeProvider from "@/components/context/RecipeContext";
import ShoppingListTab from "@/components/shared/profile-tab/shopping-list-tab/ShoppingListTab";

const ProfileTab = () => {
  return (
    <SessionProvider>
      <div className={"mt-12 lg:mt-[165px]"}>
        <Tabs defaultValue="cookbook" className="w-full">
          <TabsList
            className={
              "border-b-primary border-b-[1px] flex items-center w-full rounded-none p-0 gap-x-1 md:gap-x-20"
            }
          >
            <TabsTrigger
              value="cookbook"
              className={"flex gap-x-2 md:gap-x-5 items-center mb-[13px]"}
            >
              <BookmarkFillIcon className={"w-6 h-6 md:w-[34px] md:h-[34px]"} />
              <span>Cookbooks</span>
            </TabsTrigger>
            <TabsTrigger
              value="shopping-list"
              className={"flex gap-x-2 md:gap-x-5 items-center mb-[13px]"}
            >
              <TaskIcon className={"w-6 h-6 md:w-[34px] md:h-[34px]"} />
              <span>Shopping list</span>
            </TabsTrigger>
            {/*<TabsTrigger*/}
            {/*  value="favorites"*/}
            {/*  className={"flex gap-x-5 items-center mb-[13px]"}*/}
            {/*>*/}
            {/*  <HeartIcon fillIcon={"#F7931E"} fillBorder={"#F7931E"} />*/}
            {/*  <span>Favorites</span>*/}
            {/*</TabsTrigger>*/}
          </TabsList>
          <TabsContent value="cookbook">
            <RecipeProvider>
              <CookbookTab />
            </RecipeProvider>
          </TabsContent>
          <TabsContent value="shopping-list">
            <ShoppingListTab />
          </TabsContent>
        </Tabs>
      </div>
    </SessionProvider>
  );
};

export default ProfileTab;
