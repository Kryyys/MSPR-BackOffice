// import React from "react";
import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsIcon from '@mui/icons-material/Notifications';
import BedtimeIcon from '@mui/icons-material/Bedtime';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder="Recherchez..." />
                    <SearchIcon />
                </div>

                <div className="items">
                    <div className="item">
                        <BedtimeIcon className="icon" />
                    </div>
                    <div className="item">
                        <NotificationsIcon className="icon" />
                        <div className="counter">1</div>
                    </div>
                    <div className="item">
                        <FullscreenExitIcon className="icon" />
                    </div>
                    <div className="item">
                        <img 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkZHBETVt6zFrXmWariYa7k2fWENrhEx6T7BlMtT9uPted-C29glQb1Six3uoQ4l2heFw&usqp=CAU" 
                        alt="" 
                        className="avatar" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar