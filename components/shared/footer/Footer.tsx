import Layout from "@/components/shared/layout/Layout/Layout";
import LogoIcon from "@/assets/icons/LogoIcon";
import Link from "next/link";
import TelegramIcon from "@/assets/icons/TelegramIcon";
import NetworkIcon from "@/assets/icons/NetworkIcon";
import SubscribeForm from "@/components/form/subscribe-form/SubscribeForm";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Footer = () => {
  return (
    <footer className={"w-full bg-[#DBEFD0] font-normal shadow"}>
      <Layout
        className={
          "pt-7 pb-7 lg:pb-20 flex gap-x-[50px] gap-y-7 flex-col-reverse lg:flex-row"
        }
      >
        <Link href={"/"} className={"w-[133px] self-center lg:self-start"}>
          <LogoIcon />
        </Link>
        <div className={"flex gap-5 lg:gap-[50px] flex-col md:flex-row"}>
          <div className={"flex flex-col gap-[30px] flex-1"}>
            <h4 className={"text-base lg:text-2xl font-semibold"}>Join us</h4>
            <div>
              <h5 className={"text-base lg:text-xl"}>Our social networks:</h5>
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
              <h5 className={"text-base lg:text-xl"}>
                Subscribe to the newsletter:
              </h5>
              <SubscribeForm classInput={"footer-form"} />
            </div>
          </div>
          <div className={"w-[2px] bg-primary h-auto hidden md:block"} />
          <div className={"md:flex flex-col hidden gap-5 md:gap-[30px]"}>
            <h5 className={"text-base lg:text-2xl font-semibold"}>Find</h5>
            <Link href={"/"} className={"link text-base lg:text-lg w-fit"}>
              Home
            </Link>
            <Link
              href={"/recipe"}
              className={"link text-base lg:text-lg w-fit"}
            >
              Recipes
            </Link>
            <Link
              href={"/profile"}
              className={"link text-base lg:text-lg w-fit"}
            >
              My profile
            </Link>
          </div>
          <div className={"w-[2px] bg-primary h-auto hidden md:block"} />
          <div className={"hidden md:flex flex-col gap-y-5 flex-1"}>
            <h5 className={"text-base lg:text-2xl font-semibold"}>Feedback</h5>
            <p className={"text-base lg:text-lg"}>
              Help us become better! Leave your suggestions for improving the
              service. We are trying for you!
            </p>
            <Link
              href={"mailto:onlinestoredanit@gmail.com"}
              className={
                "link text-base lg:text-lg text-primary font-bold w-fit"
              }
            >
              Write to us
            </Link>
          </div>
          <Accordion
            type="single"
            collapsible
            className="w-full block md:hidden"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>Find</AccordionTrigger>
              <AccordionContent className={"flex flex-col gap-2.5"}>
                <Link href={"/"} className={"link text-base lg:text-lg w-fit"}>
                  Home
                </Link>
                <Link
                  href={"/recipe"}
                  className={"link text-base lg:text-lg w-fit"}
                >
                  Recipes
                </Link>
                <Link
                  href={"/profile"}
                  className={"link text-base lg:text-lg w-fit"}
                >
                  My profile
                </Link>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Feedback</AccordionTrigger>
              <AccordionContent className={"flex flex-col gap-2.5"}>
                <p className={"text-base lg:text-lg"}>
                  Help us become better! Leave your suggestions for improving
                  the service. We are trying for you!
                </p>
                <Link
                  href={"mailto:onlinestoredanit@gmail.com"}
                  className={
                    "link text-base lg:text-lg text-primary font-bold w-fit"
                  }
                >
                  Write to us
                </Link>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;
