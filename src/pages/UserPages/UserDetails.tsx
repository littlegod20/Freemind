import { useParams } from "react-router-dom";
import { TableDetailsTypes } from "../../utils/types";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import AvatarDetail from "../../components/AvatarDetail";
import Details from "../../components/Details";
import { statics } from "../../utils/constants";
import Action from "../../components/Action";
import Button from "../../components/Button";

const UserDetails = () => {
  const { id } = useParams();
  const [userDetail, setUserDetail] = useState<TableDetailsTypes | null>(null);
  console.log("id:", id);

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
        <AvatarDetail name={userDetail?.name} email={userDetail?.email} />
      </section>
      <section className="space-y-6">
        <Details statics={statics} details={userDetail} slice1={0} slice2={3} />
        <Details statics={statics} details={userDetail} slice1={3} />
        <Action
          title="Delete users"
          description=" Deleting this user is permanent and cannot be undone"
          Button={
            <Button
              title="Delete"
              className="text-red-600 font-light hover:text-white hover:bg-red-600"
            />
          }
        />
      </section>
    </main>
  );
};

export default UserDetails;
