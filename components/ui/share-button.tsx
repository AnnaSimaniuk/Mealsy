"use client";

import ShareIcon from "@/assets/icons/ShareIcon";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  PinterestIcon,
  PinterestShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  ViberIcon,
  ViberShareButton,
} from "react-share";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const ShareButton = () => {
  const path = useParams();
  const location = usePathname();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target as Node)
    ) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className={"flex relative flex-col"} ref={containerRef}>
      <ShareIcon
        className={"cursor-pointer relative z-30"}
        onClick={() => setOpen(!open)}
      />
      <motion.div
        className={"absolute"}
        initial={{ opacity: 0, y: 0, x: 0 }}
        animate={{
          opacity: open ? 1 : 0,
          y: open ? -34 : 0,
          x: open ? -20 : 0,
        }}
        transition={{ duration: 0.6 }}
      >
        <EmailShareButton
          url={typeof window !== "undefined" ? window.location.href : ""}
          subject={"Check out this recipe!"}
        >
          <EmailIcon size={32} round={true} bgStyle={{ fill: "#FFA756" }} />
        </EmailShareButton>
      </motion.div>
      <motion.div
        className={"absolute"}
        initial={{ opacity: 0, y: 0, x: 0 }}
        animate={{
          opacity: open ? 1 : 0,
          y: open ? -32 : 0,
          x: open ? 28 : 0,
        }}
        transition={{ duration: 0.6 }}
      >
        <FacebookShareButton
          url={typeof window !== "undefined" ? window.location.href : ""}
          quote={"Check out this recipe!"}
          hashtag={`#recipe #${path.name}`}
        >
          <FacebookIcon size={32} round={true} />
        </FacebookShareButton>
      </motion.div>
      <motion.div
        className={"absolute"}
        initial={{ opacity: 0, y: 0, x: 0 }}
        animate={{
          opacity: open ? 1 : 0,
          y: open ? 7 : 0,
          x: open ? 49 : 0,
        }}
        transition={{ duration: 0.6 }}
      >
        <TelegramShareButton
          url={typeof window !== "undefined" ? window.location.href : ""}
          title={"Check out this recipe!"}
        >
          <TelegramIcon size={32} round={true} />
        </TelegramShareButton>
      </motion.div>
      <motion.div
        className={"absolute"}
        initial={{ opacity: 0, y: 0, x: 0 }}
        animate={{
          opacity: open ? 1 : 0,
          y: open ? 45 : 0,
          x: open ? 24 : 0,
        }}
        transition={{ duration: 0.6 }}
      >
        <ViberShareButton
          url={typeof window !== "undefined" ? window.location.href : ""}
          title={"Check out this recipe!"}
        >
          <ViberIcon size={32} round={true} />
        </ViberShareButton>
      </motion.div>
      <motion.div
        className={"absolute"}
        initial={{ opacity: 0, y: 0, x: 0 }}
        animate={{
          opacity: open ? 1 : 0,
          y: open ? 43 : 0,
          x: open ? -22 : 0,
        }}
        transition={{ duration: 0.6 }}
      >
        <PinterestShareButton
          url={typeof window !== "undefined" ? window.location.href : ""}
          media={typeof window !== "undefined" ? window.location.href : ""}
          description={"Check out this recipe!"}
        >
          <PinterestIcon size={32} round={true} />
        </PinterestShareButton>
      </motion.div>
      <motion.div
        className={"absolute"}
        initial={{ opacity: 0, y: 0, x: 0 }}
        animate={{
          opacity: open ? 1 : 0,
          y: open ? 3 : 0,
          x: open ? -40 : 0,
        }}
        transition={{ duration: 0.6 }}
      >
        <TwitterShareButton
          url={typeof window !== "undefined" ? window.location.href : ""}
          title={"Check out this recipe!"}
        >
          <TwitterIcon size={32} round={true} />
        </TwitterShareButton>
      </motion.div>
    </div>
  );
};

export default ShareButton;
