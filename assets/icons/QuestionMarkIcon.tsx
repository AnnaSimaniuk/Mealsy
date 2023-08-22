import { IIcon } from "@/types/IIcon";

const QuestionMarkIcon = ({ className = "", ...rest }: IIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="34"
    height="34"
    viewBox="0 0 34 34"
    fill="none"
    className={className}
    {...rest}
  >
    <path
      d="M34 17C34 21.5087 32.2089 25.8327 29.0208 29.0208C25.8327 32.2089 21.5087 34 17 34C12.4913 34 8.1673 32.2089 4.97919 29.0208C1.79107 25.8327 0 21.5087 0 17C0 12.4913 1.79107 8.1673 4.97919 4.97919C8.1673 1.79107 12.4913 0 17 0C21.5087 0 25.8327 1.79107 29.0208 4.97919C32.2089 8.1673 34 12.4913 34 17ZM11.679 12.8201H13.4321C13.7254 12.8201 13.9591 12.58 13.9974 12.2889C14.1886 10.8949 15.1449 9.87913 16.8491 9.87913C18.3069 9.87913 19.6414 10.608 19.6414 12.3611C19.6414 13.7105 18.8466 14.331 17.5907 15.2745C16.1606 16.3136 15.028 17.527 15.1088 19.4969L15.1151 19.958C15.1174 20.0974 15.1743 20.2304 15.2737 20.3282C15.3731 20.426 15.5069 20.4808 15.6464 20.4807H17.3697C17.5106 20.4807 17.6458 20.4248 17.7454 20.3251C17.845 20.2255 17.901 20.0904 17.901 19.9495V19.7264C17.901 18.2006 18.4811 17.7565 20.0473 16.5686C21.3414 15.5848 22.6908 14.4925 22.6908 12.1996C22.6908 8.98875 19.9792 7.4375 17.0106 7.4375C14.3183 7.4375 11.3688 8.69125 11.1669 12.2952C11.164 12.3639 11.1751 12.4324 11.1997 12.4965C11.2242 12.5607 11.2616 12.6191 11.3096 12.6683C11.3575 12.7175 11.4151 12.7563 11.4786 12.7824C11.5421 12.8085 11.6103 12.8213 11.679 12.8201ZM16.6196 26.5115C17.9159 26.5115 18.8063 25.6742 18.8063 24.5416C18.8063 23.3686 17.9137 22.5441 16.6196 22.5441C15.3786 22.5441 14.4755 23.3686 14.4755 24.5416C14.4755 25.6742 15.3786 26.5115 16.6217 26.5115H16.6196Z"
      fill="#67BB5A"
    />
  </svg>
);

export default QuestionMarkIcon;
