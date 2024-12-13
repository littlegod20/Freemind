import { useParams } from "react-router-dom";
import { TableDetailsTypes } from "../../utils/types";
import { useState } from "react";
import Header from "../../components/Header";

const UserDetails = () => {
  const { id } = useParams();
  const [userDetail, setUserDetail] = useState<TableDetailsTypes[]>([]);
  console.log("id:", id);

  return (
    <main>
      <Header title="User Details" description="" back={true} />
      <section>
        <div>user</div>
      </section>
    </main>
  );
};

export default UserDetails;
