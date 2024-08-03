import { useEffect, useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const EditNewsLetterEditor = () => {
  const editorRef = useRef(null);
  const [editorContent, setEditorContent] = useState(null);
  const [newsletterSubject, setNewsletterSubject] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;

  // Base URL for the API
  const BASE_URL = import.meta.env.VITE_REACT_BASE_URL;

  useEffect(() => {
    if (state) {
      setNewsletterSubject(state.subject);
      setEditorContent(state.content);
    }
  }, [state]);

  const handleNewsLetterSubmit = async (e) => {
    e.preventDefault();

    if (newsletterSubject !== "" && editorContent !== "") {
      console.log(newsletterSubject);
      console.log(editorContent);

      try {
        const response = await axios.patch(
          `${BASE_URL}/newsletter/newsletter/${state.id}/`,
          {
            subject: newsletterSubject,
            content: editorContent,
          }
        );
        console.log("Response", response);

        // Reset the editor and subject
        // editorRef.current.setContent("");
        setNewsletterSubject("");

        // Navigate to the all newsletter page
        navigate("/admin/all-newsletter");
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Please fill the required fields");
    }
  };

  // Editor API KEY
  const API_KEY = import.meta.env.VITE_REACT_EDITOR_API_KEY;

  return (
    <>
      <form className="" onSubmit={handleNewsLetterSubmit}>
        <input
          type="text"
          className="w-full h-[2.6rem] px-5 mb-3 rounded-md shadow-md outline-none border-none"
          placeholder="Subject of the news Letter"
          value={newsletterSubject}
          onChange={(e) => setNewsletterSubject(e.target.value)}
        />
        <Editor
          apiKey={API_KEY}
          onInit={(_evt, editor) => (editorRef.current = editor)}
          initialValue={editorContent}
          value={editorContent} // Set the current value of the editor
          onEditorChange={(editorContent) => {
            setEditorContent(editorContent);
            console.log(editorContent);
          }} // Update the state on content change
          init={{
            height: 500,
            selector: "textarea", // change this value according to your HTML
            browser_spellcheck: true,
            directionality: "ltr", // Ensure LTR direction
            menubar: true,
            skin: "oxide-dark",
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

        <button type="submit" className="btn bg-primary_main text-white my-4">
          Update
        </button>
      </form>
    </>
  );
};

export default EditNewsLetterEditor;

// ==============================================================================================

// import { useEffect, useRef, useState } from "react";
// import { Editor } from "@tinymce/tinymce-react";
// import axios from "axios";
// import { useLocation, useNavigate } from "react-router-dom";
// const EditNewsLetterEditor = () => {
//   const editorRef = useRef(null);
//   const [editorContent, setEditorContent] = useState(null);
//   const [newsletterSubject, setNewsletterSubject] = useState("");

//   const navigate = useNavigate();

//   // USe Location Hook
//   const location = useLocation();
//   const { state } = location;
//   console.log(state);

//   // Base URL for the API
//   const BASE_URL = import.meta.env.VITE_REACT_BASE_URL;

//   useEffect(() => {
//     if (state) {
//       setNewsletterSubject(state.subject);
//       setEditorContent(state.content);
//     }
//   }, [state]);

//   const handleNewsLetterSubmit = async (e) => {
//     e.preventDefault();

//     if (newsletterSubject !== "" || editorContent !== "") {
//       console.log(newsletterSubject);
//       // TODO : send the newsletter
//       try {
//         if (editorRef.current) {
//           const content = editorRef.current.getContent();
//           const textContent = editorRef.current.getContent({ format: "text" });
//           console.log(content);
//           console.log(textContent);
//           setEditorContent(content);
//         } else {
//           console.log("Editor not initialized");
//         }

//         const response = await axios.patch(
//           `${BASE_URL}/newsletter/newsletter/${state.id}/`,
//           {
//             subject: newsletterSubject,
//             content: editorContent,
//           }
//         );
//         console.log("Response", response);

//         // Reset the editor and subject
//         editorRef.current.setContent("");
//         setNewsletterSubject("");

//         // Navigate to the all news letter page
//         navigate("/admin/all-newsletter");
//       } catch (error) {
//         console.log(error);
//       }
//     } else {
//       alert("Please fill the required fields");
//     }
//   };

//   // Editor API KEY
//   const API_KEY = import.meta.env.VITE_REACT_EDITOR_API_KEY;

//   return (
//     <>
//       <form className="" onSubmit={handleNewsLetterSubmit}>
//         <input
//           type="text"
//           className="w-full h-[2.6rem] px-5 mb-3 rounded-md shadow-md outline-none border-none"
//           placeholder="Subject of the news Letter"
//           value={newsletterSubject}
//           onChange={(e) => setNewsletterSubject(e.target.value)}
//         />
//         <Editor
//           apiKey={API_KEY}
//           onInit={(_evt, editor) => (editorRef.current = editor)}
//           initialValue={editorContent}
//           value={editorContent}
//           onEditorChange={(content) => setEditorContent(content)}
//           init={{
//             height: 500,
//             menubar: true,
//             // skin: "oxide-dark",
//             // content_css: "dark",
//             plugins: [
//               "advlist",
//               "autolink",
//               "lists",
//               "link",
//               "image",
//               "charmap",
//               "preview",
//               "anchor",
//               "searchreplace",
//               "visualblocks",
//               "code",
//               "fullscreen",
//               "insertdatetime",
//               "media",
//               "table",
//               "code",
//               "help",
//               "wordcount",
//             ],
//             toolbar:
//               "undo redo | blocks styles | code " +
//               "bold italic forecolor | alignleft aligncenter " +
//               "alignright alignjustify | bullist numlist outdent indent | " +
//               "removeformat | help",
//             content_style:
//               "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
//           }}
//         />

//         <button type="submit" className="btn bg-primary_main text-white my-4">
//           Update
//         </button>
//       </form>

//       {/* <div>
//         <h2>Editor Content:</h2>
//         <div dangerouslySetInnerHTML={{ __html: editorContent }} />
//         <h1>{editorContent}</h1>
//       </div> */}
//     </>
//   );
// };

// export default EditNewsLetterEditor;
