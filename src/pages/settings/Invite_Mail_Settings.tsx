import Header from "@/components/Header";
import Inputs from "@/components/Inputs";
import { Label } from "@/components/ui/label";
import TextEditor from "@/components/widgets/Editor/TextEditor";
import { useMemo, useState } from "react";
import DOMPurify from "dompurify";
import { Button } from "@/components/ui/button";

const Invite_Mail_Settings = () => {
  console.count("parent of TextEditor");
  const [content, setContent] = useState("");
  const [subject, setSubject] = useState("");

  const handleContentChange = (text: string) => {
    setContent(text);
    console.log("content:", content);
  };

  const handleSubjectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubject(e.target.value);
    console.log("subject:", subject);
  };

  const sanitizedContent = useMemo(
    () => ({
      __html: DOMPurify.sanitize(content),
    }),
    [content]
  );

  const sanitizedSubject = useMemo(
    () => ({
      __html: DOMPurify.sanitize(subject),
    }),
    [subject]
  );

  return (
    <main>
      <Header
        title="Invite Mail Settings"
        description="Customise how message is delivered to invited users"
      />
      <div className="flex flex-col md:items-start md:flex-row md:gap-8">
        <section className="space-y-8 pt-8 md:w-1/2">
          <Inputs
            data={[
              { label: "Subject", placeholder: "Subject of message goes here" },
            ]}
            onChange={handleSubjectChange}
            className="py-6"
          />

          <div className="space-y-2 flex flex-col">
            <Label className="font-semibold ">Message</Label>
            <TextEditor onChange={handleContentChange} />
          </div>
        <section className="flex gap-4 p-2 w-full justify-end">
          <Button
            variant="ghost"
            className="bg-green-100 text-green-700 hover:text-green-700"
          >
            Cancel
          </Button>
          <Button>Save changes</Button>
        </section>
        </section>
        <section className="pt-8 md:w-1/2">
          <h2 className="font-semibold text-lg pb-2">Preview</h2>
          <div className="space-y-5">
            <header className="border rounded-md p-5">
              <h4 dangerouslySetInnerHTML={sanitizedSubject} />
            </header>
            <div
              className="border rounded-md p-5 invite-mail"
              dangerouslySetInnerHTML={sanitizedContent}
            />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Invite_Mail_Settings;
