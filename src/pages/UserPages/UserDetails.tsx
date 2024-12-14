import { useParams } from "react-router-dom";
import { TableDetailsTypes } from "../../utils/types";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Details from "../../components/Details";
import { statics } from "../../utils/constants";
import { CardWithForm } from "@/components/Card";
import { Button } from "@/components/ui/button";
import EditContainer from "../../components/EditContainer";

const UserDetails = () => {
  const { id } = useParams();
  const [userDetail, setUserDetail] = useState<TableDetailsTypes | null>(null);
  const [edit, setEdit] = useState(false);

  const handleEdit = () => {
    setEdit(!edit);
    console.log("edited");
  };

  useEffect(() => {
    if (id === "Alex Johnson") {
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
    }
  }, [id]);

  return (
    <main>
      <Header title="User Details" description="" back={true} />
      <section className="py-10">
        <EditContainer
          title={userDetail?.name as string}
          description={userDetail?.email}
          Button={
            <Button
              title="Edit user details"
              onClick={handleEdit}
              className="bg-green-active text-white border-0 shadow-inner hover:bg-green-700"
            >
              Edit user details
            </Button>
          }
          isUser={true}
        />
      </section>

      <section className="space-y-6">
        <Details statics={statics} details={userDetail} slice1={0} slice2={3} />
        <Details statics={statics} details={userDetail} slice1={3} />
        <EditContainer
          title="Delete User"
          description=" Deleting this user is permanent and cannot be undone"
          Button={
            <Button
              title="Delete User"
              className="text-red-600 font-light hover:text-white hover:border-red-600 text-sm bg-white transition-all duration-300 ease-in"
            >
              Delet User
            </Button>
          }
          border={true}
        />

        {edit ? <CardWithForm /> : null}
      </section>
    </main>
  );
};

export default UserDetails;
