import ModalContainer from "../ModalContainer";
import { CardWithForm } from "./CardWithForm";

const ModalWithForm = ({
  children,
  title,
  description,
}: {
  children: React.ReactNode;
  title: string;
  description?: string;
}) => {
  return (
    <ModalContainer>
      <CardWithForm title={title} description={description}>
        {children}
      </CardWithForm>
    </ModalContainer>
  );
};

export default ModalWithForm;
