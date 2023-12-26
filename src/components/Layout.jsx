import React from "react";

import Logo from "@/components/Logo";
import Menu from "@/components/Menu";
import MobileMenu from "@/components/MobileMenu";
import Loader from "@/components/Loader";

import style from "./Layout.module.scss"

export default function Layout({children}) {

    return (
        <div className={style.wrapper}>
            <Loader/>

            <div className={style.sidebar}>
                <Logo/>

                <Menu/>
            </div>

            <MobileMenu/>

            <div className={style.content}>
                {children}
            </div>
        </div>
    )
}
