import Header from "../components/Header";
import FilterSearch from "../components/widgets/FilterSearch";

const Invitations = () => {
  return (
    <main className="w-full">
      <Header
        title="invitations"
        description="Invite a new user to access the platform"
      />

      <section className="pt-5">
        <FilterSearch />
      </section>
    </main>
  );
};

export default Invitations;
