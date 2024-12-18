import { useCallback, useEffect, useMemo } from "react";
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
import { debounce } from "lodash";
import DOMPurify from "dompurify";
import { purifyConfig } from "./constants";

const TextEditor = ({ onChange }: { onChange: (value: string) => void }) => {
  // memoizing extensions
  const extensions = useMemo(
    () => [
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
    []
  );

  // debouncing onUpdate function
  const debouncedOnChange = useMemo(
    () =>
      debounce((content: string) => {
        onChange(content);
      }, 300),
    [onChange]
  );

  const sanitizeHtml = useCallback((dirtyHtml: string) => {
    try {
      const clean = DOMPurify.sanitize(dirtyHtml, purifyConfig);
      return clean;
    } catch (error) {
      console.log("Sanitization error:", error);
      return "";
    }
  }, []);

  const editor = useEditor({
    extensions: extensions,
    // content: sanitizeHtml(value),
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      
      debouncedOnChange(sanitizeHtml(html))

    },
    editorProps: useMemo(
      () => ({
        attributes: {
          class:
            "prose prose-sm sm:prose lg:prose-lg focus:outline-none min-h-[200px] p-4 bg-white border border-gray-300 rounded-b ",
        },
      }),
      []
    ),
  });

  useEffect(() => {
    return () => {
      editor?.destroy();
    };
  }, [editor]);

  console.count("editor render");

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
