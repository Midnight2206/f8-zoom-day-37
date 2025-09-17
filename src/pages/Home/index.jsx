import classNames from "classnames/bind";
import { useNavigate } from "react-router-dom";

import styles from "./Home.module.scss"

const cx = classNames.bind(styles)

function Home() {
    const navigate = useNavigate()
    return (
        <div className={cx("wrapper")}>
            <h1>Home</h1>
            <div className={cx("menu")}>
                <button onClick={() => navigate("/performance-demo")} className={cx("menu-item")}>PerformanceDemo </button>
                <button onClick={() => navigate("/focus-demo")} className={cx("menu-item")}>Focus demo </button>

            </div>
        </div>
    );
}

export default Home;