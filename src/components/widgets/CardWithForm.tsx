import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CardWithFormTypes } from "@/utils/types";
import { X } from "lucide-react";

const CardWithForm =({
  title,
  description,
  children,
  buttonTitles,
  className,
  buttonLayout = "end",
  onCancel,
  submitForm,
}: CardWithFormTypes) => {
  return (
    <Card className={`w-full sm:max-w-[450px] ${className || ""}`}>
      {title ? (
        <CardHeader>
          <CardTitle className="font-bold flex items-center justify-between">
            {title}{" "}
            {onCancel && (
              <span className="cursor-pointer" onClick={onCancel}>
                <X className="text-slate-500 hover:text-black transition-all duration-300 ease-in" />
              </span>
            )}
          </CardTitle>
          {description && (
            <CardDescription className="font-light text-xs">
              {description}
            </CardDescription>
          )}
        </CardHeader>
      ) : null}
      <CardContent className="w-full ">
        <form className="w-full h-full flex flex-col" onSubmit={submitForm}>
          <div className="w-full space-y-3 gap-4">{children}</div>
      <CardFooter className={`flex justify-${buttonLayout} gap-4 w-full items-center py-2 px-0`}>
        {buttonTitles &&
          buttonTitles.map((item, index) => (
            <Button
              className={`
              bg-green-active text-white font-light
              ${
                /delete|remove|leave/i.test(item.label)
                  ? "text-red-600 bg-red-200 bg-opacity-25 hover:text-red-600"
                  : /cancel/i.test(item.label)
                  ? "text-green-active  bg-opacity-10 hover:bg-opacity-30 hover:text-green-active"
                  : "hover:bg-button-hover hover:text-white"
              }
                `}
              variant="ghost"
              key={index}
              onClick={() =>
                item.action ? item.action() : null
              }
            >
              {" "}
              {item.label}{" "}
            </Button>
          ))}
      </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
}

export default CardWithForm