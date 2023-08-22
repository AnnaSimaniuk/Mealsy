"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";

const useQueryString = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return { pathname, createQueryString };
};

export default useQueryString;
