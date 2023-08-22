import { IIcon } from "@/types/IIcon";

const PencilIcon = ({ className = "", ...rest }: IIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="35"
    height="35"
    viewBox="0 0 35 35"
    fill="none"
    className={className}
    {...rest}
  >
    <path
      d="M19.3374 5.25003L7.36451 17.9229C6.91243 18.4042 6.47493 19.3521 6.38743 20.0084L5.84784 24.7334C5.65826 26.4396 6.88326 27.6063 8.57493 27.3146L13.2708 26.5125C13.927 26.3959 14.8458 25.9146 15.2978 25.4188L27.2708 12.7459C29.3416 10.5584 30.2749 8.06461 27.052 5.0167C23.8437 1.99795 21.4083 3.06253 19.3374 5.25003Z"
      stroke="white"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.3397 7.36475C17.9668 11.3897 21.2334 14.4668 25.2876 14.8752"
      stroke="white"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default PencilIcon;
