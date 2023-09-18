"use client";

import Breadcrumbs from "@/components/ui/breadcrumbs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ShoppingList from "@/components/shared/shopping-list/ShoppingList";
import { useEffect, useMemo, useState } from "react";
import { IShoppingList } from "@/types/IShoppingList";
import TrashIcon from "@/assets/icons/TrashIcon";
import { useRouter } from "next/navigation";

const breadcrumbs = (slug: string) => {
  return [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Profile",
      href: "/profile",
    },
    {
      name: `Shopping list ${slug.replace("-", " ")}`,
      href: `/profile/shopping-list/${slug}`,
    },
  ];
};

export default function ShoppingListPage({
  params,
}: {
  params: { slug: string };
}) {
  const router = useRouter();
  const [data, setData] = useState<IShoppingList | null>(null);
  const checked = useMemo(
    () => data?.neededIngredients.filter((item: any) => item.checked === true),
    [data]
  );
  const unchecked = useMemo(
    () => data?.neededIngredients.filter((item: any) => item.checked === false),
    [data]
  );

  const getRecipe = async () => {
    const response = await fetch(`/api/shopping-list/${params.slug}`);
    const data = (await response.json()) as IShoppingList;
    setData(data);
  };

  useEffect(() => {
    getRecipe();
  }, []);

  const handleDeleteShoppingList = async () => {
    const res = await fetch(`/api/shopping-list/${params.slug}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    router.push("/profile");
  };

  return (
    <section>
      <Breadcrumbs breadcrumbs={breadcrumbs(params.slug)} />
      {data && (
        <div className={"mt-12 flex flex-col gap-12 lg:gap-16 relative"}>
          <div
            onClick={handleDeleteShoppingList}
            className={"absolute top-0 right-0 cursor-pointer"}
          >
            <TrashIcon />
          </div>
          <div className={"flex gap-5 md:gap-12 flex-col xs:flex-row"}>
            <Image
              src={data?.recipe?.thumbnail_url}
              alt={data?.recipe?.slug}
              width={522}
              height={522}
              className={
                "rounded-lg h-[118px] w-[118px] md:w-[269px] md:h-[269px] lg:w-[522px] lg:h-[522px]"
              }
            />
            <div className={"flex flex-col justify-center gap-4"}>
              <h4 className={"text-sm md:text-xl lg:text-2xl font-bold"}>
                {data?.recipe?.name}
              </h4>
              <p className={"text-sm md:text-base lg:text-xl"}>
                Buy: {data?.neededIngredients.length} ingredients
              </p>
              <Link href={`/recipe/${params.slug}`} className={"mt-2 md:mt-8"}>
                <Button>Go to recipe</Button>
              </Link>
            </div>
          </div>
          <div
            className={
              "flex flex-col md:flex-row gap-5 justify-between mb-12 lg:mb-36"
            }
          >
            <div>
              <h4
                className={
                  "text-black text-base md:text-xl lg:text-2xl mb-4 md:mb-8 font-bold"
                }
              >
                Buy:
              </h4>
              {Array.isArray(unchecked) && (
                <ShoppingList
                  list={unchecked}
                  slug={params.slug}
                  setData={setData}
                />
              )}
            </div>
            <div>
              <h4
                className={
                  "text-black text-base md:text-xl lg:text-2xl mb-4 md:mb-8 font-bold"
                }
              >
                Bought:
              </h4>
              {Array.isArray(checked) && (
                <ShoppingList
                  list={checked}
                  slug={params.slug}
                  setData={setData}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
