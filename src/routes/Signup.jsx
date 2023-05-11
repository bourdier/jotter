export default function Signup() {
  return (
    <div className="sign">
      <h1>Sign up</h1>
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