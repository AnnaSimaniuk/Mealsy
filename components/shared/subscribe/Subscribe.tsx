import Image from "next/image";
import SubscribeBg from "@/public/image/subscribe_bg.png";
import Layout from "@/components/shared/layout/Layout/Layout";
import SubscribeForm from "@/components/form/subscribe-form/SubscribeForm";

const Subscribe = ({ className = "" }: { className?: string }) => {
  return (
    <Layout
      className={`relative bg-white shadow flex mb-36 overflow-hidden rounded-[5px] p-0 ${className}`}
    >
      <div className={"flex flex-col gap-[30px] py-12 px-16 z-10"}>
        <h2 className={"text-sm md:text-2xl lg:text-4xl font-bold"}>
          Every week a selection of new recipes is in your mail!
        </h2>
        <SubscribeForm />
      </div>
      <Image
        alt={"bg"}
        src={SubscribeBg}
        width={434}
        className={
          "w-[100%] absolute top-0 right-0 opacity-20 md:opacity-100 md:static md:w-[264px] lg:w-[434px]"
        }
      />
    </Layout>
  );
};

export default Subscribe;
