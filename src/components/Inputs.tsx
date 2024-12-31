import { Label } from "@radix-ui/react-label";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { InputsTypes } from "@/utils/types";

const Inputs: React.FC<InputsTypes> = ({
  data,
  layout = "column",
  slice1,
  slice2,
  type = "text",
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
        {type === "text"
          ? data.slice(slice1, slice2).map((item, index) => (
              <div key={index}>
                <Label htmlFor={item.label} className="text-sm">
                  {item.label}
                </Label>
                <div className="relative mt-1">
                  <Input
                    id={item.label}
                    placeholder={item.placeholder}
                    className={`text-sm ${className}`}
                    onChange={onChange}
                  />
                  {item.Icon ? (
                    <item.Icon
                      size={33}
                      className="absolute right-0 top-0 p-2 text-slate-500 hover:text-black cursor-pointer"
                    />
                  ) : null}
                </div>
              </div>
            ))
          : null}

        {type === "select"
          ? data.slice(slice1, slice2).map((item, index) => (
              <div className="flex flex-col space-y-1.5" key={index}>
                <Label htmlFor={item.label} className="text-sm">
                  {item.label}
                </Label>
                <Select>
                  <SelectTrigger id={item.label} className={`${className}`}>
                    <SelectValue
                      placeholder={
                        defaultSelect
                          ? `Select`
                          : item.placeholder
                          ? item.placeholder
                          : item.options
                          ? item.options[0]
                          : ""
                      }
                      className="text-gray-500"
                    />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    {item.options?.map((item, index) => (
                      <SelectItem key={index} value={item.toLowerCase()}>
                        {item}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            ))
          : null}
      </div>
    </>
  );
};

export default Inputs;
