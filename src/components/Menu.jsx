import React from "react";

import MenuItem from "@/components/MenuItem";

import homeSvg from "../../public/home.svg";
import searchSvg from "../../public/search.svg";
import exploreSvg from "../../public/explore.svg";
import reelsSvg from "../../public/reels.svg";
import messagesSvg from "../../public/messages.svg";
import notificationsSvg from "../../public/notifications.svg";
import createSvg from "../../public/create.svg";
import moreSvg from "../../public/more.svg";
import profileSvg from "../../public/user-profile-icon.svg";

import style from "./Menu.module.scss";

export default function Menu () {
    return (
        <div className={style.wrapper}>
            <MenuItem title={"Home"} imagePath={homeSvg}/>
            <MenuItem title={"Search"} imagePath={searchSvg}/>
            <MenuItem title={"Explore"} imagePath={exploreSvg}/>
            <MenuItem title={"Reels"} imagePath={reelsSvg}/>
            <MenuItem title={"Messages"} imagePath={messagesSvg} notificationCount={2}/>
            <MenuItem title={"Notification"} imagePath={notificationsSvg}/>
            <MenuItem title={"Create"} imagePath={createSvg}/>
            <MenuItem title={"Profile"} imagePath={profileSvg}/>

            <div className={style.bottomItem}>
                <MenuItem title={"More"} imagePath={moreSvg}/>
            </div>
        </div>
    )
}
