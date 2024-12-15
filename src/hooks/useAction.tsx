import { createContext, useContext, useState } from "react";

interface ActionContextTypes {
  onClose: () => void;
  onSave: () => void;
  close?: boolean;
  setClose?: React.Dispatch<React.SetStateAction<boolean>>;
}

const ActionContext = createContext<ActionContextTypes | null>(null);

const ActionProvider = ({ children }: { children: React.ReactNode }) => {
  const [close, setClose] = useState(false);

  const onClose = () => {
    setClose(!close);
  };

  const onSave = () => {
    console.log("saved");
  };
  return (
    <ActionContext.Provider value={{ onSave, close, setClose, onClose }}>
      {children}
    </ActionContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAction = () => {
  const context = useContext(ActionContext);
  if (!context) {
    throw new Error("useAction must be used within an ActionProvider");
  }
  return context;
};

export default ActionProvider;
