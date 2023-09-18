"use client";

import { useEffect, useState } from "react";
import FilterItem from "@/components/shared/filter-list/filter-item/FilterItem";
import { ITag } from "@/types/ITag";
import { Button } from "@/components/ui/button";
import Subscribe from "@/components/shared/subscribe/Subscribe";
import useQueryString from "@/lib/hook/useQueryString";
import { useRouter, useSearchParams } from "next/navigation";
import FilterListMobile from "@/components/shared/filter-list/FilterListMobile";

const FilterList = () => {
  const [filters, setFilters] = useState<ITag[] | []>([]);
  const [uniqueTags, setUniqueTags] = useState<string[] | []>([]);
  const [checkedFilters, setCheckedFilters] = useState<
    { type: string; name: string }[] | []
  >([]);
  const { pathname, createQueryString } = useQueryString();
  const router = useRouter();
  const searchParams = useSearchParams();
  // @ts-ignore
  const params = new URLSearchParams(searchParams);

  const handleApplyFilters = () => {
    router.push(
      pathname +
        "?" +
        createQueryString(
          "tag-name",
          checkedFilters.map((el) => el.name).join(",")
        )
    );
  };

  const handleGetData = async () => {
    const resTags = await fetch("/api/tag").then((res) => res.json());
    setFilters(resTags);

    const resUniqueTags = await fetch("/api/tag?unique-type=true").then((res) =>
      res.json()
    );
    setUniqueTags(resUniqueTags);
  };

  useEffect(() => {
    handleGetData();
    const tagName = params.get("tag-name");
    if (tagName) {
      const arr = tagName.split(",");
      setCheckedFilters(arr.map((el) => ({ type: "", name: el })));
    }
  }, []);

  return (
    <>
      <div className={"hidden lg:flex flex-col gap-y-6 w-[340px] lg:w-[420px]"}>
        <h4 className={"text-base lg:text-xl text-black"}>
          Additional filters
        </h4>
        <div className={"flex flex-col p-[30px] bg-white shadow"}>
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
          <Button
            disabled={checkedFilters.length === 0}
            className={"mt-11"}
            onClick={handleApplyFilters}
          >
            Apply
          </Button>
        </div>
        <Subscribe className={"hidden lg:flex flex-wrap-reverse mt-6"} />
      </div>

      <FilterListMobile
        setCheckedFilters={setCheckedFilters}
        checkedFilters={checkedFilters}
        filters={filters}
        handleApplyFilters={handleApplyFilters}
        uniqueTags={uniqueTags}
      />
    </>
  );
};

export default FilterList;
