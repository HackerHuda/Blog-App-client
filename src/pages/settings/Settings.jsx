import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"
export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update your account</span>
            <span className="settingsDeleteTitle">Delete your account</span>
        </div>
        <form className="settingsForm">
            <label>Profile Picture</label>
            <div className="settingsPP">
                <img className="settingsImg" src={require('./settings.jpg')}/>
                <label htmlFor="fileInput">
                <i className="settingsPPIcon fa-regular fa-circle-user"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}} />
            </div>
            <label>Username</label>
            <input type="text" placeholder="huda"/>
            <label>Email</label>
            <input type="text" placeholder="huda@gmail.com"/>
            <label>Password</label>
            <input type="password"/>
            <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar/>
    </div>
  )
}
