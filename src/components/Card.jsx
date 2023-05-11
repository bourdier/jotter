import { Link } from "react-router-dom";

export default function Card({ data }) {

  const redirectTo = (note) => {
    window.location = `/notes/${note.id}`
  }

  return (
    <>
    {data?.map((note) => 
      <div className="card" key={note.id} onClick={() => {redirectTo(note)}}>
        <div className="card__header">
          <h2>{note.title}</h2>
        </div>
        <div className="card__content">
          <p>
            {note.content}
          </p>
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