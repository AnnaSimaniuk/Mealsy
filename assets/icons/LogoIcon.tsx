import { IIcon } from "@/types/IIcon";

const LogoIcon = ({ className = "", ...rest }: IIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="152"
    height="40"
    viewBox="0 0 152 40"
    fill="none"
    className={className}
    {...rest}
  >
    <path
      d="M0.5 29.2321L1.13293 19.0543L1.49461 11.1282V7.70556C3.03173 7.70556 4.38802 7.70556 5.56347 7.70556C6.91975 7.70556 8.18562 7.70556 9.45149 7.70556L9.27065 10.4977C9.72274 9.95729 10.0844 9.50694 10.3557 9.23674C10.6269 8.96653 10.9886 8.60625 11.4407 8.33604C11.8928 8.06584 12.3449 7.8857 12.797 7.70556C13.2491 7.52542 13.7916 7.43535 14.3341 7.34528C14.8766 7.25521 15.5096 7.16514 16.1425 7.16514C16.8659 7.16514 17.4988 7.25521 18.1317 7.34528C18.7646 7.43535 19.3072 7.61549 19.6688 7.79563C20.0305 7.97577 20.4826 8.1559 20.8443 8.42611C21.206 8.69632 21.4772 8.96653 21.6581 9.23674C21.8389 9.50694 22.2006 9.95729 22.4718 10.5878C23.1048 9.68708 23.7377 8.96653 24.4611 8.51618C25.1844 8.06584 26.179 7.61549 27.0832 7.43535C27.9874 7.25521 28.8916 7.07507 29.7958 7.07507C31.0616 7.07507 32.1467 7.25521 33.2317 7.61549C34.3167 7.97577 35.2209 8.60625 35.9443 9.41687C36.6676 10.3176 37.0293 11.3984 37.0293 12.7494C37.0293 13.3799 36.9389 14.3707 36.8485 15.7217C36.758 17.0728 36.6676 19.2344 36.4868 22.4769C36.306 25.7194 36.2155 27.8811 36.2155 29.142C34.9497 29.142 33.6838 29.142 32.4179 29.142C30.9712 29.142 29.3437 29.142 27.7161 29.142C27.897 27.3406 27.9874 25.0889 28.1682 22.3868C28.3491 19.6848 28.3491 17.7933 28.3491 16.8025C28.3491 15.9019 28.2587 15.1813 27.9874 14.731C27.8066 14.2806 27.5353 14.0104 27.1736 13.8303C26.8119 13.6501 26.4503 13.5601 26.0886 13.5601C25.6365 13.5601 25.2748 13.6501 25.0036 13.8303C24.6419 14.0104 24.3706 14.2806 24.0994 14.6409C23.7377 15.0912 23.4664 15.7217 23.2856 16.4423C23.1048 16.9827 23.0143 17.8834 22.9239 18.9642C22.8335 20.1351 22.7431 21.6663 22.6527 23.5577L22.5623 29.2321C21.0251 29.2321 19.6688 29.2321 18.4934 29.2321C17.2275 29.2321 15.7808 29.2321 14.1533 29.2321C14.2437 27.9711 14.4245 25.8995 14.6054 22.9273C14.7862 19.955 14.8766 17.9734 14.8766 16.9827C14.8766 16.1721 14.7862 15.5416 14.6054 15.0912C14.4245 14.6409 14.2437 14.3707 13.882 14.1005C13.5203 13.8303 13.1587 13.7402 12.7066 13.7402C12.1641 13.7402 11.712 13.9203 11.2599 14.1905C10.8078 14.4607 10.5365 15.0012 10.1748 15.5416C9.81316 16.082 9.72274 16.9827 9.5419 18.0635C9.36107 19.1443 9.27065 20.7656 9.18023 22.9273C9.08981 25.0889 8.99939 27.2506 8.99939 29.2321C7.28143 29.2321 5.92514 29.2321 4.84011 29.2321C3.66467 29.142 2.21796 29.142 0.5 29.2321Z"
      fill="#67BB5A"
    />
    <path
      d="M68.5858 13.8303C68.8571 12.4792 69.0379 11.4885 69.1283 10.9481C69.2187 10.4076 69.3091 9.59701 69.49 8.42611C73.5588 7.52542 77.0852 7.07507 79.9786 7.07507C81.6061 7.07507 83.1433 7.25521 84.59 7.61549C86.0367 7.97577 87.0313 8.60625 87.8451 9.41687C88.6588 10.2275 89.0205 11.3984 89.0205 13.0196C89.0205 13.8303 88.9301 15.5416 88.6588 18.3337C88.478 21.1259 88.2972 24.7286 88.2067 29.142C86.8504 29.142 85.4037 29.142 84.0475 29.142C82.6912 29.142 81.3349 29.142 79.7978 29.142C79.9786 27.6108 80.1594 24.3684 80.4307 19.5947C79.8882 19.8649 79.4361 20.045 79.1648 20.1351C78.8936 20.2252 78.3511 20.4053 77.5373 20.6755C76.8139 20.9457 76.181 21.1259 75.7289 21.2159C75.2768 21.3961 74.9151 21.5762 74.6439 21.8464C74.2822 22.1166 74.1014 22.2968 74.0109 22.567C73.9205 22.8372 73.8301 23.1074 73.8301 23.3776C73.8301 23.8279 74.0109 24.2783 74.3726 24.6386C74.7343 24.9988 75.3672 25.179 76.181 25.179C76.4523 25.179 76.8139 25.179 77.1756 25.0889C77.5373 24.9988 77.9894 24.9088 78.5319 24.7286C78.0798 25.8095 77.6277 27.4307 77.0852 29.5023C75.9097 29.6824 74.7343 29.7725 73.6493 29.7725C71.9313 29.7725 70.3942 29.5023 69.3091 29.052C68.2241 28.6016 67.2295 27.791 66.5966 26.7102C65.9636 25.6293 65.6924 24.5485 65.6924 23.4677C65.6924 22.8372 65.7828 22.1166 66.0541 21.4861C66.3253 20.8557 66.687 20.2252 67.1391 19.5947C67.5912 18.9642 68.2241 18.5139 68.8571 18.0635C69.49 17.6132 70.3942 17.2529 71.5696 16.8926C72.7451 16.5323 74.1918 16.1721 75.9097 15.8118C76.6331 15.6316 77.3564 15.5416 77.899 15.3614C78.5319 15.1813 78.984 15.0912 79.2552 14.9111C79.5265 14.731 79.7073 14.6409 79.8882 14.4607C80.069 14.2806 80.1594 14.1005 80.2499 13.9203C80.3403 13.7402 80.3403 13.5601 80.3403 13.3799C80.3403 12.8395 80.069 12.3892 79.6169 12.1189C79.1648 11.8487 78.5319 11.6686 77.6277 11.6686C75.096 11.7587 72.1121 12.3892 68.5858 13.8303Z"
      fill="#67BB5A"
    />
    <path
      d="M92.8174 29.2321L93.1791 24.7286L93.9928 8.96651L94.2641 0.5C96.2533 0.5 97.7 0.5 98.6946 0.5C99.9605 0.5 101.407 0.5 102.944 0.5L102.492 6.98498L101.678 22.9272L101.498 29.3221C99.9605 29.3221 98.6042 29.3221 97.4288 29.3221L92.8174 29.2321Z"
      fill="#67BB5A"
    />
    <path
      d="M106.109 28.7818C106.019 28.1513 106.019 27.5208 105.929 26.8002C105.838 26.0797 105.748 25.179 105.657 24.0081L105.477 22.4769C106.833 23.0173 108.008 23.3776 109.003 23.6478C109.998 23.918 110.902 24.0081 111.715 24.0081C112.439 24.0081 112.981 23.918 113.433 23.828C113.886 23.7379 114.157 23.5578 114.338 23.2875C114.518 23.0173 114.609 22.8372 114.609 22.567C114.609 22.2968 114.518 22.1166 114.428 21.9365C114.247 21.7564 113.976 21.3961 113.433 21.0358C112.258 20.2252 111.263 19.4146 110.359 18.694C109.455 17.9735 108.822 17.433 108.37 16.8926C107.918 16.3522 107.556 15.8118 107.375 15.1813C107.195 14.5508 107.014 13.9203 107.014 13.2899C107.014 12.119 107.375 11.0381 108.008 10.0474C108.641 9.05661 109.636 8.33606 110.992 7.88571C112.348 7.43537 113.886 7.16516 115.784 7.16516C117.774 7.16516 120.215 7.43537 123.289 7.88571L123.651 13.8303C121.933 13.1097 120.305 12.8395 118.678 12.8395C117.593 12.8395 116.779 12.9296 116.236 13.1998C115.694 13.47 115.513 13.7402 115.513 14.2806C115.513 14.4608 115.513 14.5508 115.603 14.731C115.694 14.9111 115.784 15.0012 115.875 15.1813C115.965 15.3615 116.236 15.4515 116.417 15.6317C116.598 15.8118 117.141 16.1721 118.045 16.8026C118.949 17.433 119.582 17.8834 120.034 18.2437C120.848 18.8742 121.39 19.4146 121.842 19.955C122.295 20.4954 122.566 21.0358 122.837 21.6663C123.108 22.2968 123.199 22.9273 123.199 23.5578C123.199 24.5485 122.927 25.4492 122.475 26.3499C122.023 27.2506 121.209 27.8811 120.305 28.4215C119.401 28.9619 118.226 29.4122 117.141 29.5924C116.056 29.7725 114.79 29.9527 113.614 29.9527C112.801 29.9527 111.806 29.8626 110.54 29.7725C109.274 29.6825 107.737 29.142 106.109 28.7818Z"
      fill="#67BB5A"
    />
    <path
      d="M125.459 38.8695C125.007 35.5369 124.736 33.3753 124.555 32.5647C125.459 33.015 126.273 33.2852 126.906 33.4654C127.629 33.6455 128.171 33.7356 128.714 33.7356C129.256 33.7356 129.709 33.6455 130.161 33.5554C130.613 33.3753 130.974 33.2852 131.246 33.015C131.517 32.8349 131.788 32.4746 132.15 32.1143C132.512 31.754 132.692 31.3037 132.873 31.0335C133.054 30.7633 133.144 30.3129 133.325 29.7725L129.347 17.7933L125.911 7.79564C127.991 7.79564 129.528 7.79564 130.342 7.79564C131.336 7.79564 132.692 7.79564 134.41 7.79564C134.682 8.87647 135.134 10.7679 135.947 13.3799C136.671 16.082 137.213 18.1536 137.485 19.5947C137.665 20.4053 137.846 21.4862 138.027 22.7471L138.479 21.0358C138.66 20.5855 138.75 20.045 138.931 19.5046C139.112 18.9642 139.383 18.2437 139.655 17.433L141.011 13.5601L143.271 7.70557C145.08 7.70557 146.346 7.70557 147.25 7.70557C148.064 7.70557 149.42 7.70557 151.5 7.70557L147.431 16.8926L140.016 34.0058C139.564 34.9965 139.112 35.7171 138.66 36.2575C138.208 36.7979 137.846 37.2483 137.304 37.6085C136.852 37.9688 136.4 38.239 135.857 38.5092C135.134 38.8695 134.41 39.0496 133.506 39.2298C132.602 39.4099 131.607 39.5 130.703 39.5C130.251 39.5 129.709 39.5 128.985 39.4099C128.262 39.3199 127.719 39.3199 127.267 39.2298C126.815 39.1397 126.182 39.0496 125.459 38.8695Z"
      fill="#67BB5A"
    />
    <path
      d="M54.2085 24.2782C52.6714 24.2782 51.3151 23.9179 50.2301 23.1974C49.5972 22.747 49.1451 22.1165 48.8738 21.396H40.4648C40.5553 21.8463 40.6457 22.3868 40.8265 22.8371C41.1882 24.008 41.7307 25.0888 42.3636 25.9895C42.9966 26.8902 43.9008 27.6108 44.8954 28.1512C45.89 28.7817 47.1558 29.1419 48.5121 29.4122C49.8684 29.6824 51.496 29.7724 53.1235 29.7724C54.299 29.7724 55.384 29.6824 56.5594 29.5923C57.7349 29.5022 59.0912 29.232 60.7187 28.9618C61.2612 25.7193 61.6229 23.6477 61.8037 22.8371C60.0858 23.3775 58.5487 23.7378 57.3732 23.9179C56.1978 24.0981 55.2031 24.2782 54.2085 24.2782Z"
      fill="#67BB5A"
    />
    <path
      d="M51.8487 7.16507C52.8962 7.16507 53.7453 6.27791 53.7453 5.18355C53.7453 4.08918 52.8962 3.20203 51.8487 3.20203C50.8013 3.20203 49.9521 4.08918 49.9521 5.18355C49.9521 6.27791 50.8013 7.16507 51.8487 7.16507Z"
      fill="#67BB5A"
    />
    <path
      d="M51.849 6.7146C45.642 6.7146 40.5557 11.9386 40.5557 18.5137H63.056C63.1423 12.0287 58.056 6.7146 51.849 6.7146ZM48.142 10.0472C45.3833 11.4883 43.8316 13.5599 43.1419 14.5506C43.4005 13.74 44.5212 10.9479 47.4523 9.23654C51.4179 6.89474 55.3835 8.51598 55.9007 8.69612C54.78 8.60605 51.5903 8.24578 48.142 10.0472Z"
      fill="#67BB5A"
    />
  </svg>
);

export default LogoIcon;
