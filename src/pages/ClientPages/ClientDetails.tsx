import { TableDetailsTypes } from "@/utils/types";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ClientDetails = () => {
  const { id } = useParams();
  const [userDetail, setUserDetail] = useState<TableDetailsTypes | null>(null);

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
  return <div>{userDetail?.name}</div>;
};

export default ClientDetails;
