import HeartIcon from "@/assets/icons/HeartIcon";
import CookbookButton from "../../cookbook-button/CookbookButton";

interface RecipeLikedProps {
  id: string;
  image: string;
  name: string;
}

const RecipeLiked = ({ id, image, name }: RecipeLikedProps) => {
  return (
    <div className={"flex flex-col gap-y-5"}>
      <h4 className={"text-2xl font-bold"}>Did you like the recipe?</h4>
      <div className={"flex justify-between text-xl items-center"}>
        <div className={"flex items-center gap-x-2.5 cursor-pointer"}>
          <HeartIcon fillBorder={"#67BB5A"} />
          <span>add to favorites</span>
        </div>
        <div className={"flex items-center gap-x-2.5 cursor-pointer"}>
          <CookbookButton id={id} image={image} name={name} />
          <span>add to the cookbook</span>
        </div>
      </div>
    </div>
  );
};

export default RecipeLiked;
