"use client";

import { usePathname } from "next/navigation";
import { transformPathToObjects } from "@/utils/transformPathToObjects";
import Link from "next/link";

interface BreadcrumbsProps {
  breadcrumbs?: {
    name: string;
    href: string;
  }[];
}

const Breadcrumbs = ({ breadcrumbs }: BreadcrumbsProps) => {
  const path = usePathname();
  const pathObjects = breadcrumbs || transformPathToObjects(path);

  const renderOptions = () => {
    return pathObjects.map((pathObject, index) => {
      if (index !== pathObjects.length - 1) {
        return (
          <div className={"flex"} key={pathObject.name}>
            <Link href={pathObject.href} className={"link"}>
              {pathObject.name}
            </Link>
            <span className={"mx-2"}>/</span>
          </div>
        );
      } else {
        return (
          <span
            className={"text-xl text-dark font-medium"}
            key={pathObject.name}
          >
            {pathObject.name}
          </span>
        );
      }
    });
  };
  return (
    <div className={"text-xl text-grey-500 font-medium flex my-12"}>
      {renderOptions()}
    </div>
  );
};

export default Breadcrumbs;
