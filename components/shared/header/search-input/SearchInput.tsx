"use client";

import { Input } from "@/components/ui/input";
import SearchIcon from "@/assets/icons/SearchIcon";

import { ChangeEvent, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const SearchInput = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [searchText, setSearchText] = useState(
    searchParams.get("search") || ""
  );
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (isSearching) {
      const timeout = setTimeout(() => {
        router.push(
          `/recipe?search=${encodeURIComponent(
            searchText
          )}&sort=ratings_positive`
        );
      }, 300);

      return () => clearTimeout(timeout);
    }
  }, [searchText, router, isSearching]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsSearching(true);
    if (e.target) {
      const text = e.target.value;
      setSearchText(text);
    }
  };

  return (
    <div className="w-full md:w-[210px] h-[37px] lg:w-[473px] lg:h-[48px] relative">
      <button className="absolute top-1/2 left-6 transform -translate-y-1/2 cursor-pointer">
        <SearchIcon className={"w-4 h-4 lg:w-6 lg:h-6"} />
      </button>
      <Input
        placeholder={"Search recipes..."}
        type="text"
        className={"pl-14"}
        value={searchText}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchInput;
