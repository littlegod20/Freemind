import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

const TextArea: React.FC<{
  data: { label: string; placeholder: string }[];
}> = ({ data }) => {
  return (
    <>
      {data.map((item, index) => (
        <div key={index}>
          <Label>{item.label}</Label>
          <Textarea className="text-xs" placeholder={item.placeholder} />
        </div>
      ))}
    </>
  );
};

export default TextArea;
