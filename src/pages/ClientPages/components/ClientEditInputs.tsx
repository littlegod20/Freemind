import Inputs from "@/components/Inputs";
import { PhoneInput } from "@/components/widgets/PhoneInput";
import { LabelTypes } from "@/utils/types";
import { Label } from "@radix-ui/react-label";
import { useEffect, useState } from "react";

interface Props {
  [key: string]: string;
}

const ClientEditInputs = ({
  data,
  uplift,
}: {
  data: LabelTypes[];
  uplift: (obj: Props) => void;
}) => {
  const [details, setDetails] = useState<Props>();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDetails((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    uplift(details as Props);
    console.log("Details:", details);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [details]);

  return (
    <>
      <Inputs data={data} slice1={5} slice2={8} onChange={handleInputChange} />

      <div className="flex justify-evenly items-center gap-2 pt-6">
        <div className="h-[1px] flex-grow border"></div>
        <p className="text-xs text-slate-500 text-center">Point of contact</p>
        <div className="h-[1px] flex-grow border"></div>
      </div>

      <Inputs
        data={data}
        slice1={0}
        slice2={2}
        layout="row"
        onChange={handleInputChange}
      />

      <div className="space-y-1">
        <Label>Phone number</Label>
        <PhoneInput
          defaultCountry="GH"
          placeholder="Enter phone number"
          // onChange={handleInputChange}
        />
      </div>

      <Inputs
        data={[{ label: "Email", placeholder: "Enter email address" }]}
        onChange={handleInputChange}
      />
    </>
  );
};

export default ClientEditInputs;
