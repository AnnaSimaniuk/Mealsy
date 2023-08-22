import { IIcon } from "@/types/IIcon";

const StarIcon = ({ className = "", ...rest }: IIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="31"
    height="32"
    viewBox="0 0 31 32"
    fill="none"
    className={className}
    {...rest}
  >
    <g clipPath="url(#clip0_244_1234)">
      <path
        d="M29.998 11.416L20.7049 10.0017L16.5505 1.18226C16.4371 0.940792 16.2504 0.745317 16.0198 0.626498C15.4415 0.327536 14.7388 0.576671 14.4496 1.18226L10.2953 10.0017L1.0021 11.416C0.745888 11.4543 0.511636 11.5808 0.332287 11.7724C0.115464 12.0058 -0.00401488 12.3198 0.000103019 12.6453C0.00422092 12.9709 0.131599 13.2814 0.354248 13.5087L7.078 20.3734L5.48948 30.0667C5.45223 30.2921 5.47606 30.524 5.55826 30.7361C5.64047 30.9481 5.77776 31.1318 5.95458 31.2662C6.13139 31.4007 6.34065 31.4806 6.55862 31.4969C6.77659 31.5132 6.99456 31.4652 7.18781 31.3583L15.5001 26.7819L23.8123 31.3583C24.0393 31.4848 24.3028 31.527 24.5554 31.481C25.1922 31.366 25.6205 30.7336 25.5107 30.0667L23.9221 20.3734L30.6459 13.5087C30.8289 13.3209 30.9497 13.0756 30.9863 12.8073C31.0851 12.1366 30.6386 11.5156 29.998 11.416Z"
        fill="#F7931E"
      />
    </g>
    <defs>
      <clipPath id="clip0_244_1234">
        <rect
          width="31"
          height="31"
          fill="white"
          transform="translate(0 0.5)"
        />
      </clipPath>
    </defs>
  </svg>
);

export default StarIcon;
