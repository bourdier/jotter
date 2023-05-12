import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="sign">
      <div className="sign__header">
        <h1>Log in</h1>
        <Link to="/" className="no-decoration"><button className="no"><i className="fa-solid fa-xmark"></i></button></Link>
      </div>
      <form className="sign__form">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Email" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Password" />
        <button type="submit" className="signup">Log in</button>
      </form>
      <p>Don't have an account? <a href="/signup">Sign up</a></p>
    </div>
  )
}