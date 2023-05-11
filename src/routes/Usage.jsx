import { Link } from "react-router-dom";
import Note from "../assets/images/note.png";

export default function Homepage() {
  return (
    <div className="homepage">
      <nav>
        <h1 className="logo">jotter</h1>
        <ul>
          <li>
            <Link to="/usage">usage</Link>
          </li>
          <li>
            <Link to="/login">log in</Link>
          </li>
          <li>
            <Link to="/signup">
              <button className="signup">sign up</button>
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <div className="homepage__hero">
          <h2>Usage</h2>
          <p>
            To use Jotter, simply log in or signup and create a new note by
            clicking the "New Note" button. You can then start typing your note
            using Markdown syntax. Jotter will automatically convert your
            Markdown syntax into formatted text in the preview. <br />
            <br />
            To save your note, click the "Save" button. Your note will be saved
            and added to the list of notes. To edit an existing note, simply
            click on its title in the list of notes. <br />
            <br />
            To export a note, click the "Export" button while viewing the note.
            You can then save the Markdown file to your computer. To import a
            Markdown file into Jotter, click the "Import" button on the homepage
            and select the file you want to import.
          </p>
        </div>
        <div className="homepage__preview">
          <img src={Note} className="homepage__preview--small__image" alt="Note icon by jocularityart" />
          <span className="homepage__preview__credits">Icon by <Link to="https://www.flaticon.com/fr/auteurs/jocularityart" target="_blank">jocularityart</Link></span>
        </div>
      </main>
      <footer>
        <p className="logo">© 2023 jotter</p>
        <ul>
          <li>
            <Link to="https://github.com/bourdier/jotter">
              <i className="fa-brands fa-github"></i>
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
}
