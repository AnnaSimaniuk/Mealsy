import Image from "next/image";
import Link from "next/link";
import ArrowRight from "@/assets/icons/ArrowRight";

interface ShoppingListTabItemProps {
  image: string;
  name: string;
  count: number;
  slug: string;
}

const ShoppingListTabItem = ({
  image,
  name,
  count,
  slug,
}: ShoppingListTabItemProps) => {
  return (
    <Link
      href={`/profile/shopping-list/${slug}`}
      className={"border-b-primary border-b last:border-b-0"}
    >
      <div
        className={
          "flex items-center pb-[30px] cursor-pointer gap-x-2.5 md:gap-x-12"
        }
      >
        <Image
          src={image}
          alt={name}
          width={200}
          height={200}
          className={
            "w-[100px] md:w-[150px] lg:w-[200px] h-[100px] md:h-[150px] lg:h-[200px] object-cover rounded-md"
          }
        />
        <div className={"flex flex-col gap-y-5 text-dark"}>
          <h2 className={"text-sm md:text-xl lg:text-2xl font-bold"}>{name}</h2>
          <p className={"text-sm md:text-base"}>
            Buy <span className={"font-bold"}>{count}</span> ingredients
          </p>
        </div>
        <ArrowRight
          className={"ml-auto text-primary w-8 h-8 lg:w-[42px] lg:h-[42px]"}
        />
      </div>
    </Link>
  );
};

export default ShoppingListTabItem;
