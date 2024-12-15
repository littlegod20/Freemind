import { CardWithFormTypes } from "@/utils/types";
import ModalContainer from "../ModalContainer";
import { CardWithForm } from "./CardWithForm";

const ModalWithForm = ({
  children,
  title,
  description,
  buttonTitles,
}: CardWithFormTypes) => {
  return (
    <ModalContainer>
      <CardWithForm
        title={title}
        description={description}
        buttonTitles={buttonTitles}
      >
        {children}
      </CardWithForm>
    </ModalContainer>
  );
};

export default ModalWithForm;
