import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface EmptyPageProps {
  title: string;
  description: string;
  image: string;
}

const EmptyPage = ({ title, description, image }: EmptyPageProps) => {
  return (
    <div
      className={"flex flex-col gap-7 text-dark justify-center items-center"}
    >
      <Image
        src={image}
        alt={"bg"}
        width={500}
        height={500}
        className={
          "w-[200px] h-[200px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]"
        }
      />
      <h4 className={"font-semibold text-base md:text-xl lg:text-2xl"}>
        {title}
      </h4>
      <p className={"text-sm md:text-base lg:text-xl"}>{description}</p>
      <Link href={"/"}>
        <Button>See recipes</Button>
      </Link>
    </div>
  );
};

export default EmptyPage;
