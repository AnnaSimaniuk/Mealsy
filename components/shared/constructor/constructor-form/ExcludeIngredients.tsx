import Milk from "../../../../public/image/milk.png";
import Alcohol from "../../../../public/image/alcohol.png";
import Egg from "../../../../public/image/egg.png";
import Fish from "../../../../public/image/fish.png";
import Meat from "../../../../public/image/meat.png";
import Onion from "../../../../public/image/onion.png";
import ExcludedItem from "@/components/shared/constructor/constructor-form/excluded-item/ExcludedItem";
import { ExcludedIngredientsOption } from "@/types/ExcludedIngredientsOption";

const options: ExcludedIngredientsOption[] = [
  "Milk",
  "Alcohol",
  "Egg",
  "Fish",
  "Meat",
  "Onion",
];
const ExcludeIngredients = () => {
  const images = {
    Milk,
    Alcohol,
    Egg,
    Fish,
    Meat,
    Onion,
  };

  return (
    <div className={"flex flex-col gap-y-5"}>
      <h5 className="font-bold mb-[20px]">Exclude from the recipe:</h5>
      <div className={"flex justify-between items-center"}>
        {options.map((option) => (
          <ExcludedItem option={option} images={images} key={option} />
        ))}
      </div>
    </div>
  );
};

export default ExcludeIngredients;
