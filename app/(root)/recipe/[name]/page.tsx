import RecipeFullInfo from "@/components/shared/recipe-full-info/RecipeFullInfo";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import Layout from "@/components/shared/layout/Layout/Layout";
import {
  getRecipeBySlug,
  sameRecipes,
} from "../../../../lib/actions/recipe.action";
import RecipeList from "../../../../components/shared/recipe-list/RecipeList";
import Subscribe from "../../../../components/shared/subscribe/Subscribe";
import type { Metadata } from "next";
import { IRecipe } from "@/types/IRecipe";
import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/configs/auth";

export async function generateMetadata({
  params,
}: {
  params: { name: string };
}): Promise<Metadata> {
  const name = params.name;
  const recipe: IRecipe = await JSON.parse(await getRecipeBySlug(name));

  return {
    title: `Mealsy | ${recipe.name}`,
    description: recipe.description || "This is wonderful recipe",
  };
}

export default async function RecipeFullPage({
  params,
}: {
  params: { name: string };
}) {
  const recipeSame = await JSON.parse(await sameRecipes(params.name));

  return (
    <main>
      <Layout>
        <Breadcrumbs />
        <RecipeFullInfo params={params} />
        <RecipeList title={"More delicious recipes for you"} arr={recipeSame} />
        <Subscribe />
      </Layout>
    </main>
  );
}
