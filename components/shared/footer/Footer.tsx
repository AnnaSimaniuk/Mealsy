import Layout from "@/components/shared/layout/Layout/Layout";
import LogoIcon from "@/assets/icons/LogoIcon";
import Link from "next/link";
import TelegramIcon from "@/assets/icons/TelegramIcon";
import NetworkIcon from "@/assets/icons/NetworkIcon";
import SubscribeForm from "@/components/form/subscribe-form/SubscribeForm";

const Footer = () => {
  return (
    <footer className={"w-full bg-[#DBEFD0] font-normal shadow"}>
      <Layout className={"pt-7 pb-20 flex gap-x-[50px]"}>
        <Link href={"/"}>
          <LogoIcon />
        </Link>
        <div className={"flex flex-col gap-[30px] flex-1"}>
          <h4 className={"text-2xl font-semibold"}>Join us</h4>
          <div>
            <h5 className={"text-xl"}>Our social networks:</h5>
            <div className={"flex gap-x-5"}>
              <Link href={"/"}>
                <TelegramIcon />
              </Link>
              <Link href={"/"}>
                <NetworkIcon />
              </Link>
            </div>
          </div>
          <div className={"flex flex-col"}>
            <h5 className={"text-xl"}>Subscribe to the newsletter:</h5>
            <SubscribeForm classInput={"footer-form"} />
          </div>
        </div>
        <div className={"w-[2px] bg-primary h-auto"} />
        <div className={"flex flex-col gap-[30px]"}>
          <h5 className={"text-2xl font-semibold"}>Find</h5>
          <Link href={"/"} className={"link text-lg w-fit"}>
            Home
          </Link>
          <Link href={"/recipe"} className={"link text-lg w-fit"}>
            Recipes
          </Link>
          <Link href={"/profile"} className={"link text-lg w-fit"}>
            My profile
          </Link>
        </div>
        <div className={"w-[2px] bg-primary h-auto"} />
        <div className={"flex flex-col gap-y-5 flex-1"}>
          <h5 className={"text-2xl font-semibold"}>Feedback</h5>
          <p className={"text-lg"}>
            Help us become better! Leave your suggestions for improving the
            service. We are trying for you!
          </p>
          <Link
            href={"mailto:onlinestoredanit@gmail.com"}
            className={"link text-lg text-primary font-bold w-fit"}
          >
            Write to us
          </Link>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;
