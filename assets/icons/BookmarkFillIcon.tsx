import { IIcon } from "@/types/IIcon";

const BookmarkFillIcon = ({ className = "", ...rest }: IIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="35"
    height="34"
    viewBox="0 0 35 34"
    fill="none"
    className={className}
    {...rest}
  >
    <g clipPath="url(#clip0_308_834)">
      <path
        d="M4.75 4.25V32.9375C4.74987 33.122 4.79778 33.3034 4.88903 33.4637C4.98027 33.6241 5.11171 33.7579 5.2704 33.8521C5.42908 33.9462 5.60954 33.9974 5.79402 34.0006C5.9785 34.0038 6.16064 33.9589 6.3225 33.8704L17.5 27.7716L28.6775 33.8704C28.8394 33.9589 29.0215 34.0038 29.206 34.0006C29.3905 33.9974 29.5709 33.9462 29.7296 33.8521C29.8883 33.7579 30.0197 33.6241 30.111 33.4637C30.2022 33.3034 30.2501 33.122 30.25 32.9375V4.25C30.25 3.12283 29.8022 2.04183 29.0052 1.2448C28.2082 0.447767 27.1272 0 26 0L9 0C7.87283 0 6.79183 0.447767 5.9948 1.2448C5.19777 2.04183 4.75 3.12283 4.75 4.25Z"
        fill="#F7931E"
      />
    </g>
    <defs>
      <clipPath id="clip0_308_834">
        <rect width="34" height="34" fill="white" transform="translate(0.5)" />
      </clipPath>
    </defs>
  </svg>
);

export default BookmarkFillIcon;
