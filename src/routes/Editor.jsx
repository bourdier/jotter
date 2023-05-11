import { useState, useEffect } from "react";
import Tools from "../components/Tools";

export default function Dashboard() {
  const [saveNote, setSaveNote] = useState([]);
  let editor = true;

  // Get textarea value and pass as props to Tools component
  useEffect(() => {
    const editor = document.getElementById('editor');
    editor.addEventListener('input', () => {
      setSaveNote(editor.value);
    })
  }, [])

  return (
    <div className="dashboard">
      <Tools editor={editor} note={saveNote} />      
      <div className="dashboard__content">
        <div className="notes">
          <textarea id="editor"></textarea>
        </div>
      </div>
    </div>
  )
}