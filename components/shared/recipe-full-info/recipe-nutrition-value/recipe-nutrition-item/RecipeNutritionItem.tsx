interface RecipeNutritionItemProps {
  title: string;
  bgColor: string;
  borderColor: string;
  textColor: string;
  value: string;
}

const RecipeNutritionItem = ({
  title,
  bgColor,
  borderColor,
  textColor,
  value,
}: RecipeNutritionItemProps) => {
  return (
    <div
      className={`flex flex-col py-5 px-1 w-[125px] border ${bgColor} ${borderColor} gap-y-5 rounded-md items-center`}
    >
      <span className={`text-base ${textColor}`}>{title}</span>
      <span className={`text-base`}>{value}</span>
    </div>
  );
};

export default RecipeNutritionItem;
