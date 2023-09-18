import FilterItem from "@/components/shared/filter-list/filter-item/FilterItem";
import { Button } from "@/components/ui/button";
import Subscribe from "@/components/shared/subscribe/Subscribe";
import { ITag } from "@/types/ITag";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import FilterIcon from "@/assets/icons/FilterIcon";

interface FilterListMobileProps {
  uniqueTags: string[];
  setCheckedFilters: <Dispatch, SetStateAction>(value: Dispatch) => void;
  filters: ITag[];
  checkedFilters: { type: string; name: string }[];
  handleApplyFilters: () => void;
}

const FilterListMobile = ({
  uniqueTags,
  setCheckedFilters,
  filters,
  checkedFilters,
  handleApplyFilters,
}: FilterListMobileProps) => {
  return (
    <DropdownMenu>
      <div
        className={
          "absolute flex lg:hidden flex-col gap-y-6 min-w-[320px] lg:w-[420px]"
        }
      >
        <DropdownMenuTrigger
          className={
            "text-base lg:text-xl text-black flex items-center gap-x-4"
          }
        >
          <span className={"hidden md:block"}>Additional filters</span>
          <FilterIcon />
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className={
            "flex flex-col p-[30px] bg-white shadow min-w-[320px] overflow-y-auto mb-10"
          }
        >
          <Button
            disabled={checkedFilters.length === 0}
            onClick={handleApplyFilters}
          >
            Apply
          </Button>
          {uniqueTags?.map((item) => {
            const arr = filters.filter((filter) => filter.type === item);
            return (
              <FilterItem
                key={item}
                type={item}
                arr={arr}
                setCheckedFilters={setCheckedFilters}
              />
            );
          })}
        </DropdownMenuContent>
      </div>
    </DropdownMenu>
  );
};

export default FilterListMobile;
