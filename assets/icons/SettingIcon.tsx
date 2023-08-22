import { IIcon } from "@/types/IIcon";

const SettingIcon = ({ className = "", ...rest }: IIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="34"
    height="34"
    viewBox="0 0 34 34"
    className={className}
    {...rest}
    fill="none"
  >
    <path
      d="M17 21.25C19.3472 21.25 21.25 19.3472 21.25 17C21.25 14.6528 19.3472 12.75 17 12.75C14.6528 12.75 12.75 14.6528 12.75 17C12.75 19.3472 14.6528 21.25 17 21.25Z"
      stroke="#1C1F1D"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.83337 18.2466V15.7533C2.83337 14.28 4.03754 13.0616 5.52504 13.0616C8.08921 13.0616 9.13754 11.2483 7.84837 9.02412C7.11171 7.74912 7.55087 6.09162 8.84004 5.35495L11.2909 3.95245C12.41 3.28662 13.855 3.68328 14.5209 4.80245L14.6767 5.07162C15.9517 7.29578 18.0484 7.29578 19.3375 5.07162L19.4934 4.80245C20.1592 3.68328 21.6042 3.28662 22.7234 3.95245L25.1742 5.35495C26.4634 6.09162 26.9025 7.74912 26.1659 9.02412C24.8767 11.2483 25.925 13.0616 28.4892 13.0616C29.9625 13.0616 31.1809 14.2658 31.1809 15.7533V18.2466C31.1809 19.72 29.9767 20.9383 28.4892 20.9383C25.925 20.9383 24.8767 22.7516 26.1659 24.9758C26.9025 26.265 26.4634 27.9083 25.1742 28.645L22.7234 30.0475C21.6042 30.7133 20.1592 30.3166 19.4934 29.1975L19.3375 28.9283C18.0625 26.7041 15.9659 26.7041 14.6767 28.9283L14.5209 29.1975C13.855 30.3166 12.41 30.7133 11.2909 30.0475L8.84004 28.645C7.55087 27.9083 7.11171 26.2508 7.84837 24.9758C9.13754 22.7516 8.08921 20.9383 5.52504 20.9383C4.03754 20.9383 2.83337 19.72 2.83337 18.2466Z"
      stroke="#1C1F1D"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SettingIcon;