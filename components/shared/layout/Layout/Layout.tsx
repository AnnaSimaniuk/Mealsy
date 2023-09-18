import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

const Layout = ({ children, className = "" }: LayoutProps) => {
  return <div className={`container mx-auto ${className}`}>{children}</div>;
};

export default Layout;
