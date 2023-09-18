"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { cookbookNameValidation } from "@/lib/validation/cookbookNameValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Form,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CreateCookbookModal from "@/components/shared/cookbook-button/CreateCookbookModal";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { DialogTrigger } from "@/components/ui/dialog";
import { Dispatch, useContext } from "react";
import { RecipeContextStore } from "@/components/context/RecipeContext";
import { ICookbook } from "@/types/ICookbook";
import { IRecipe } from "@/types/IRecipe";

interface AddRecipeFormProps {
  recipeId: string;
  setIsBookmarked: Dispatch<boolean>;
}

const AddRecipeForm = ({ recipeId, setIsBookmarked }: AddRecipeFormProps) => {
  const { toast } = useToast();
  // @ts-ignore
  const { cookbook, setCookbook } = useContext(RecipeContextStore);
  const form = useForm<z.infer<typeof cookbookNameValidation>>({
    resolver: zodResolver(cookbookNameValidation),
    defaultValues: {
      name: "",
    },
  });
  const onSubmit = async (values: z.infer<typeof cookbookNameValidation>) => {
    const currentBook = cookbook.find(
      (item: ICookbook) => item.name === values.name
    );

    if (
      currentBook.recipes.some((recipe: IRecipe) => recipe._id === recipeId)
    ) {
      toast({
        title: "Hey! This recipe is already in your cookbook. 😊",
        variant: "destructive",
        duration: 5000,
      });
      return;
    }
    const res = await fetch("/api/cookbook", {
      method: "PUT",
      body: JSON.stringify({
        recipeId: recipeId,
        id: currentBook._id,
      }),
    });
    if (res.status !== 200) return setCookbook(null);
    const data: ICookbook = await res.json();

    setCookbook((prev: ICookbook[]) =>
      prev.map((item) => (item._id === data._id ? data : item))
    );
    setIsBookmarked(true);
    toast({
      title: "Recipe added successfully! 🎉",
      duration: 3000,
    });
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={"flex flex-col gap-[30px] w-[95%]"}
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder={"Choose cookbook:"} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Choose cookbook:</SelectLabel>
                        {cookbook.map((item: ICookbook) => (
                          <SelectItem value={item.name} key={item.name}>
                            {item.name}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className={"flex gap-[30px] self-end mt-4 mb-7"}>
            <CreateCookbookModal
              trigger={<Button variant={"outline"}>Create</Button>}
            />
            <DialogTrigger asChild>
              <div>
                <Button type={"submit"}>Add to cookbook</Button>
              </div>
            </DialogTrigger>
          </div>
        </form>
      </Form>
    </>
  );
};
export default AddRecipeForm;
