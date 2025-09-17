import classNames from "classnames/bind";
import { memo } from "react";
import styles from "./Action.module.scss"
const cx = classNames.bind(styles)

function ActionBtn({increase, decrease, reset}) {
    console.log(`Render action buttons`);
    
    return (
        <div className={cx("action")}>
            <button onClick={decrease} className={cx("btn", "decrease")}>Decrease</button>
                <button onClick={reset} className={cx("btn", "reset")}>Reset</button>
                <button onClick={increase} className={cx("btn", "increase")}>Increase</button>
        </div>
    );
}

export default memo(ActionBtn);