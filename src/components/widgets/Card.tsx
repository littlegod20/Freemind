import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const data = [
  {
    label: "First name",
    placeholder: "eg. John",
  },
  {
    label: "Last name",
    placeholder: "eg. Doe",
  },
  {
    label: "Email Address",
    placeholder: "eg. johndoe@gmail.com",
  },
  {
    label: "Limit calls / month",
    options: ["1000", "2000", "3000"],
  },
  {
    label: "Role",
    options: ["Consultant", "General user", "Stragegist"],
  },
];

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
