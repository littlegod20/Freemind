import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useAction } from "@/hooks/useAction";
import { CardWithFormTypes } from "@/utils/types";

export function CardWithForm({
  title,
  description,
  children,
  buttonTitles = ["Cancel", "Save changes"],
}: CardWithFormTypes) {
  const { onClose, onSave } = useAction();

  return (
    <Card className="sm:w-[450px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">{children}</div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-end gap-4 items-center">
        {buttonTitles.map((item, index) => (
          <Button
            className={`
              bg-green-active text-white font-light
              ${
                item === "Cancel"
                  ? "text-green-active  bg-opacity-10 hover:bg-opacity-30 hover:text-green-active"
                  : "hover:bg-button-hover hover:text-white"
              }
                `}
            variant="ghost"
            key={index}
            onClick={item === "Cancel" ? onClose : onSave}
          >
            {" "}
            {item}{" "}
          </Button>
        ))}
      </CardFooter>
    </Card>
  );
}
