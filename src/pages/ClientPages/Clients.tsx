import { Button } from "@/components/ui/button";
import Header from "../../components/Header";
import Table from "../../components/Table";
import FilterParent from "../../components/widgets/FilterParent";
import { data } from "../../utils/constants";
import {
  clientTableHeaders,
  moreClientOptions,
} from "./clientData";
import { useAction } from "@/hooks/useAction";
import ModalWithForm from "@/components/widgets/ModalWithForm";
import ClientEditInputs from "./components/ClientEditInputs";
import { useEffect, useState } from "react";
import { TableDetailsTypes } from "@/utils/types";
import {v4 as uuid} from 'uuid';

const Clients = () => {
  const { onClose, close } = useAction();

  const initialClient: TableDetailsTypes = {
    id: uuid(),
    companyName: "",
    createdBy: "Alex Johnson",
    role: "General user",
    firstLogged: "2023/01/08",
    lastLogged: "2023/01/08",
    numberOfProjects: "4",
    contractExpiryDate: "2023/01/08",
  };

  const [clientArray, setClientArray] = useState<TableDetailsTypes[] | []>(
    []
  );

  const [singleClient, setSingleClient] = useState<TableDetailsTypes | null>(
    initialClient
  );

  const handleSubmitClient = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (singleClient) {
      setClientArray((prev) =>
        prev ? [...prev, singleClient] : [singleClient]
      );
      localStorage.setItem("clients", JSON.stringify(clientArray));
      setSingleClient(initialClient);
    }
    console.log("Client submitted");
  };

  const clientArrayFetched = localStorage.getItem("clients");

  useEffect(() => {
    console.log("Client Details:", singleClient);
    console.log("Parent Details:", clientArray);
  }, [clientArray, singleClient]);

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
          tableDetails={clientArrayFetched ? JSON.parse(clientArrayFetched) : clientArray}
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
          <ClientEditInputs
            data={data}
            setSingleClient={setSingleClient}
          />
        </ModalWithForm>
      )}
    </main>
  );
};

export default Clients;
