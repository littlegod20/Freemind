import React from "react";
const ContainerHeader = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <>
      <header className="flex flex-col sm:flex-row sm:justify-between sm:items-center px-2 py-2">
        <p className="w-full font-bold text-sm sm:text-base">{title}</p>

        <div>{children}</div>
      </header>
    </>
  );
};

export default ContainerHeader;
