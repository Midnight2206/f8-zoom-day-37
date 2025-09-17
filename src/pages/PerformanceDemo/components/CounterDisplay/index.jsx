import classNames from "classnames/bind";

import styles from "./CounterDisplay.module.scss"
import { memo } from "react";

const cx = classNames.bind(styles)

const CounterDisplay = 
    ({counter}) => {
        console.log(`Render: ${counter}`)
    return (
            <div className={cx("counter")}>{counter}</div>
    );
}


export default memo(CounterDisplay);