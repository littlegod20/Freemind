import Header from "@/components/Header";
import Inputs from "@/components/Inputs";
import { Label } from "@/components/ui/label";
import TextEditor from "@/components/widgets/Editor/TextEditor";

const Invite_Mail_Settings = () => {
  return (
    <main>
      <Header
        title="Invite Mail Settings"
        description="Customise how message is delivered to invited users"
      />
      <section className="space-y-8 pt-8">
        <Inputs
          data={[
            { label: "Subject", placeholder: "Subject of message goes here" },
          ]}
          className="py-6"
        />

        <div className="space-y-2 flex flex-col">
          <Label className="font-semibold ">Message</Label>
          <TextEditor />
        </div>
      </section>
    </main>
  );
};

export default Invite_Mail_Settings;
