import { CardWithFormTypes } from "@/utils/types";
import ModalContainer from "../ModalContainer";
import { CardWithForm } from "./CardWithForm";

const ModalWithForm = ({
  children,
  title,
  description,
  buttonTitles,
  outClick,
  buttonLayout,
  cancelButton
}: CardWithFormTypes) => {
  return (
    <ModalContainer outClick={outClick}>
      <CardWithForm
        title={title}
        description={description}
        buttonTitles={buttonTitles}
        buttonLayout={buttonLayout}
        cancelButton={cancelButton}
      >
        {children}
      </CardWithForm>
    </ModalContainer>
  );
};

export default ModalWithForm;
