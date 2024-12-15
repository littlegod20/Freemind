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

export function CardWithForm({
  title,
  description,
  children,
  buttonTitles,
  className,
  buttonLayout = "end",
}: CardWithFormTypes) {
  return (
    <Card className={`w-full ${className || ""}`}>
      {title ? (
        <CardHeader>
          <CardTitle className="font-bold">{title}</CardTitle>
          {description && (
            <CardDescription className="font-light text-xs">
              {description}
            </CardDescription>
          )}
        </CardHeader>
      ) : null}
      <CardContent className="w-full">
        <form className="w-full">
          <div className="w-full space-y-3 gap-4">{children}</div>
        </form>
      </CardContent>
      <CardFooter className={`flex justify-${buttonLayout} gap-4 items-center`}>
        {buttonTitles &&
          buttonTitles.map((item, index) => (
            <Button
              className={`
              bg-green-active text-white font-light
              ${
                index == 0
                  ? "text-green-active  bg-opacity-10 hover:bg-opacity-30 hover:text-green-active"
                  : "hover:bg-button-hover hover:text-white"
              }
                `}
              variant="ghost"
              key={index}
              onClick={() =>
                item.action ? item.action() : console.log("nothing")
              }
            >
              {" "}
              {item.label}{" "}
            </Button>
          ))}
      </CardFooter>
    </Card>
  );
}
