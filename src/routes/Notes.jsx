import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Tools from "../components/Tools";

export default function Notes({ data }) {
  let editor = false;
  const { id } = useParams();
  const [note, setNote] = useState(null);

  useEffect(() => {
    if (data && data.length > 0) {
      console.log(data);
      let value = id;
      console.log({value})
      let index = data.findIndex((item) => {
        return item.id === value;
      });

      setNote(data[index]);
      console.log({index}, {note})
    }
  }, [data, id]);

  return note && (
    <>
      <Tools editor={editor} />
      <div className="notes__content" key={note.id}>
        <h2>{note.title}</h2>
        <p>{note.content}</p>
      </div>
    </>
  );
}
