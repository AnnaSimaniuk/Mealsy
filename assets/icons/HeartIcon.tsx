import { IIcon } from "@/types/IIcon";

interface HeartIconProps extends IIcon {
  fillIcon?: string;
  fillBorder?: string;
}

const HeartIcon = ({
  className = "",
  fillIcon = "none",
  fillBorder = "white",
  ...rest
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="34"
    height="34"
    viewBox="0 0 34 34"
    fill={fillIcon}
    className={className}
    {...rest}
  >
    <path
      d="M17.879 29.4808C17.3973 29.6508 16.604 29.6508 16.1223 29.4808C12.014 28.0783 2.83398 22.2275 2.83398 12.3108C2.83398 7.93333 6.36148 4.39166 10.7107 4.39166C13.289 4.39166 15.5698 5.63833 17.0007 7.565C18.4315 5.63833 20.7265 4.39166 23.2907 4.39166C27.6398 4.39166 31.1673 7.93333 31.1673 12.3108C31.1673 22.2275 21.9873 28.0783 17.879 29.4808Z"
      stroke={fillBorder}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default HeartIcon;
