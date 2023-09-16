import React from "react";
import "./style.scss";
import { Avatar } from "@mui/material";
import StickyBox from "./stickybox";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
                                                                                                              
const LeftSidebar = () => {
    const user = useSelector(selectUser);
    return (
        <div className="left-sidebar">
            <div className="profile">
                <div className="profile-bg">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLI6hyGhl92g8DwSEbse_T3Iq6UPwfpMPv3JENGrin&s"
                        alt="Profile-Bg"
                    />
                </div>
                <Avatar src={user.photoURL} />
                <h3>{user.name}</h3>
                <p>
                    {user.description}
                </p>

                <div className="profile-details">
                    <h2>Profile Details</h2>

                    <div className="profile-stats">
                        <span>Who viewed your porfile</span>
                        <span>20</span>
                    </div>

                    <div className="profile-stats">
                        <span>Grow Your Connections</span>
                        <span>120+</span>
                    </div>
                </div>
            </div>
            <div className="recent">
                <StickyBox text="branding" />
                <StickyBox text="React.Js" />
                <StickyBox text="Mern Stack" />
                <StickyBox text="Firebase" />
                <StickyBox text="Python" />
                <StickyBox text="Redux" />
                <StickyBox text="dijango" />
            </div>
        </div>
    );
};

export default LeftSidebar;
