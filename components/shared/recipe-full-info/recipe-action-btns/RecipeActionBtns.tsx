import ShareButton from "@/components/ui/share-button";
import CookbookButton from "../../cookbook-button/CookbookButton";

interface RecipeActionBtnsProps {
  id: string;
  image: string;
  name: string;
}

const RecipeActionBtns = ({ id, image, name }: RecipeActionBtnsProps) => {
  return (
    <div className={"flex gap-x-11 items-center"}>
      <ShareButton />
      <CookbookButton id={id} image={image} name={name} />
    </div>
  );
};

export default RecipeActionBtns;
