import Image from "next/image";

const ShoppingListTabItem = ({ image, name, count }) => {
  return (
    <div className={"flex justify-between items-center"}>
      <Image
        src={image}
        alt={name}
        width={200}
        height={200}
        className={"w-[200px] h-[200px] object-cover rounded-md"}
      />
      <div className={"flex flex-col gap-y-5 text-dark"}>
        <h2 className={"text-2xl font-bold"}>{name}</h2>
        <p>
          Buy <span className={"font-bold"}>{count}</span> ingredients
        </p>
      </div>
    </div>
  );
};

export default ShoppingListTabItem;
