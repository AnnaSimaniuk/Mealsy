import { useContext } from "react";
import { ConstructorContextStore } from "@/components/context/ConstructorContext";
import RecipeList from "@/components/shared/recipe-list/RecipeList";
import { Button } from "@/components/ui/button";
import SpinnerIcon from "@/assets/icons/SpinnerIcon";

const ConstructorList = () => {
  const { loading, recipes, submitted, handleSkip, limit } = useContext(
    ConstructorContextStore
  );

  const handleLoadMore = () => {
    handleSkip();
  };
  return (
    <>
      {submitted && (
        <div className={"mb-36"}>
          {recipes?.recipe.length > 0 ? (
            <RecipeList
              title={"Constructor results"}
              arr={recipes.recipe}
              button={
                limit < recipes.count && (
                  <Button
                    onClick={handleLoadMore}
                    className={"w-fit"}
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <SpinnerIcon className={"animate-spin mr-2"} />
                        <span className={"pt-[2px]"}>Loading...</span>
                      </>
                    ) : (
                      "Load more"
                    )}
                  </Button>
                )
              }
            />
          ) : (
            !loading && (
              <div className={"text-lg font-bold"}>
                Sorry, we couldn't find any recipes for your ingredients. Try
                changing the ingredients or adding more.
              </div>
            )
          )}
        </div>
      )}
    </>
  );
};

export default ConstructorList;
