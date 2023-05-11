import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="sign">
      <div className="sign__header">
        <h1>Sign up</h1>
        <Link to="/"><button className="no"><i className="fa-solid fa-xmark"></i></button></Link>
      </div>
      <form className="sign__form">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Email" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Password" />
        <label htmlFor="password">Confirm Password</label>
        <input type="password" id="password" name="password" placeholder="Confirm password" />
        <button type="submit" className="signup">Sign up</button>
      </form>
      <p>Already have an account? <a href="/login">Log in</a></p>
    </div>
  )
}