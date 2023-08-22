import RecipeFullInfo from "@/components/shared/recipe-full-info/RecipeFullInfo";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import Layout from "@/components/shared/layout/Layout/Layout";
import { sameRecipes } from "../../../../lib/actions/recipe.action";
import RecipeList from "../../../../components/shared/recipe-list/RecipeList";
import Subscribe from "../../../../components/shared/subscribe/Subscribe";

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
