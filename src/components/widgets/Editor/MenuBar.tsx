import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  Bold,
  Heading,
  Italic,
  Link,
  List,
  Quote,
  Underline,
} from "lucide-react";
import { Editor } from "@tiptap/core";
import { Level } from "@tiptap/extension-heading";
import { memo, useCallback, useState } from "react";

const MenuBar: React.FC<{ editor: Editor | null }> = memo(({ editor }) => {

  console.count('menubar')

  const [currentHeadingLevel, setCurrentHeadingLevel] = useState<Level>(1)

  const setLink = useCallback(() => {
    if (!editor) return null;
    const previousUrl = editor.getAttributes("link").href;
    const url = window.prompt("Enter the URL", previousUrl);

    if (url === null) {
      return;
    }

    // empty
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }

    // update link
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  }, [editor]);

  if (!editor) return null;

  return (
    <div className="flex flex-wrap items-center gap-2 p-2 border-b border-gray-200 bg-gray-50 w-full justify-evenly">
      <Bold
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`
           rounded-full p-2 cursor-pointer hover:bg-gray-100
          ${editor.isActive("bold") ? "bg-gray-300 bg-opacity-30 " : ""}
        `}
        size={35}
      />

      {/* Italic Button */}
      <Italic
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={` rounded-full p-2  cursor-pointer hover:bg-gray-100 
          ${editor.isActive("italic") ? "bg-gray-300 bg-opacity-30 " : ""}
        `}
        size={35}
      />

      <Underline
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={` rounded-full p-2  cursor-pointer hover:bg-gray-100 
          ${editor.isActive("underline") ? "bg-gray-300 bg-opacity-30" : ""}
        `}
        size={35}
      />

      {/* Heading Levels */}
        <Heading
          onClick={() =>
          {
            const nextLevel:Level = currentHeadingLevel === 1 ? 2: 1;
            setCurrentHeadingLevel(nextLevel)
            editor.chain().focus().toggleHeading({ level:nextLevel }).run();
          }
          }
          className={` rounded-full p-2  cursor-pointer hover:bg-gray-100 
            ${
              editor.isActive("heading", { currentHeadingLevel})
                ? "bg-gray-300 bg-opacity-30"
                : ""
            }
          `}
          size={35}
        />

      {/* Link */}
      <Link
        onClick={setLink}
        className={` rounded-full p-2  cursor-pointer hover:bg-gray-100 
          ${editor.isActive("link") ? "bg-gray-500 text-white" : ""}
        `}
        size={35}
      />

      {/* Blockquote */}
      <Quote
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={` rounded-full p-2  cursor-pointer hover:bg-gray-100 
          ${editor.isActive("blockquote") ? "bg-gray-300 bg-opacity-30 " : ""}
        `}
        size={35}
      />

      {/* Bullet List */}
      <List
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`rounded-full p-2  cursor-pointer hover:bg-gray-100  
          ${editor.isActive("bulletList") ? "bg-gray-300 bg-opacity-30 " : ""}
        `}
        size={35}
      />
      <AlignLeft
        onClick={() => editor.chain().focus().setTextAlign("left").run()}
        className={`rounded-full p-2  cursor-pointer hover:bg-gray-100  
          ${
            editor.isActive({ textAlign: "left" })
              ? "bg-gray-300 bg-opacity-30"
              : ""
          }
        `}
        size={35}
      />
      <AlignCenter
        onClick={() => editor.chain().focus().setTextAlign("center").run()}
        className={`rounded-full p-2  cursor-pointer hover:bg-gray-100  
          ${
            editor.isActive({ textAlign: "center" })
              ? "bg-gray-300 bg-opacity-30"
              : ""
          }
        `}
        size={35}
      />
      <AlignRight
        onClick={() => editor.chain().focus().setTextAlign("right").run()}
        className={`rounded-full p-2  cursor-pointer hover:bg-gray-100  
          ${
            editor.isActive({ textAlign: "right" })
              ? "bg-gray-300 bg-opacity-30"
              : ""
          }
        `}
        size={35}
      />
      <AlignJustify
        onClick={() => editor.chain().focus().setTextAlign("justify").run()}
        className={`rounded-full p-2  cursor-pointer hover:bg-gray-100  
          ${
            editor.isActive({ textAlign: "justify" })
              ? "bg-gray-300 bg-opacity-30"
              : ""
          }
        `}
        size={35}
      />
    </div>
  );
});

export default MenuBar;
