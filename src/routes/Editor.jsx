import { useState, useEffect } from "react";
import Markdown from "marked-react";
import Tools from "../components/Tools";

export default function Editor() {
  const [saveNote, setSaveNote] = useState("");
  const [previewContent, setPreviewContent] = useState("");
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

  return (
    <div className="dashboard">
      <Tools editor={edition} note={saveNote} />
        <div className="notes">
          <textarea id="editor"></textarea>
          <div className="notes__preview">
            <Markdown>{previewContent}</Markdown>
          </div>
      </div>
    </div>
  );
}
