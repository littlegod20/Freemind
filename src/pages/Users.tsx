import UserFilters from "../components/widgets/UserFilters";


const Users = () => {
  return (
    <main className="flex-grow w-full">
      <header className=" border-slate-200 border-b-2 pb-8  w-full">
        <h4 className="text-dark-blue">Users</h4>
        <p className="font-light text-sm text-slate-500">
          Manage all users you have invited to the platform.
        </p>
      </header>
      <section>
        <UserFilters/>
      </section>
    </main>
  );
};

export default Users;
