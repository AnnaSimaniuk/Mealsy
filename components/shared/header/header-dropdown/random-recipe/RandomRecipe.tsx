import { getRandomRecipe } from "@/lib/actions/recipe.action";
import Image from "next/image";
import { IRecipe } from "@/types/IRecipe";
import Link from "next/link";
import { MenubarItem } from "@/components/ui/menubar";

const RandomRecipe = async () => {
  const randomRecipe: IRecipe = await getRandomRecipe();

  return (
    <div className={"w-[287px] h-214px text-black order-1"}>
      <Link href={`/recipe/${randomRecipe.slug}`}>
        <MenubarItem className={"cursor-pointer flex-col"}>
          <h3>THIS WEEK RECIPE</h3>
          <Image
            src={randomRecipe.thumbnail_url}
            alt={randomRecipe.name}
            width={287}
            height={144}
            className={
              "h-[144px] object-cover rounded-[10px] overflow-hidden pt-2 pb-1"
            }
          />
          <p className={"text-dark link"}>{randomRecipe.name}</p>
        </MenubarItem>
      </Link>
    </div>
  );
};

export default RandomRecipe;
