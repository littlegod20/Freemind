import Action from "@/components/Action";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";

const Profile_Settings = () => {
  return (
    <main>
      <Header
        title="Profile Settings"
        description="Manage your personal profile"
      />

      <Action
        title="Edit personal details"
        description='To change, click "edit details" and save when done'
        Button={<Button className="bg-green-active">
          Edit details
        </Button>}
      />
    </main>
  );
};

export default Profile_Settings;
