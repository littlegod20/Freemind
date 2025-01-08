import { LabelTypes } from "@/utils/types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { ClassNameValue } from "tailwind-merge";

const SelectCompo = ({
  selectData,
  className,
  defaultSelect = true
}: {
  selectData: LabelTypes;
  className: ClassNameValue;
  defaultSelect:boolean
}) => {
  return (
    <>
      <Select>
        <SelectTrigger id={selectData.label} className={`${className}`}>
          <SelectValue
            placeholder={
              defaultSelect
                ? `Select`
                : selectData.placeholder
                ? selectData.placeholder
                : selectData.options
                ? selectData.options[0]
                : ""
            }
            className="text-gray-500"
          />
        </SelectTrigger>
        <SelectContent position="popper">
          {selectData.options?.map((item, index) => (
            <SelectItem key={index} value={item.toLowerCase()}>
              {item}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  );
};

export default SelectCompo;
