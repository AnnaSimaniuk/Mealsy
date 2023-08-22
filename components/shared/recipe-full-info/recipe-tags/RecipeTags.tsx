import { ITag } from "@/types/ITag";
import { getTagsByRecipe } from "@/lib/actions/tag.actions";
import Link from "next/link";

interface RecipeTagsProps {
  params: {
    name: string;
  };
}

const RecipeTags = async ({ params }: RecipeTagsProps) => {
  const tags: ITag[] = await getTagsByRecipe(params.name);

  return (
    <div className={"flex flex-col gap-y-6"}>
      <h4 className={"text-2xl font-bold"}>Tags:</h4>
      <div className={"flex flex-wrap gap-x-2.5 gap-y-5 w-full"}>
        {tags.map((tag: ITag) => (
          <Link
            key={tag.id}
            href={`/recipe?tag-name=${tag.name}&sort=matches`}
            className={
              "w-max font-xl py-2.5 px-5 rounded-[26px] bg-[#DCE0FF] hover:bg-grey cursor-pointer hover:text-white transition-all duration-500 ease-in-out"
            }
          >
            {tag.display_name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecipeTags;
