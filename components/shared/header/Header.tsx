import Layout from "@/components/shared/layout/Layout/Layout";
import LogoIcon from "@/assets/icons/LogoIcon";
import Link from "next/link";
import HeaderDropdown from "@/components/shared/header/header-dropdown/HeaderDropdown";
import SearchInput from "@/components/shared/header/search-input/SearchInput";
import { Providers } from "@/components/provider/Providers";
import AuthHeader from "@/components/shared/auth/AuthHeader";
import BurgerIcon from "@/assets/icons/BurgerIcon";
import BurgerMenu from "@/components/shared/header/burger-menu/BurgerMenu";

const Header = async () => {
  return (
    <header className="w-full bg-white shadow border-b border-primary text-black text-xl">
      <Layout className={"py-4 lg:py-[34px]"}>
        <nav className="hidden justify-between items-center md:flex">
          <Link href={"/"}>
            <LogoIcon className={"w-[72px] md:w-[102px] lg:w-[152px]"} />
          </Link>
          <HeaderDropdown />
          <SearchInput />
          <Providers>
            <AuthHeader />
          </Providers>
        </nav>
        <Providers>
          <BurgerMenu />
        </Providers>
      </Layout>
    </header>
  );
};

export default Header;
