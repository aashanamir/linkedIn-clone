import React from "react";
import "./style.scss";
import SearchIcon from '@mui/icons-material/Search';
import NavIcon from "./navicons";
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import WorkIcon from '@mui/icons-material/Work';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

const Header = () => {
    const user = useSelector(selectUser);
    console.log(user);

    return (
        <div className="header">
            <div className="container">
                <div className="header-left">
                    <div className="logo">
                    <img src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" alt="LinkedIn Clone"/>
                    </div>
                    <div className="search-bar">
                        <SearchIcon/>
                        <input type="text" placeholder="Search" />
                    </div>
                </div>

                <div className="header-right">
                    <NavIcon title="Home" Icon={<HomeIcon/>}/>
                    <NavIcon title="My Network" Icon={<GroupIcon/>}/>
                    <NavIcon title="Jobs" Icon={<WorkIcon/>}/>
                    <NavIcon title="Messages" Icon={<ForumIcon/>}/>
                    <NavIcon title="Notifications" Icon={<NotificationsIcon/>}/>
                    <div className="my-avatar">                        
                    <NavIcon title={user.name} avatar={<Avatar/>}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
