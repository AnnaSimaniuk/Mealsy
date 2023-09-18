"use client";

import { createContext, ReactNode, useEffect, useState } from "react";
import { ICookbook } from "@/types/ICookbook";

export const RecipeContextStore = createContext({});

interface RecipeContextProps {
  children: ReactNode;
}

const RecipeProvider = ({ children }: RecipeContextProps) => {
  const [cookbook, setCookbook] = useState<ICookbook[] | null>(null);
  const getCookbook = async () => {
    const res = await fetch("/api/cookbook");
    if (res.status !== 200) return setCookbook(null);
    const data: ICookbook[] = await res.json();
    setCookbook(data);
  };

  useEffect(() => {
    getCookbook();
  }, []);

  return (
    <RecipeContextStore.Provider
      value={{
        cookbook,
        setCookbook,
      }}
    >
      {children}
    </RecipeContextStore.Provider>
  );
};

export default RecipeProvider;
