import Details from "@/components/Details";
import EditContainer from "@/components/widgets/EditContainer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { userDetailStatics } from "@/utils/constants";
import { TableDetailsTypes } from "@/utils/types";
import { LogOut } from "lucide-react";
import { useEffect, useState } from "react";
import ModalWithForm from "@/components/widgets/ModalWithForm";
import Inputs from "@/components/Inputs";
import { useAction } from "@/hooks/useAction";

const Profile_Settings = () => {
  const [userDetail, setUserDetail] = useState<TableDetailsTypes | null>(null);
  const { close, onClose } = useAction();

  useEffect(() => {
    setUserDetail({
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
  }, []);

  return (
    <main>
      <Header
        title="Profile Settings"
        description="Manage your personal profile"
      />

      <section className="pt-10">
        <EditContainer
          title="Edit personal details"
          description='To change, click "edit details" and save when done'
          Button={
            <Button
              className="bg-green-active hover:bg-button-hover"
              onClick={onClose}
            >
              Edit details
            </Button>
          }
        />
      </section>

      <section className="pt-5 space-y-4">
        <Details statics={userDetailStatics} details={userDetail} slice1={0} slice2={3} />
        <EditContainer
          title="Log out"
          Button={
            <Button className="bg-white text-red-600 p-5 font-light hover:bg-slate-100 shadow-none">
              <LogOut /> Logout
            </Button>
          }
          border
        />
      </section>
      {close && (
        <ModalWithForm
          title="Edit details"
          buttonLayout="end"
          cancelButton={true}
          buttonTitles={[
            { label: "Cancel", action: onClose },
            { label: "Save changes" },
          ]}
        >
          <Inputs
            data={[
              { label: "First name", placeholder: "Alex" },
              { label: "Last name", placeholder: "Johnson" },
            ]}
            layout="row"
          />
        </ModalWithForm>
      )}
    </main>
  );
};

export default Profile_Settings;
