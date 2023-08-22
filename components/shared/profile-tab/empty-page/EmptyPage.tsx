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
      <Image src={image} alt={"bg"} width={500} height={500} />
      <h4 className={"font-semibold text-2xl"}>{title}</h4>
      <p className={"text-xl"}>{description}</p>
      <Link href={"/"}>
        <Button>See recipes</Button>
      </Link>
    </div>
  );
};

export default EmptyPage;
