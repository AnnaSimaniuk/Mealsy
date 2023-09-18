"use client";
import PlusIcon from "@/assets/icons/PlusIcon";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import SearchIcon from "@/assets/icons/SearchIcon";
import { getUniqueIngredients } from "@/lib/actions/uniqueIngredients.action";
import { IUniqueIngredients } from "@/types/IUniqueIngredients";
import { ConstructorContextStore } from "@/components/context/ConstructorContext";
import SpinnerIcon from "@/assets/icons/SpinnerIcon";

const AddIngredients = () => {
  // @ts-ignore
  const { ingredients, setIngredients, error, setError } = useContext(
    ConstructorContextStore
  );
  const [searchInput, setSearchInput] = useState<{
    value: string;
    isOpen: boolean;
  }>({ value: "", isOpen: false });
  const [ingredientsList, setIngredientsList] = useState<IUniqueIngredients[]>(
    []
  );
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput((prevState) => {
      return { ...prevState, value: e.target.value };
    });
    setLoading(true);
    if (e.target.value === "") {
      setIngredientsList([]);
    } else {
      const ingredients = await getUniqueIngredients(e.target.value);
      setIngredientsList(ingredients);
    }
    setLoading(false);
  };

  const handleAddIngredient = (ingredient: IUniqueIngredients) => {
    setIngredients((prevState: string[]) => {
      if (prevState.includes(ingredient.name)) {
        setError("You have already added this ingredient");
        return prevState;
      }
      if (prevState.length >= 7) {
        setError("You can't add more than 7 ingredients");
        return prevState;
      }
      return [...prevState, ingredient.name];
    });
  };

  const handleDeleteIngredient = (ingredient: string) => {
    setIngredients((prevState: string[]) => {
      return prevState.filter((item) => item !== ingredient);
    });
  };

  useEffect(() => {
    if (error !== "") {
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  }, [error]);

  return (
    <div className={"relative"}>
      <h5 className="font-bold">Enter available products:</h5>
      {error && (
        <div className="text-red-500 text-sm font-semibold absolute -bottom-6 left-0">
          {error}
        </div>
      )}
      <div className="mt-2.5 lg:mt-7 relative rounded-md border border-secondary bg-white text-sm lg:text-xl ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-primary">
        {ingredients.length > 0 && (
          <div className="flex flex-wrap gap-2 p-3 relative">
            {ingredients.map((ingredient: string) => (
              <div
                className="bg-primary text-white rounded-md px-3 py-1 pr-10 relative font-semibold"
                key={ingredient}
              >
                {ingredient}
                <PlusIcon
                  onClick={() => handleDeleteIngredient(ingredient)}
                  className={
                    "inline ml-2 absolute rotate-45 t-[5px] hover:scale-110 transition duration-300 ease-in cursor-pointer"
                  }
                />
              </div>
            ))}
          </div>
        )}
        <div className="w-full h-10 lg:h-[72px] relative">
          <button
            onClick={() =>
              setSearchInput({ ...searchInput, isOpen: !searchInput.isOpen })
            }
            className="absolute top-1/2 left-6 transform -translate-y-1/2 cursor-pointer text-[#B5C3C9] flex items-center gap-2"
          >
            <PlusIcon
              className={`inline transition duration-300 ease-in ${
                searchInput.isOpen ? "rotate-45" : "rotate-0"
              }`}
            />{" "}
            <span>Ingredient</span>
          </button>
        </div>
      </div>
      {searchInput.isOpen && (
        <div className="max-h-[250px] custom-scrollbar overflow-auto w-full border border-secondary bg-white text-xl ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-primary relative rounded-md">
          {loading ? (
            <SpinnerIcon
              className={"animate-spin absolute top-[14px] left-5 text-primary"}
            />
          ) : (
            <SearchIcon className={"absolute top-[11px] left-5"} />
          )}
          <Input
            className={"w-full border-0 pl-14 h-[48px] focus-visible:ring-0"}
            type="text"
            placeholder={"Enter ingredient"}
            onChange={handleChange}
            value={searchInput.value}
          />
          {ingredientsList.length > 0 && (
            <div className={"w-full mt-3 border-t-secondary  border-t"}>
              {ingredientsList.map((ingredient) => (
                <div
                  className={
                    "cursor-pointer hover:bg-secondary py-2 text-sm lg:text-md px-3"
                  }
                  key={ingredient._id}
                  onClick={() => handleAddIngredient(ingredient)}
                >
                  {ingredient.name}
                </div>
              ))}
            </div>
          )}
          {ingredientsList.length === 0 && searchInput.value !== "" && (
            <div className={"w-full mt-3 border-t-secondary  border-t"}>
              <div className={"py-2 text-base lg:text-md px-3"}>No results</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AddIngredients;
