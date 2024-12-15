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
    <Card className={`sm:w-[450px] ${className || ""}`}>
      {title ? (
        <CardHeader>
          <CardTitle className="pb-4 font-bold">{title}</CardTitle>
          <CardDescription className="font-light text-xs">
            {description}
          </CardDescription>
        </CardHeader>
      ) : null}
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">{children}</div>
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
