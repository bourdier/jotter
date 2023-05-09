import Preview from '../assets/images/preview.png';

export default function Homepage() {
  return (
    <>
      <nav>
        <h1>jotter</h1>
        <ul>
          <li><a href="/usage">usage</a></li>
          <li><a href="/login">log in</a></li>
          <li><button><a href="/signup">sign up</a></button></li>
        </ul>
      </nav>
      <main>
        <div class="homepage__hero">
          <h2>Minimalist markdown editor</h2>
          <p>
            Jotter is a simple and intuitive markdown note editor. <br/>
            It allows you to easily create, edit, and organize your notes in a clean and distraction-free environment. <br/>
            Whether you're taking notes for work, school, or personal projects, Jotter is the perfect tool to help you stay organized and focused.
          </p>
        </div>
        <div class="homepage__preview">
          <img src={Preview} alt="Jotter preview" />
        </div>
      </main>
      <footer>
        <p>© 2023 jotter</p>
        <ul>
          <li><a href="https://github.com/bourdier/jotter"><i class="fa-brands fa-github"></i></a></li>
        </ul>
      </footer>
    </>
  )
}