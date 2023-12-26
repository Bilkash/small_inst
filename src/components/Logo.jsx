import React from "react";
import Image from "next/image";

import instLogo from "../../public/logo.svg";
import instMobileLogo from "../../public/logo_small.svg";

import style from "./Logo.module.scss";

export default function Logo() {
    return (
        <div className={style.logoWrapper}>
            <Image
                priority
                src={instLogo}
                alt="Instagram"
                className={style.logo}
            />

            <Image
                priority
                src={instMobileLogo}
                alt="Instagram"
                className={style.mobile_logo}
            />
        </div>
    )
}
