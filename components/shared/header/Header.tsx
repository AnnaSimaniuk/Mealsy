import Layout from "@/components/shared/layout/Layout/Layout";
import LogoIcon from "@/assets/icons/LogoIcon";
import Link from "next/link";
import HeaderDropdown from "@/components/shared/header/header-dropdown/HeaderDropdown";
import SearchInput from "@/components/shared/header/search-input/SearchInput";
import { Providers } from "@/components/provider/Providers";
import AuthHeader from "@/components/shared/auth/AuthHeader";

const Header = async () => {
  return (
    <header className="w-full bg-white shadow border-b border-primary text-black text-xl">
      <Layout className={"py-[34px]"}>
        <nav className="flex justify-between items-center">
          <Link href={"/"}>
            <LogoIcon />
          </Link>
          <HeaderDropdown />
          <SearchInput />
          <Providers>
            <AuthHeader />
          </Providers>
        </nav>
      </Layout>
    </header>
  );
};

export default Header;
