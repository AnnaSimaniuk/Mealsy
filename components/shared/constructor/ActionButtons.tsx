import { Button } from "@/components/ui/button";
import { useContext } from "react";
import { ConstructorContextStore } from "@/components/context/ConstructorContext";
import SpinnerIcon from "@/assets/icons/SpinnerIcon";

const ActionButtons = () => {
  const { handleClear, handleGetRecipe, loading } = useContext(
    ConstructorContextStore
  );
  return (
    <div className="flex gap-[30px] mt-12 mb-7 justify-end">
      <Button
        className={"font-bold"}
        onClick={handleGetRecipe}
        disabled={loading}
      >
        {loading ? (
          <>
            <SpinnerIcon className={"animate-spin mr-2"} />
            <span className={"pt-[2px]"}>Loading...</span>
          </>
        ) : (
          "Apply"
        )}
      </Button>
      <Button
        variant={"outline"}
        className={"font-bold"}
        onClick={handleClear}
        disabled={loading}
      >
        Clean all
      </Button>
    </div>
  );
};

export default ActionButtons;
