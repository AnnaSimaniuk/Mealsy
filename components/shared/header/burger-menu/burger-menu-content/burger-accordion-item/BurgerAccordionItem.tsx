import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ITag } from "@/types/ITag";
import Link from "next/link";

interface BurgerAccordionItemProps {
  title: string;
  tagsArr: ITag[];
  index: number;
  setIsOpen: (isOpen: boolean) => void;
}

const BurgerAccordionItem = ({
  title,
  tagsArr,
  index,
  setIsOpen,
}: BurgerAccordionItemProps) => {
  return (
    <AccordionItem value={`item-${index + 1}`} className={"text-sm"}>
      <AccordionTrigger>
        <Link
          href={`/recipe?tag-type=${title}&sort=matches`}
          onClick={() => setIsOpen(false)}
        >
          {title.toUpperCase().replace("_", " ")}
        </Link>
      </AccordionTrigger>
      <AccordionContent className={"pl-2"}>
        {tagsArr
          .filter((tag) => tag.type === title)
          .map((tag) => (
            <Link
              href={`/recipe?tag-name=${tag.name}&sort=matches`}
              key={tag.id}
              className={"link cursor-pointer"}
              onClick={() => setIsOpen(false)}
            >
              {tag.display_name}
            </Link>
          ))}
      </AccordionContent>
    </AccordionItem>
  );
};

export default BurgerAccordionItem;
