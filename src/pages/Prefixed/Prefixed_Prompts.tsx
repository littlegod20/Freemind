import Header from "@/components/Header";
import Table from "@/components/Table";
import { Button } from "@/components/ui/button";
import FilterParent from "@/components/widgets/FilterParent";
import { prefixedPrompts } from "./constants";
import { useAction } from "@/hooks/useAction";
import { useState } from "react";
import EditModal from "./EditModal";
import AddPromptModal from "./AddPromptModal";

const Prefixed_Prompts = () => {
  const { onClose, close } = useAction();
  const [edit, setEdit] = useState(false);

  const handleEdit = () => {
    setEdit(!edit);
  };
  return (
    <main>
      <Header
        title="Prefixed Prompts"
        description="Configure prefixed prompt for specific user interactions."
        Button={
          <Button
            className="bg-green-active text-white px-4 py-2 rounded-md hover:bg-green-700"
            variant="default"
            onClick={onClose}
          >
            Add new prompt
          </Button>
        }
      />

      <section className="mt-8">
        <FilterParent
          filterOptions={[
            {
              label: "Access",
              placeholder: "Choose role",
              options: ["Role 1", "Role 2", "Role 3"],
            },
          ]}
        />
      </section>

      <section className="mt-8">
        <Table
          tableTitles={["Prompt title", "Prompt", "Folder", "Access"]}
          tableDetails={prefixedPrompts}
          moreOptions={[
            { label: "Edit prompt", action: handleEdit },
            { label: "Delete prompt", action: () => console.log("delete") },
          ]}
        />

        {edit && <EditModal handleEdit={handleEdit} />}
      </section>

      {close && <AddPromptModal onClose={onClose} />}
    </main>
  );
};

export default Prefixed_Prompts;
