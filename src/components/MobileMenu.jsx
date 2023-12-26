import React from "react";

import MenuItem from "@/components/MenuItem";

import homeSvg from "../../public/home.svg";
import exploreSvg from "../../public/explore.svg";
import reelsSvg from "../../public/reels.svg";
import createSvg from "../../public/create.svg";
import messagesSvg from "../../public/messages.svg";
import profileSvg from "../../public/user-profile-icon.svg";

import style from "./MobileMenu.module.scss";

export default function MobileMenu() {
    return (
        <div className={style.wrapper}>
            <MenuItem title={"Home"} imagePath={homeSvg}/>
            <MenuItem title={"Explore"} imagePath={exploreSvg}/>
            <MenuItem title={"Reels"} imagePath={reelsSvg}/>
            <MenuItem title={"Create"} imagePath={createSvg}/>
            <MenuItem title={"Messages"} imagePath={messagesSvg} notificationCount={2}/>
            <MenuItem title={"Profile"} imagePath={profileSvg}/>
        </div>
    )
}
