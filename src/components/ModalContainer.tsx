import { useAction } from "@/hooks/useAction";

const ModalContainer = ({
  children,
  outClick = false,
}: {
  children: React.ReactNode;
  outClick?: boolean;
}) => {
  const { onClose } = useAction();

  const handleOutClick = () => {
    if (outClick) {
      onClose();
    }
    return;
  };

  return (
    <section className="fixed inset-0 h-screen" onClick={handleOutClick}>
      <div className="fixed inset-0 flex bg-black bg-opacity-50 items-center justify-center z-50">
        {children}
      </div>
    </section>
  );
};

export default ModalContainer;
