interface RecipeKeywordsProps {
  keywords: string;
}

const RecipeKeywords = ({ keywords }: RecipeKeywordsProps) => {
  const keywordsArray = keywords.split(",");
  return (
    <div className={"flex flex-wrap gap-1.5"}>
      {keywordsArray.map((keyword) => (
        <span className={"text-sm font-medium"}>
          #{keyword.trim().split(" ").join("_")}
        </span>
      ))}
    </div>
  );
};

export default RecipeKeywords;
