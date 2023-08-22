import RoundedPlusIcon from "@/assets/icons/RoundedPlusIcon";
import CreateCookbookModal from "@/components/shared/cookbook-button/CreateCookbookModal";

const CookbookCreateNew = () => {
  return (
    <CreateCookbookModal
      trigger={
        <div
          className={
            "flex w-[370px] h-[500px] justify-center items-center cursor-pointer bg-[#DBEFD0] rounded-[10px] px-7"
          }
        >
          <div className={"flex flex-col gap-7 items-center"}>
            <RoundedPlusIcon />
            <span className={"text-xl font-bold text-primary"}>
              Create a new cookbook
            </span>
          </div>
        </div>
      }
    />
  );
};

export default CookbookCreateNew;
