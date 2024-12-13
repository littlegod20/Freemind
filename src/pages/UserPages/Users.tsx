import Header from "../../components/Header";
import Table from "../../components/Table";
import FilterParent from "../../components/widgets/FilterParent";
import {
  moreUserOptions,
  usersDetails,
  usersTitles,
} from "../../utils/constants";

const Users = () => {
  return (
    <main className="">
      <Header
        title="users"
        description="Manage all users you have invited to the platform."
      />
      <section className="pt-5 ">
        <FilterParent />
      </section>

      <section className="pt-10">
        <Table
          tableDetails={usersDetails}
          tableTitles={usersTitles}
          moreOptions={moreUserOptions}
          pagination={true}
        />
      </section>
    </main>
  );
};

export default Users;
