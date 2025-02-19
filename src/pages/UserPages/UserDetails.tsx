import { useParams } from "react-router-dom";
import { TableDetailsTypes } from "../../utils/types";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Details from "../../components/Details";
import { data, userDetailStatics } from "../../utils/constants";
import { Button } from "@/components/ui/button";
import EditContainer from "../../components/widgets/EditContainer";
import Inputs from "@/components/Inputs";
import ModalWithForm from "@/components/widgets/ModalWithForm";
import { useAction } from "@/hooks/useAction";

const UserDetails = () => {
  const { id } = useParams();
  const [userDetail, setUserDetail] = useState<TableDetailsTypes | null>(null);
  const { close, setClose, onSave, onClose } = useAction();

  useEffect(() => {
    if (id === "Alex Johnson") {
      setUserDetail({
        id: "Alex Johnson",
        name: "Alex Johnson",
        email: "alex.johnson@emailprovider.com",
        role: "General user",
        joined: "2023/01/08",
        lastLogged: "2023/01/08",
        aiTokensUsed: "2048 tokens",
        aiTokensSessions: "60",
        palmTokensUsed: "2048 tokens",
        palmSessions: "1000",
      });
    }
  }, [id]);

  return (
    <main>
      <Header title="User Details" description="" back={true} />
      <section className="py-10">
        <EditContainer
          title={userDetail?.name ?? ""}
          description={userDetail?.email}
          Button={
            <Button
              title="Edit user details"
              onClick={() => (setClose ? setClose(!close) : null)}
              className="bg-green-active text-white border-0 shadow-inner hover:bg-button-hover"
            >
              Edit user details
            </Button>
          }
          isUser={true}
        />
      </section>

      <section className={`space-y-6`}>
        <Details
          statics={userDetailStatics}
          details={userDetail}
          slice1={0}
          slice2={3}
        />
        <Details statics={userDetailStatics} details={userDetail} slice1={3} />
        <EditContainer
          title="Delete User"
          description=" Deleting this user is permanent and cannot be undone"
          Button={
            <Button
              title="Delete User"
              variant={"ghost"}
              className="text-red-600 font-light hover:text-red-600 hover:bg-red-100 text-sm"
            >
              Delete User
            </Button>
          }
          border={true}
        />

        {close ? (
          <ModalWithForm
            title="Edit user details"
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
        ) : null}
      </section>
    </main>
  );
};

export default UserDetails;
