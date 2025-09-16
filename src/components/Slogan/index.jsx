import classNames from "classnames/bind";
import PropTypes from "prop-types";


import styles from "./Slogan.module.scss"
import sloganImg from "/f8-logo.png"

const cx = classNames.bind(styles)

function Slogan({gap, responsive=true}) {
    return (
        <div className={cx("wrapper")} style={{gap: gap}}>
            <div className={cx("img-wrapper")}>
                <img src={sloganImg} alt="" />
            </div>
            <div className={cx("slogan", {hideOnLgScreen: responsive})}>
                <p>Học lập trình để đi làm</p>
            </div>
        </div>
    );
}

export default Slogan;
Slogan.propTypes = {
    gap: PropTypes.string
}