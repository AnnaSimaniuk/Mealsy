import Breadcrumbs from "../../../components/ui/breadcrumbs";
import Layout from "../../../components/shared/layout/Layout/Layout";
import Carousel from "@/components/ui/carousel";
import SortList from "@/components/shared/sort-list/SortList";
import FilterList from "@/components/shared/filter-list/FilterList";
import FilterRecipeList from "@/components/shared/filter-recipe-list/FilterRecipeList";

export default async function RecipesPage() {
  return (
    <main>
      <Layout>
        <Breadcrumbs />
        <h1 className={"text-3xl font-bold mb-5"}>Recipe catalog</h1>
        <Carousel />
        <div className={"flex gap-x-5"}>
          <FilterList />
          <div
            className={"flex-1 flex items-end flex-col w-full gap-y-5 mb-36"}
          >
            <SortList />
            <FilterRecipeList />
          </div>
        </div>
      </Layout>
    </main>
  );
}
