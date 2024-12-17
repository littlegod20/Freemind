import { ClassNameValue } from "tailwind-merge";
import { Button } from "../ui/button";
import EditContainer from "./EditContainer";

interface CommonTabTypes {
  tabData: { label: string }[];
  tabName?: string;
  onClickTab: (() => void) | ((val: string) => void);
  editContainerTitle?: string;
  buttonName?: string;
  children: React.ReactNode;
  childrenClassName?: ClassNameValue;
}

const CommonTab: React.FC<CommonTabTypes> = ({
  tabData,
  tabName,
  onClickTab,
  editContainerTitle,
  buttonName,
  children,
  childrenClassName,
}) => {
  return (
    <>
      <div className="w-full pt-2 flex gap-4 justify-between border-b-[1px]">
        {tabData.map((item, index) => (
          <div
            className={`pb-1 border-b-4 text-gray-500 ${
              item.label === tabName
                ? `border-green-active text-green-active`
                : "border-none"
            } w-1/3 text-center cursor-pointer`}
            key={index}
            onClick={() => onClickTab(item.label)}
          >
            {item.label}
          </div>
        ))}
      </div>
      {tabData.map((item, index) => (
        <div key={index}>
          {item.label === tabName && (
            <>
              <div className="pt-4">
                {editContainerTitle && (
                  <EditContainer
                    title={editContainerTitle}
                    titleClassName="text-xl"
                    Button={
                      <Button className="font-light">{buttonName}</Button>
                    }
                  />
                )}
              </div>
              <section className={`p-2 ${childrenClassName}`}>
                {children}
              </section>
            </>
          )}
        </div>
      ))}
    </>
  );
};

export default CommonTab;
