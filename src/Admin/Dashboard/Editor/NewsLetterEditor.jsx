import { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
const NewsLetterEditor = () => {
  const editorRef = useRef(null);
  const [editorContent, setEditorContent] = useState(null);
  const [newsletterSubject, setNewsletterSubject] = useState("");

  const handleNewsLetterSubmit = () => {
    if (editorRef.current) {
      const content = editorRef.current.getContent();
      const textContent = editorRef.current.getContent({ format: "text" });
      console.log(content);
      console.log(textContent);
      setEditorContent(content);
    }
  };
  return (
    <>
      <div className="">
        <input
          type="text"
          className="w-full h-[2.6rem] px-5 mb-3 rounded-md shadow-md outline-none border-none"
          placeholder="Subject of the news Letter"
          value={newsletterSubject}
          onChange={(e) => setNewsletterSubject(e.target.value)}
        />
      </div>
      <Editor
        apiKey="q13ldz1r6sw0c67yxknw6v3hufbe5de4hi30a6e5s8xupke3"
        onInit={(_evt, editor) => (editorRef.current = editor)}
        initialValue="<p>The Entire body or Subject of the newsLeter goes in here.</p>."
        init={{
          height: 500,
          menubar: true,
          skin: "oxide-dark",
          // content_css: "dark",
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "code",
            "help",
            "wordcount",
          ],
          toolbar:
            "undo redo | blocks styles | code " +
            "bold italic forecolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />

      <button
        onClick={handleNewsLetterSubmit}
        className="btn bg-primary_main text-white my-4"
      >
        Log editor content
      </button>

      <div>
        <h2>Editor Content:</h2>
        <div dangerouslySetInnerHTML={{ __html: editorContent }} />
        {/* <h1>{editorContent}</h1> */}
      </div>
    </>
  );
};

export default NewsLetterEditor;
