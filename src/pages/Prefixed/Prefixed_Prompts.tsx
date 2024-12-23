import Header from "@/components/Header";
import Table from "@/components/Table";
import { Button } from "@/components/ui/button";
import FilterParent from "@/components/widgets/FilterParent";
import { prefixedPrompts } from "./constants";

const Prefixed_Prompts = () => {
  return (
    <main>
      <Header
        title="Prefixed Prompts"
        description="Configure prefixed prompt for specific user interactions."
        Button={
          <Button
            className="bg-green-active text-white px-4 py-2 rounded-md hover:bg-green-700"
            variant="default"
          >
            Add new prompt
          </Button>
        }
      />

      <section className="mt-8">
        <FilterParent
          filterOptions={[
            {
              label: "Prompts",
              placeholder: "Select prompt",
              options: ["prompt1", "prompt2", "prompt3"],
            },
            {
              label: "Status",
              placeholder: "Select status",
              options: ["Active", "Inactive"],
            },
          ]}
        />
      </section>

      <section className="mt-8">
        <Table
          tableTitles={["Prompt title", "Prompt", "Folder", "Access"]}
          tableDetails={prefixedPrompts}
          moreOptions={[
            { label: "Edit prompt", action: () => console.log("Option1") },
            { label: "Delete prompt", action: () => console.log("delete") },
          ]}
        />
      </section>
    </main>
  );
};

export default Prefixed_Prompts;
