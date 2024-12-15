import { useAction } from "@/hooks/useAction";

const ModalContainer = ({ children }: { children: React.ReactNode }) => {
  const { onClose } = useAction();

  const handleOutClick = () => {
    onClose();
  };

  return (
    <section className="fixed inset-0 h-screen">
      <div
        className="fixed inset-0 flex bg-black bg-opacity-50 items-center justify-center"
        onClick={handleOutClick}
      >
        {children}
      </div>
    </section>
  );
};

export default ModalContainer;
