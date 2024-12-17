import { Button } from "@/components/ui/button";
import Header from "../../components/Header";
import Table from "../../components/Table";
import FilterParent from "../../components/widgets/FilterParent";
import {
  clientTableHeaders,
  clientTableValues,
  data,
  moreClientOptions,
} from "../../utils/constants";
import { useAction } from "@/hooks/useAction";
import ModalWithForm from "@/components/widgets/ModalWithForm";
import Inputs from "@/components/Inputs";
import { PhoneInput } from "@/components/widgets/PhoneInput";
import { Label } from "@/components/ui/label";

const Clients = () => {
  const { onClose, close } = useAction();
  return (
    <main>
      <Header
        title="clients"
        description="Manage all clients you have invited to the platform"
        Button={<Button onClick={onClose}>New client</Button>}
      />

      <section className="pt-5">
        <FilterParent
          data={[
            {
              label: "Role",
              placeholder: "Choose a role",
              options: ["General User", "Strategist", "Consultant"],
            },
          ]}
        />
      </section>

      <section className="pt-10">
        <Table
          tableTitles={clientTableHeaders}
          tableDetails={clientTableValues}
          moreOptions={moreClientOptions}
        />
      </section>

      {close && (
        <ModalWithForm
          title="Create new client"
          description="An invitation will be sent to this email address with a link to access the client portal"
          buttonTitles={[
            { label: "Cancel", action: onClose },
            { label: "Send Invite" },
          ]}
          cancelButton={true}
        >
          <Inputs data={data} slice1={5} slice2={8} />

          <div className="flex justify-evenly items-center gap-2 pt-6">
            <div className="h-[1px] flex-grow border"></div>
            <p className="text-xs text-slate-500 text-center">
              Point of contact
            </p>
            <div className="h-[1px] flex-grow border"></div>
          </div>

          <Inputs data={data} slice1={0} slice2={2} layout="row" />

          <div className="space-y-1">
            <Label>Phone number</Label>
            <PhoneInput defaultCountry="GH" placeholder="Enter phone number" />
          </div>

          <Inputs
            data={[{ label: "Email", placeholder: "Enter email address" }]}
          />
        </ModalWithForm>
      )}
    </main>
  );
};

export default Clients;
