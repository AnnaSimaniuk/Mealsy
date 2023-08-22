import { IIcon } from "@/types/IIcon";

export const CheckedIcon = ({ className = "", ...rest }: IIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    {...rest}
  >
    <circle cx="12" cy="12" r="12" fill="#67BB5A" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.27747 10.6153L6 12.1377L11.3303 16.6103L18.9977 7.47269L13.6674 3.00005L13.667 3.00056L17.4737 6.19479L11.0842 13.8095L7.27747 10.6153Z"
      fill="white"
    />
  </svg>
);

export const UncheckedIcon = ({ className = "", ...rest }: IIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    {...rest}
  >
    <circle cx="12" cy="12" r="11.5" stroke="#67BB5A" />
  </svg>
);
