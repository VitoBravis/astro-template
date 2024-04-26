import React, {useEffect, useState} from "react";
import type { ReactFC } from "../../../types/index";

interface Props extends ReactFC {
    title: string;
    text?: string;
}

const Intro: React.FC<Props> = ({ children, title , text}) => {
    const [x, setX] = useState(0);

    useEffect(() => {
        console.log(window);
    }, [])

    return (
        <div className={'intro'} onClick={() => setX(x + 1)}>
            <h1 className={'intro__title'}>{title}</h1>
            <hr/>
            <p>{text}<span> {x}</span></p>
        </div>
    )
}

export default Intro;