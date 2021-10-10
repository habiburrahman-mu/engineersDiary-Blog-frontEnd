import './settings.css';
import Sidebar from '../../components/sidebar/Sidebar';

export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img 
                            src="https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png" 
                            alt="" 
                        />
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon far fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display: "none"}}/>
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="Habib" />
                    <label>Email</label>
                    <input type="email" placeholder="habib@exmpl.com" />
                    <label>Password</label>
                    <input type="password" />
                    <button className="settingSubmit">Update</button>
                </form>
                
            </div>
            <Sidebar />
        </div>
    )
}
