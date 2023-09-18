import { getInstructions } from "@/lib/actions/ingredient.action";
import { IIngredient } from "../../../../types/IIngredient";

interface RecipeInstructionProps {
  name: string;
}

const RecipeInstruction = async ({ name }: RecipeInstructionProps) => {
  const { instructions }: IIngredient = await getInstructions(name);

  return (
    <div className={"flex flex-col gap-y-10"}>
      <h4 className={"text-xl lg:text-2xl font-bold"}>Instructions:</h4>
      <div className={"flex flex-col gap-y-10"}>
        {instructions.map((instruction, index) => (
          <div
            key={instruction.display_text}
            className={"flex flex-col gap-y-2.5"}
          >
            <h5 className={"text-xl lg:text-2xl font-bold"}>
              Step {index + 1}/{instructions.length}
            </h5>
            <p className={"text-base lg:text-xl"}>{instruction.display_text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeInstruction;
