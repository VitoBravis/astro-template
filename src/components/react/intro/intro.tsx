import React from "react";
import type { ReactFC } from "../../../types/index";
import styles from './intro.module.scss';

interface Props extends ReactFC {
    title: string;
}

const Intro: React.FC<Props> = ({ children, title }) => {

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{title}</h1>
            <hr/>
        </div>
    )
}

export default Intro;