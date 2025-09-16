import classNames from "classnames/bind";
import { Outlet } from "react-router-dom";

import styles from "./DefaultLayout.module.scss"
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const cx = classNames.bind(styles)

function DefaultLayout() {
    return (
        <div className={cx("wrapper")}>
            <Header className={cx("header")}/>
            <Sidebar className={cx("sidebar")}/>
            <main className={cx("body")}><Outlet /></main>
        </div>
    );
}

export default DefaultLayout;