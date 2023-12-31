import Breadcrumbs from "@/components/ui/breadcrumbs";
import { getRecipesByName } from "@/lib/actions/cookbook.action";
import CookbookRecipeItem from "@/components/shared/recipe-list/recipe-item/CookbookResipeItem";
import EmptyPage from "@/components/shared/profile-tab/empty-page/EmptyPage";
import { IRecipe } from "@/types/IRecipe";

const breadcrumbs = (name: string) => {
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
      name: `Cookbook ${name.replace("-", " ")}`,
      href: `/profile/cookbook/${name}`,
    },
  ];
};

export default async function CookbookRecipePage({
  params,
}: {
  params: { name: string };
}) {
  // @ts-ignore
  let cookbook = await JSON.parse(await getRecipesByName(params.name));

  return (
    <div className={"mt-5 flex flex-col"}>
      <Breadcrumbs breadcrumbs={breadcrumbs(params.name)} />
      <h2 className={"font-bold text-xl lg:text-4xl mb-5 lg:mb-12"}>
        {cookbook.name}
      </h2>
      <div className={"mb-12 lg:mb-[150px]"}>
        {cookbook.recipes.length > 0 ? (
          <div className={"flex flex-wrap gap-2.5 md:gap-7"}>
            {cookbook.recipes.map((recipe: IRecipe) => (
              <CookbookRecipeItem
                recipe={recipe}
                key={recipe._id}
                cookbookName={cookbook.name}
                cookbook={cookbook}
              />
            ))}
          </div>
        ) : (
          <EmptyPage
            title={
              "Looks like you haven't added anything to this cookbook yet!"
            }
            description={
              "If you want to add a recipe to the cookbook, just click on the bookmark icon and the recipe will appear right here!"
            }
            image={"/image/vegetables.png"}
          />
        )}
      </div>
    </div>
  );
}
