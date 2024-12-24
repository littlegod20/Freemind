import Inputs from "@/components/Inputs";
import TextArea from "@/components/TextArea";
import ModalWithForm from "@/components/widgets/ModalWithForm";


const EditModal = ({handleEdit}:{handleEdit:()=>void}) => {
  return (
    <ModalWithForm
      title="Edit prompt"
      buttonTitles={[
        { label: "Cancel", action: handleEdit },
        { label: "Save" },
      ]}
      onCancel={handleEdit}
    >
      <Inputs
        data={[
          {
            label: "Prompt tile",
            placeholder: "Enter Prompt title",
          },
        ]}
      />

      <TextArea
        data={[
          {
            label: "Prompt Prefix",
            placeholder: "Enter prompt prefix",
          },
          {
            label: "Prompt",
            placeholder: "Enter prompt",
          },
        ]}
      />

      <Inputs
        data={[
          {
            label: "Access",
            options: ["General", "Strategist", "Consultant"],
          },
          {
            label: "Nest Under Folder(optional)",
            options: ["General", "Strategist", "Consultant"],
          },
        ]}
        type="select"
      />
    </ModalWithForm>
  );
}

export default EditModal