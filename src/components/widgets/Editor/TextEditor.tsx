import React from "react";
import {
  useEditor,
  EditorContent,
  // FloatingMenu,
  // BubbleMenu,
} from "@tiptap/react";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import StarterKit from "@tiptap/starter-kit";
import MenuBar from "./MenuBar";

const TextEditor: React.FC = () => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2] as const,
        },
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Underline,
      Link.configure({
        openOnClick: false,
        shouldAutoLink: (href) => /^https?:\/\//.test(href),
      }),
    ],
    // content: "<p>Start typing your content here...</p>",

    editorProps: {
      attributes: {
        class:
          "prose prose-sm sm:prose lg:prose-lg focus:outline-none min-h-[200px] p-4 bg-white border border-gray-300 rounded-b ",
      },
    },
  });


  return (
    <>
      <div className="max-w-4xl my-6 border rounded shadow-lg">
        <MenuBar editor={editor} />

        {/* Editor Content */}
        <EditorContent editor={editor} />

        {/*
      {editor && (
        <FloatingMenu editor={editor} className="floating-menu">
        <div className="bg-white border rounded shadow p-2">
        Quick formatting options can go here
        </div>
        </FloatingMenu>
        )} */}

        {/* {editor && (
        <BubbleMenu editor={editor} className="bubble-menu">
        <div className="bg-white border rounded shadow p-2">
        Text-specific options
        </div>
        </BubbleMenu>
        )} */}
      </div>
    </>
  );
};

export default TextEditor;
