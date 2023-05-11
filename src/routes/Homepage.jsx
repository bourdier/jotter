import { Link } from "react-router-dom";
import Preview from '../assets/images/preview.png';

export default function Homepage() {
  return (
    <div className="homepage">
      <nav>
        <h1 className="logo">jotter</h1>
        <ul>
          <li><Link to="/usage">usage</Link></li>
          <li><Link to="/login">log in</Link></li>
          <li><Link to="/signup"><button className="signup">sign up</button></Link></li>
        </ul>
      </nav>
      <main>
        <div className="homepage__hero">
          <h2>Minimalist markdown editor</h2>
          <p>
            Jotter is a simple and intuitive markdown note editor. <br/>
            It allows you to easily create, edit, and organize your notes in a clean and distraction-free environment. <br/>
            Whether you're taking notes for work, school, or personal projects, Jotter is the perfect tool to help you stay organized and focused.
          </p>
        </div>
        <div className="homepage__preview">
          <img src={Preview} alt="Jotter preview" />
        </div>
      </main>
      <footer>
        <p className="logo">© 2023 jotter</p>
        <ul>
          <li><Link to="https://github.com/bourdier/jotter"><i class="fa-brands fa-github"></i></Link></li>
        </ul>
      </footer>
    </div>
  )
}