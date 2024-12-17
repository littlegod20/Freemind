import { hashCode, intoHSL } from "@/utils/helpers";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

interface Types {
  image?: string;
  title?: string;
}

const AvatarContainer: React.FC<Types> = ({ image, title }) => {
  return (
    <>
      <Avatar>
        <AvatarImage src={image} />
        <AvatarFallback
          style={{
            backgroundColor: intoHSL(hashCode(title as string)),
            color: `hsla(${hashCode(title as string)}, 100%, 20%)`,
          }}
          className="flex w-[52px] py-3 rounded-full items-center justify-center font-bold text-black text-xl"
        >
          {title?.split("")[0]}
        </AvatarFallback>
      </Avatar>
    </>
  );
};

export default AvatarContainer;
