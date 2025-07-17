import React, { useContext } from "react";
import UserContext from "../Context/UserContext";
import "./Profile.css"; // Import the CSS file

export default function Profile() {
  const { user } = useContext(UserContext);
  if(!user)return <div>Please Login</div>
  return (
    <div className="profile-container">
      <img
        className="profile-avatar"
        src={user?.avatar ||"https://i.pravatar.cc/150?img=3"}
        alt="User Avatar"
      />
      <h2 className="profile-name">{user?.username|| "Guest"}</h2>
      <p className="profile-bio">
        B.Tech student, full-stack dev in the making. I break things until they
        work.
      </p>
      <div className="profile-links">
        <a
          href="https://github.com/yourhandle"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/yourhandle"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}
