import Inputs from "@/components/Inputs";
import { PhoneInput } from "@/components/widgets/PhoneInput";
import { LabelTypes } from "@/utils/types";
import { Label } from "@radix-ui/react-label";

const ClientEditInputs = ({data}:{data:LabelTypes[]}) => {
  return (
    <>
      <Inputs data={data} slice1={5} slice2={8} />

      <div className="flex justify-evenly items-center gap-2 pt-6">
        <div className="h-[1px] flex-grow border"></div>
        <p className="text-xs text-slate-500 text-center">Point of contact</p>
        <div className="h-[1px] flex-grow border"></div>
      </div>

      <Inputs data={data} slice1={0} slice2={2} layout="row" />

      <div className="space-y-1">
        <Label>Phone number</Label>
        <PhoneInput defaultCountry="GH" placeholder="Enter phone number" />
      </div>

      <Inputs data={[{ label: "Email", placeholder: "Enter email address" }]} />
    </>
  );
}

export default ClientEditInputs