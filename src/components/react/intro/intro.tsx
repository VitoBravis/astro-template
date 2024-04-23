import React, {useEffect, useState} from "react";
import type { ReactFC } from "../../../types/index";
import styles from './intro.module.css';

interface Props extends ReactFC {
    title: string;
}

const Intro: React.FC<Props> = ({ children, title }) => {
    const [x, setX] = useState(0);

    useEffect(() => {
        console.log(window);
        console.log('test');
    }, [])

    return (
        <div className={styles.container} onClick={() => setX(x + 1)}>
            <h1 className={styles.title}>{title}</h1>
            <hr/>
            <span>
                {x}
            </span>
        </div>
    )
}

export default Intro;