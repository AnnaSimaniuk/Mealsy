import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

const Layout = ({ children, className = "" }: LayoutProps) => {
  return (
    <div className={`container mx-auto px-2.5 md:px-8 ${className}`}>
      {children}
    </div>
  );
};

export default Layout;
