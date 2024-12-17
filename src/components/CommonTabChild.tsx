const CommonTabChild = ({
  children,
  tabNumber,
  childIndex
}: {
  children?: React.ReactNode;
  tabNumber: number;
  childIndex: number
}) => {
  return <>{tabNumber === childIndex && <section>{children}</section>}</>;
};

export default CommonTabChild;
