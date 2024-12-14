import Details from "@/components/Details";
import EditContainer from "@/components/EditContainer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { statics } from "@/utils/constants";
import { TableDetailsTypes } from "@/utils/types";
import { LogOut } from "lucide-react";
import { useEffect, useState } from "react";

const Profile_Settings = () => {
  const [userDetail, setUserDetail] = useState<TableDetailsTypes | null>(null);

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
          Button={<Button className="bg-green-active hover:bg-button-hover">Edit details</Button>}
        />
      </section>

      <section className="pt-5 space-y-4">
        <Details statics={statics} details={userDetail} slice1={0} slice2={3} />
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
    </main>
  );
};

export default Profile_Settings;
