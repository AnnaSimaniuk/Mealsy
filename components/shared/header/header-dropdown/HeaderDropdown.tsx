import {
  Menubar,
  MenubarContent,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { getAllTags, getUniqueTags } from "@/lib/actions/tag.actions";
import HeaderDropdownItem from "@/components/shared/header/header-dropdown/HeaderDropdownItem";
import Layout from "@/components/shared/layout/Layout/Layout";
import RandomRecipe from "@/components/shared/header/header-dropdown/random-recipe/RandomRecipe";
import { ITag } from "@/types/ITag";

const HeaderDropdown = async () => {
  const uniqueTitle: string[] = await getUniqueTags();
  const tags: ITag[] = await JSON.parse(await getAllTags());

  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger className="link text-xl p-0 font-normal">
          Recipes
        </MenubarTrigger>

        <MenubarContent className="w-[100vw] shadow relative top-[37px] rounded-0">
          <Layout className={"flex flex-wrap gap-[46px] py-3"}>
            {uniqueTitle.map((title) => (
              <HeaderDropdownItem
                key={title}
                title={title}
                tagsArr={tags}
                titleHref={title}
              />
            ))}
            <RandomRecipe />
          </Layout>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default HeaderDropdown;
