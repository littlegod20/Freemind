import { Button } from "@/components/ui/button";
import Header from "../components/Header";
import Table from "../components/Table";
import FilterSearch from "../components/widgets/FilterSearch";
import {
  data,
  invitationTitles,
  invtationDetails,
  moreInviteOptions,
} from "../utils/constants";
import { useAction } from "@/hooks/useAction";
import ModalWithForm from "@/components/widgets/ModalWithForm";
import Inputs from "@/components/Inputs";

const staticInviteData = [
  {
    label: "Status",
    placeholder: "Choose status",
    options: ["Expired", "Pending"],
  },
  {
    label: "Role",
    placeholder: "Choose a role",
    options: ["General User", "Strategist", "Consultant"],
  },
];

const Invitations = () => {
  const { close, onClose, onSave } = useAction();

  return (
    <main className="w-full">
      <Header
        title="invitations"
        description="Invite a new user to access the platform"
        Button={
          <Button
            title="Invite user"
            className="bg-green-active text-white rounded-md border-none hover:bg-[#24b057] "
            onClick={onClose}
          >
            Invite user
          </Button>
        }
      />

      <section className="pt-5">
        <FilterSearch filterInfo={staticInviteData} />
      </section>

      <section className="pt-10">
        <Table
          tableTitles={invitationTitles}
          tableDetails={invtationDetails}
          moreOptions={moreInviteOptions}
        />
      </section>

      {close && (
        <ModalWithForm
          title="Invite user"
          description="An invitation will be sent to this email address with a link to create an account"
          buttonTitles={[
            { label: "Cancel", action: onClose },
            { label: "Save changes", action: onSave },
          ]}
        >
          <Inputs data={data} slice1={0} slice2={2} layout="row" />
          <Inputs data={data} slice1={2} slice2={3} />
          <Inputs
            data={data}
            slice1={3}
            slice2={5}
            type="select"
            defaultSelect={false}
          />
        </ModalWithForm>
      )}
    </main>
  );
};

export default Invitations;
