"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import { useCallback, useEffect, useState } from "react";
import ArrowDown from "@/assets/icons/ArrowDown";
import { sortListData } from "@/components/shared/sort-list/data";
import { useRouter, useSearchParams } from "next/navigation";
import useQueryString from "@/lib/hook/useQueryString";

const SortList = () => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const [sort, setSort] = useState(params.get("sort") || "matches");
  const { pathname, createQueryString } = useQueryString();
  const router = useRouter();
  useEffect(() => {
    router.push(pathname + "?" + createQueryString("sort", sort));
  }, [sort]);

  useEffect(() => {
    if (searchParams.get("sort") !== sort)
      setSort(searchParams.get("sort") || "matches");
  }, [searchParams]);

  return (
    <div className={"flex ml-auto gap-x-5 text-xl text-black"}>
      <div className={"flex gap-x-1.5 items-center"}>
        <h6>Sort by:</h6>
        <DropdownMenu>
          <DropdownMenuTrigger
            className={
              "text-primary outline-none cursor-pointer flex gap-x-1.5 items-center"
            }
          >
            <span>{sortListData.find((el) => el.value === sort)?.name}</span>{" "}
            <ArrowDown />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuRadioGroup value={sort} onValueChange={setSort}>
              {sortListData.map((item) => (
                <DropdownMenuRadioItem key={item.id} value={item.value}>
                  {item.name}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default SortList;
