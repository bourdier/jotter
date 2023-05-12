import { useState, useEffect } from "react";
import Markdown from "marked-react";
import Tools from "../components/Tools";

export default function Editor() {
  const [saveNote, setSaveNote] = useState("");
  const [previewContent, setPreviewContent] = useState("");
  const [preview, setPreview] = useState(false);
  let edition = true;

  useEffect(() => {
    let editor = document.getElementById("editor");
    editor.addEventListener("input", () => {
      setSaveNote(editor.value);
    });
  }, []);

  useEffect(() => {
    setPreviewContent(saveNote);
  }, [saveNote]);

  const previewMode = () => {
    if (preview === true) {
      setPreview(false);
    } else {
      setPreview(true);
    }
  };

  return (
    <div className="dashboard">
      <Tools editor={edition} note={saveNote}>
        <button className="no tools" onClick={() => previewMode()}>
          <i className="fa-solid fa-fw fa-eye"></i>Preview
        </button>
      </Tools>
      <div className="notes">
        <textarea id="editor"></textarea>
        {preview === true ? (
          <div className="notes__preview">
            <Markdown>{previewContent}</Markdown>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
