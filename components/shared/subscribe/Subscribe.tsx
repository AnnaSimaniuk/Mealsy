import Image from "next/image";
import SubscribeBg from "@/public/image/subscribe_bg.png";
import Layout from "@/components/shared/layout/Layout/Layout";
import SubscribeForm from "@/components/form/subscribe-form/SubscribeForm";

const Subscribe = ({ className = "" }: { className?: string }) => {
  return (
    <Layout
      className={`bg-white shadow flex mb-36 overflow-hidden rounded-[5px] ${className}`}
    >
      <div className={"flex flex-col gap-[30px] py-12 px-16"}>
        <h2 className={"text-4xl font-bold"}>
          Every week a selection of new recipes is in your mail!
        </h2>
        <SubscribeForm />
      </div>
      <Image alt={"bg"} src={SubscribeBg} width={434} />
    </Layout>
  );
};

export default Subscribe;
