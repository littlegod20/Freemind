import { ClassNameValue } from "tailwind-merge";
import { LabelTypes } from "@/utils/types";

interface CommonTabTypes {
  tabData: LabelTypes[];
  tabName?: string;
  onClickTab: (() => void) | ((val1: string, val2: number) => void);
  children?: React.ReactNode;
  childrenClassName?: ClassNameValue;
  tabTitleStyle?:string;
}

const CommonTab: React.FC<CommonTabTypes> = ({
  tabData,
  onClickTab,
  children,
  childrenClassName,
  tabTitleStyle
}) => {
  return (
    <>
      <div className={`w-full pt-2  px-2 flex gap-8 ${!tabTitleStyle ?'justify-between': ''} border-b-[1px]`}>
        {tabData.map((item, index) => (
          <div
            className={`pb-1 border-b-4 text-gray-500 flex ${
              item.active
                ? `border-green-active text-green-active`
                : "border-none"
            } ${!tabTitleStyle ? 'w-1/3 justify-center': ''} cursor-pointer text-sm`}
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
              <section className={`p-2 ${childrenClassName}`}>
                <div>{children}</div>
              </section>
            </>
          )}
        </div>
      ))}
    </>
  );
};

export default CommonTab;
