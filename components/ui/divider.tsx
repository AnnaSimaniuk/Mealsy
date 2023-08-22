interface DividerProps {
  text: string;
  className?: string;
}

const Divider = ({ text, className = "" }: DividerProps) => {
  return (
    <div className={`flex items-center justify-center space-x-4 ${className}`}>
      <div className="flex-grow border-t border-grey-500"></div>
      <span className="text-grey-500">{text}</span>
      <div className="flex-grow border-t border-grey-500"></div>
    </div>
  );
};

export default Divider;
