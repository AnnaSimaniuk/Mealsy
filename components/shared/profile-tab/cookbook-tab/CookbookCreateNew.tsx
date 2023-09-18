import RoundedPlusIcon from "@/assets/icons/RoundedPlusIcon";
import CreateCookbookModal from "@/components/shared/cookbook-button/CreateCookbookModal";

const CookbookCreateNew = () => {
  return (
    <CreateCookbookModal
      trigger={
        <div
          className={
            "flex w-[167px] md:w-[295px] h-[224px] md:h-[390px] lg:w-[370px] lg:h-[500px] justify-center items-center cursor-pointer bg-[#DBEFD0] rounded-[10px] px-7"
          }
        >
          <div className={"flex flex-col gap-7 items-center"}>
            <RoundedPlusIcon className={"w-8 h-8 md:w-[70px] md:h-[70px]"} />
            <span className={"text-base lg:text-xl font-bold text-primary"}>
              Create a new cookbook
            </span>
          </div>
        </div>
      }
    />
  );
};

export default CookbookCreateNew;
