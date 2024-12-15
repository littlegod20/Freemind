const ModalContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="fixed inset-0 h-screen">
      <div className="fixed inset-0 flex bg-black bg-opacity-50 items-center justify-center">
        {children}
      </div>
    </section>
  );
};

export default ModalContainer;
