import { IIcon } from "@/types/IIcon";

const BurgerIcon = ({ className = "", ...rest }: IIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="33"
    height="32"
    viewBox="0 0 33 32"
    fill="none"
    className={className}
    {...rest}
  >
    <path
      d="M12.5 8H27.5M5.5 16H27.5M5.5 24H27.5M5.5 11L8.5 8L5.5 5"
      stroke="#67BB5A"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default BurgerIcon;
