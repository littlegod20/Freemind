import { Button } from "@/components/ui/button";
import Header from "../../components/Header";
import Table from "../../components/Table";
import FilterParent from "../../components/widgets/FilterParent";
import { data } from "../../utils/constants";
import { clientTableHeaders, moreClientOptions } from "./clientData";
import { useAction } from "@/hooks/useAction";
import ModalWithForm from "@/components/widgets/ModalWithForm";
import ClientEditInputs from "./components/ClientEditInputs";
import { useEffect, useState } from "react";
import { TableDetailsTypes } from "@/utils/types";
import { v4 as uuid } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { postClientInvite } from "@/store/slices/clientSlice";

const Clients = () => {
  const { onClose, close } = useAction();
  const dispatch = useDispatch<AppDispatch>();
  const { status, error, clients } = useSelector(
    (state: RootState) => state.client
  );

  const initialClient: TableDetailsTypes = {
    id: uuid(),
    companyName: "",
    createdBy: "Alex Johnson",
    role: "General user",
    firstLogged: "2023/01/08",
    lastLogged: "2023/01/08",
    numberOfProjects: "4",
    contractExpiryDate: "",
  };


  const [singleClient, setSingleClient] = useState<TableDetailsTypes | null>(
    initialClient
  );

  const handleSubmitClient = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (singleClient) {
      // adding a new client invite
      dispatch(postClientInvite(singleClient));

      setSingleClient(initialClient);
    }
    console.log("Client submitted");
  };

  useEffect(() => {
    console.log("Client Details:", singleClient);
    console.log("Parent Details:", clients);
    console.log("status:", status);
    console.log("error:", error);
  }, [clients, singleClient, status, error]);

  return (
    <main>
      <Header
        title="clients"
        description="Manage all clients you have invited to the platform"
        Button={<Button onClick={onClose}>New client</Button>}
      />

      <section className="pt-5">
        <FilterParent
          filterOptions={[
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
          tableDetails={clients}
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
          onCancel={onClose}
          submitForm={handleSubmitClient}
        >
          <ClientEditInputs data={data} setSingleClient={setSingleClient} />
        </ModalWithForm>
      )}
    </main>
  );
};

export default Clients;
