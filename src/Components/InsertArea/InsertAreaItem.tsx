import React, {ReactElement} from "react";
import {Spacer} from "../Spacer/Spacer";

type Props = {
    icon: ReactElement<any, any>,
    text: string,
    toggle?: ReactElement<any, any>;
}

export function InsertAreaItem({icon, text, toggle}: Props) {
    return (
        <div>
            {icon}
            <Spacer width={50}/>
            <p>{text}</p>
            {toggle}
        </div>
    );
}