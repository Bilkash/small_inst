import React from "react";
import Image from "next/image";

import style from "./MenuItem.module.scss";

export default function MenuItem({imagePath, title, notificationCount}) {
    return (
        <div className={style.wrapper}>
            <Image
                priority
                src={imagePath}
                alt={title}
                className={style.icon}
            />

            <div className={style.title}>
                {title}
            </div>

            {notificationCount
                ? (<div className={style.notification}>{notificationCount}</div>)
                : null
            }
        </div>
    )
}
