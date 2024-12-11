import UserFilter from "../components/UserFilter";

const Users = () => {
  return (
    <main className="flex-grow w-full">
      <header className=" border-slate-200 border-b-2 pb-8  w-full">
        <h4 className="text-dark-blue">Users</h4>
        <p className="font-light text-sm text-slate-500">
          Manage all users you have invited to the platform.
        </p>
      </header>
      <section className="pt-5 flex flex-col md:flex-row sm:justify-between">
        <UserFilter />
      </section>
    </main>
  );
};

export default Users;
