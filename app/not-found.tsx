import Link from "next/link";
import Image from "next/image";
import errorImg from "@/assets/image/404.png";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className={"flex flex-col gap-12 my-20 items-center justify-center"}>
      <Image
        src={errorImg}
        alt={"error"}
        width={624}
        height={734}
        className={"w-[220px] md:w-[430px] lg:w-[642px]"}
      />
      <h2 className={"text-base md:text-xl lg:text-2xl font-bold text-center"}>
        Oppps! Page not found!
      </h2>
      <p className={"text-center text-sm md:text-base lg:text-xl"}>
        Could not find requested resource
      </p>
      <Link href="/">
        <Button>Return Home</Button>
      </Link>
    </main>
  );
}
