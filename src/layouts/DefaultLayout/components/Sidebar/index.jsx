import classNames from "classnames/bind";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHome, faRoad, faNewspaper, faComments, faClone} from "@fortawesome/free-solid-svg-icons"

import styles from "./Sidebar.module.scss"

const cx = classNames.bind(styles)
function Sidebar({className}) {
    return (
        <div className={`${className} ${cx("wrapper")}`}>
            <NavLink to="/#" className={({isActive}) => cx("sidebar-item", {active: isActive})}>
                <FontAwesomeIcon icon={faHome} size="lg"/>
                <span>Trang chủ</span>
            </NavLink>
            <NavLink to="/learning-paths" className={({isActive}) => cx("sidebar-item", {active: isActive})}>
                <FontAwesomeIcon icon={faRoad} size="lg"/>
                <span>Lộ trình</span>
            </NavLink>
            <NavLink to="/blog" className={({isActive}) => cx("sidebar-item", {active: isActive})}>
                <FontAwesomeIcon icon={faNewspaper} size="lg"/>
                <span>Bài viết</span>
            </NavLink>
            <NavLink to="/discussions" className={({isActive}) => cx("sidebar-item", {active: isActive})}>
                <FontAwesomeIcon icon={faComments} size="lg"/>
                <span>Hỏi đáp</span>
            </NavLink>
            <NavLink to="/modal-demo" className={({isActive}) => cx("sidebar-item", {active: isActive})}>
                <FontAwesomeIcon icon={faClone} size="lg"/>
                <span>Modal</span>
            </NavLink>
        </div>
    );
}

export default Sidebar;
Sidebar.propTypes = {
    classNames: PropTypes.string
}