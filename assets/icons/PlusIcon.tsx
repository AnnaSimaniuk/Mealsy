import { IIcon } from "@/types/IIcon";

const PlusIcon = ({ className = "", ...rest }: IIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    {...rest}
  >
    <path
      d="M12 20V12M12 12V4M12 12H20M12 12H4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export default PlusIcon;
