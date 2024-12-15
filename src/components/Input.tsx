import { LucideIcon } from "lucide-react";
import { useRef } from "react";

export interface InputTypes {
  placeholder: string;
  onChange: (val: React.ChangeEvent<HTMLInputElement>) => void;
  Icon?: LucideIcon;
  rotate?: boolean;
  className?: {
    container?: string;
    input?: string;
    icon?: string;
  };
  disabled?: boolean;
}

const Input: React.FC<InputTypes> = ({
  placeholder,
  onChange,
  Icon,
  rotate,
  className = {},
  disabled = false,
}) => {
  const divRef = useRef<HTMLDivElement | null>(null);

  // const handleFocus = () => {
  //   if (divRef.current) {
  //     divRef.current.focus();
  //   }
  // };

  return (
    <div
      className={`border p-2  flex items-center focus:ring-1 focus:ring-dark-blue ${
        className.container || ""
      } ${disabled ? "opacity-50 cursor-not-allowed" : null}`}
      ref={divRef}
      tabIndex={0}
    >
      <input
        placeholder={placeholder}
        onChange={onChange}
        className={`focus:outline-none ${className.input || ""}`}
        // onClick={handleFocus}
      />
      {Icon ? (
        <Icon
          size={25}
          className={`cursor-pointer text-slate-500 p-1 ${
            rotate ? "rotate-90" : ""
          } ${className.icon || ""}`}
        />
      ) : null}
    </div>
  );
};

export default Input;
