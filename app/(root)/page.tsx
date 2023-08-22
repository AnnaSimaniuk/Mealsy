import Layout from "@/components/shared/layout/Layout/Layout";
import Constructor from "@/components/shared/constructor/Constructor";
import {
  getCatalogRecipes,
  getMostPopularRecipes,
} from "@/lib/actions/recipe.action";
import RecipeList from "@/components/shared/recipe-list/RecipeList";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Subscribe from "@/components/shared/subscribe/Subscribe";
import { getCookBookByUser } from "../../lib/actions/cookbook.action";

export default async function Home() {
  const popularRecipes = await JSON.parse(
    JSON.stringify(await getMostPopularRecipes())
  );
  const catalogRecipe = await JSON.parse(
    JSON.stringify(await getCatalogRecipes())
  );

  return (
    <main>
      <Layout>
        <Constructor />
        <RecipeList
          title={"Popular recipes"}
          arr={popularRecipes}
          button={
            <Link href={"/recipe?sort=ratings_positive"}>
              <Button>See more</Button>
            </Link>
          }
        />
        <RecipeList
          title={"Recipe catalog"}
          arr={catalogRecipe}
          button={
            <Link href={"/recipe?sort=name"}>
              <Button>See more</Button>
            </Link>
          }
        />
        <Subscribe />
      </Layout>
    </main>
  );
}
