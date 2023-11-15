import "./register.css"
import { Link } from "react-router-dom/cjs/react-router-dom.min";
export default function Register() {
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
          <form className="registerForm">
            <label>Username</label>
            <input type="text" className="registerInput" placeholder="Enter your Name..." />
            <label>Email</label>
            <input type="text" className="registerInput" placeholder="Enter your email..." />
            <label>Passowrd</label>
            <input type="password" className="registerInput" placeholder="Enter your password..." />
            <button className="registerButton">Register</button>
          </form>
          <button className="registerLoginButton">
            <Link to="/login" className="link">Login</Link>
          </button>
        </div>
      )
    }
