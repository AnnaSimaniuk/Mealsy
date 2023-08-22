import { MenubarItem } from "@/components/ui/menubar";
import Link from "next/link";
import { ITag } from "@/types/ITag";

interface HeaderDropdownItemProps {
  title: string;
  titleHref: string;
  tagsArr: ITag[];
}

const HeaderDropdownItem = ({
  title,
  titleHref,
  tagsArr,
}: HeaderDropdownItemProps) => {
  let hideTags = false;
  const renderOptions = () => {
    return tagsArr
      .filter((tag) => tag.type === title)
      .map((tag, index) => {
        if (index < 3) {
          return (
            <Link
              href={`/recipe?tag-name=${tag.name}&sort=matches`}
              key={tag.id}
              className={"link"}
            >
              <MenubarItem className={"cursor-pointer"}>
                {tag.display_name}
              </MenubarItem>
            </Link>
          );
        } else {
          hideTags = true;
          return null;
        }
      });
  };
  return (
    <div className="flex text-black font-normal text-base gap-[20px] items-start flex-col flex-auto">
      <Link
        href={`/recipe?tag-type=${title}&sort=matches`}
        className={"font-bold link"}
      >
        <MenubarItem className={"cursor-pointer"}>
          {title.toUpperCase().replace("_", " ")}
        </MenubarItem>
      </Link>
      <div className="flex items-start flex-col gap-[10px]">
        {renderOptions()}
        {hideTags ? (
          <Link
            href={`/recipe?tag-type=${title}&sort=matches`}
            className={"link font-medium"}
          >
            <MenubarItem className={"cursor-pointer"}>Show more...</MenubarItem>
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default HeaderDropdownItem;
