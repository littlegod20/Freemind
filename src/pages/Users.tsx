import Header from "../components/Header";
import Table from "../components/Table";
import Pagination from "../components/widgets/Pagination";
import FilterParent from "../components/widgets/FilterParent";
import { usersDetails, usersTitles } from "../utils/constants";

const more = [
  {
    label: "Edit user",
  },
  {
    label: "Remove access",
  },
];

const Users = () => {
  return (
    <main className="w-full">
      <Header
        title="users"
        description="Manage all users you have invited to the platform."
      />
      <section className="pt-5 ">
        <FilterParent />
      </section>

      <section className="pt-10 flex-1">
        <div className="border rounded-lg ">
          <Table
            tableDetails={usersDetails}
            tableTitles={usersTitles}
            moreOptions={more}
          />
          <Pagination />
        </div>
      </section>
    </main>
  );
};

export default Users;
