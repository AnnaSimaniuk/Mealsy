import { IIcon } from "@/types/IIcon";

const ArrowLeft = ({ className = "", ...rest }: IIcon) => (
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
      d="M19.25 9L7 21.25L19.25 33.5M7 21.25L35 21.25L7 21.25Z"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ArrowLeft;
