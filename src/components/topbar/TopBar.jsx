import "./topbar.css"
import { Link } from "react-router-dom/cjs/react-router-dom.min";
export default function TopBar() { 
  const user = false;
  return (
    <div className="top">
      <div className="topleft">
      <i className="topIcon fa-brands fa-square-facebook"></i>
      <i className="topIcon fa-brands fa-square-twitter"></i>
      <i className="topIcon fa-brands fa-square-pinterest"></i>
      <i className="topIcon fa-brands fa-square-instagram"></i>
      </div>
      <div className="topcenter">
        <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/">HOME</Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/">ABOUT</Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/">CONTACT</Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/write">WRITE</Link>
            </li>
            <li className="topListItem">
              {user && "LOGOUT"}
            </li>
        </ul>
      </div>
      <div className="topRight">
      {user ?(
                <img className="topImg" src={require('./profile.jpg')} alt="" />
              ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">LOGIN</Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">REGISTER</Link>
            </li>
            
          </ul>
          
        )}
        <i class="TopsearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}
