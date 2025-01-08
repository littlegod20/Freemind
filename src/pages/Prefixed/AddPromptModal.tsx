import Inputs from "@/components/Inputs";
import TextArea from "@/components/TextArea";
import ModalWithForm from "@/components/widgets/ModalWithForm";

const AddPromptModal = ({onClose}:{onClose:()=>void}) => {
  return (
    <ModalWithForm
      title="Add prompt"
      description="Tailor the prompt to capture specific details, ensuring the output algins with the unique objectives."
      buttonTitles={[{ label: "Cancel", action: onClose }, { label: "Save" }]}
      onCancel={onClose}
    >
      <Inputs
        data={[
          {
            label: "Prompt tile",
            placeholder: "Enter title of prompt",
            type:'text'
          },
        ]}
      />

      <TextArea
        data={[
          {
            label: "Prompt Prefix",
            placeholder:
              "Identify the most impactful contributions in your field and explain their relevance to ongoing research or industry advancements.",
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
            placeholder: "Select",
            options: ["General", "Strategist", "Consultant"],
            type:'select'
          },
        ]}
        type="select"
      />
    </ModalWithForm>
  );
}

export default AddPromptModal