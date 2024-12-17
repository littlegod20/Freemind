import { ClassNameValue } from "tailwind-merge";
import { Button } from "../ui/button";
import EditContainer from "./EditContainer";
import { LabelTypes } from "@/utils/types";

interface CommonTabTypes {
  tabData: LabelTypes[];
  tabName?: string;
  onClickTab: (() => void) | ((val1: string, val2: number) => void);
  children?: React.ReactNode;
  childrenClassName?: ClassNameValue;
}

const CommonTab: React.FC<CommonTabTypes> = ({
  tabData,
  onClickTab,
  children,
  childrenClassName,
}) => {
  return (
    <>
      <div className="w-full pt-2 flex gap-4 justify-between border-b-[1px]">
        {tabData.map((item, index) => (
          <div
            className={`pb-1 border-b-4 text-gray-500 ${
              item.active
                ? `border-green-active text-green-active`
                : "border-none"
            } w-1/3 text-center cursor-pointer`}
            key={index}
            onClick={() =>
              item.label
                ? onClickTab(item.label, index)
                : console.log("nothing")
            }
          >
            {item.label}
          </div>
        ))}
      </div>
      {tabData.map((item, index) => (
        <div key={index}>
          {item.active && (
            <>
              <div className="pt-4">
                {item.title && (
                  <EditContainer
                    title={item.title}
                    titleClassName="text-xl"
                    Button={
                      <Button className="font-light">{item.buttonName}</Button>
                    }
                  />
                )}
              </div>
              <section className={`p-2 ${childrenClassName}`}>
                {item.active && <div>{children}</div>}
              </section>
            </>
          )}
        </div>
      ))}
    </>
  );
};

export default CommonTab;
