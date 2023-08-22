"use client";

import { Input } from "@/components/ui/input";
import SearchIcon from "@/assets/icons/SearchIcon";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const SearchInput = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [searchText, setSearchText] = useState(
    searchParams.get("search") || ""
  );
  const [isSearching, setIsSearching] = useState(false);
  console.log();
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

  const handleInputChange = (e) => {
    setIsSearching(true);
    const text = e.target.value;
    setSearchText(text);
  };

  return (
    <div className="w-[473px] h-[48px] relative">
      <button className="absolute top-1/2 left-6 transform -translate-y-1/2 cursor-pointer">
        <SearchIcon />
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
