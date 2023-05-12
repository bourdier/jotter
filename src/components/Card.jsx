import { Link } from "react-router-dom";
import Markdown from "marked-react";

export default function Card({ data }) {

  const redirectTo = (note) => {
    window.location = `/notes/${note.id}`
  }

  const removeHash = (str) => {
    if (str.charAt(0) === '#') {
      return str.slice(1);
    } else {
      return str;
    }
  }

  const removeContent = (str) => {
    if (str.length > 50) {
      return str.slice(0, 50) + '...';
    } else {
      return str;
    }
  }

  return (
    <>
    {data?.map((note) => 
      <div className="card" key={note.id} onClick={() => {redirectTo(note)}}>
        <div className="card__header">
          <h2>{removeHash(note.title)}</h2>
        </div>
        <div className="card__content">
          <Markdown>
            {removeContent(note.content)}
          </Markdown>
        </div>
        <div className="card__tags__list">
          <ul className="no-bullet">
            <li>Tags</li>
          </ul>
        </div>
        <Link to="/notes"></Link>
      </div>
    )}
    </>
  )
}