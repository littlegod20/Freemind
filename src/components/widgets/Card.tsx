import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";



interface CardWithFormTypes {
  title: string;
  description?: string;
  children: React.ReactNode;
  buttonTitles?: string[];
}

export function CardWithForm({
  title,
  description,
  children,
  buttonTitles = ["Cancel", "Save changes"],
}: CardWithFormTypes) {
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
      <CardFooter className="flex justify-between">
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
          >
            {" "}
            {item}{" "}
          </Button>
        ))}
      </CardFooter>
    </Card>
  );
}
