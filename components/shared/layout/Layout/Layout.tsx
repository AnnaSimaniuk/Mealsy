import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

const Layout = ({ children, className = "" }: LayoutProps) => {
  return (
    <div className={`max-w-[1280px] mx-auto ${className}`}>{children}</div>
  );
};

export default Layout;
