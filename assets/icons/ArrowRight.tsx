import { IIcon } from "@/types/IIcon";

const ArrowRight = ({ className = "", ...rest }: IIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="42"
    height="42"
    viewBox="0 0 42 42"
    fill="none"
    className={className}
    {...rest}
  >
    <path
      d="M22.75 9L35 21.25L22.75 33.5M35 21.25L7 21.25L35 21.25Z"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ArrowRight;
