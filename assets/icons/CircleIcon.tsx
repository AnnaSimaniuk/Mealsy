import { IIcon } from "@/types/IIcon";

interface ICircleIcon extends IIcon {
  circleClassName?: string;
}

const CircleIcon = ({
  className = "",
  circleClassName = "",
  ...rest
}: ICircleIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="95"
    height="95"
    viewBox="0 0 95 95"
    fill="none"
    className={`${className}`}
    {...rest}
  >
    <circle
      cx="47.5"
      cy="47.5"
      r="45.5"
      fill="transparent"
      stroke="#FD3B3B"
      strokeWidth="4"
      strokeDasharray="285"
      strokeDashoffset="285"
      className={`${circleClassName}`}
    />
  </svg>
);

export default CircleIcon;
