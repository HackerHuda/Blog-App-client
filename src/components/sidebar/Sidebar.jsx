import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar"> 
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img className="sidebarImg" src={require('./about.jpg')} alt="" />
        <p>This area is Our description</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">
            CAREGORIES
        </span>
        <ul className="sidebarList">
            <li className="sidebarListItem">Lifestyle</li>
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Dancing</li>
            <li className="sidebarListItem">Cinema</li>
            <li className="sidebarListItem">Sports</li>
        </ul>
      </div>
      <div className="sidebaarItem">
      <span className="sidebarTitle">
        FOLLOW US
      </span>
      <div className="sidebarSocial">
        <i className="sidebarIcon fa-brands fa-square-facebook"></i>
        <i className="sidebarIcon fa-brands fa-square-twitter"></i>
        <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
        <i className="sidebarIcon fa-brands fa-square-instagram"></i>
      </div>

      </div>
    </div>
  )
}
