import React from "react";
import type { ReactFC } from "../../../types/index";

interface Props extends ReactFC {
    title: string;
}

const Slider: React.FC<Props> = ({ title}) => {

    return (
        <div className={'slider'}>
            <p className={'slider__text'}>{title}</p>
        </div>
    )
}

export default Slider;