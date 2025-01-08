import { Label } from "@radix-ui/react-label";
import { Input } from "./ui/input";
import { InputsTypes } from "@/utils/types";
import DatePicker from "./widgets/DatePicker";
import SelectCompo from "./SelectCompo";

const Inputs: React.FC<InputsTypes> = ({
  data,
  layout = "column",
  slice1,
  slice2,
  defaultSelect = true,
  className,
  onChange,
}) => {
  return (
    <>
      <div
        className={`flex  ${
          layout === "row"
            ? `flex-col sm:flex-row sm:items-center gap-2`
            : "flex-col gap-2"
        }`}
      >
        {data.slice(slice1, slice2).map((item, index) => (
          <div key={index}>
            <Label htmlFor={item.label} className="text-sm">
              {item.label}
            </Label>
            <div className="relative mt-1">
              {item.type === "text" || item.type === "email" ? (
                <>
                  <Input
                    name={item.label}
                    id={item.label}
                    placeholder={item.placeholder}
                    className={`text-sm ${className}`}
                    onChange={onChange}
                    required={item.required || true}
                    type={item.type}
                  />
                  {item.Icon ? (
                    <item.Icon
                      size={33}
                      className="absolute right-0 top-0 p-2 text-slate-500 hover:text-black cursor-pointer"
                    />
                  ) : null}
                </>
              ) : item.type === "date" ? (
                <DatePicker
                  placeholder={item.placeholder as string}
                  className={`w-full ${className}`}
                />
              ) : item.type === "select" ? (
                <div className="flex flex-col space-y-1.5" key={index}>
                  <SelectCompo
                    selectData={item}
                    defaultSelect={defaultSelect}
                    className={className}
                  />
                </div>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Inputs;
