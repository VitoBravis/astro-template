import React, {useEffect, useState} from "react";
import type { ReactFC } from "../../../types/index";
import {cn} from "../../../app/js/helpers/bem";

const bem = cn('intro');

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
        <div className={bem()} onClick={() => setX(x + 1)}>
            <h1 className={bem('title')}>{title}</h1>
            <hr/>
            <p>{text}<span> {x}</span></p>
        </div>
    )
}

export default Intro;