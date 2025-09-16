import classNames from "classnames/bind";
import PropTypes from "prop-types";
import { useState, useRef, useEffect } from "react";

import styles from "./Popup.module.scss"

const cx = classNames.bind(styles)

function Popup({children, header, items, size}) {
    const [isOpen, setIsOpen] = useState(false)
    const popupRef = useRef(null)
    const togglePopup = () => {
        setIsOpen(prev => !prev)
    }
    useEffect(() => {
    const handleClickOutSide = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutSide);

    return () => {
      document.removeEventListener("click", handleClickOutSide);
    };
  }, []); 
    return (
        <div ref={popupRef} className={cx("wrapper")}>
            {children({togglePopup, isOpen})}
            <div className={cx("popup", {open: isOpen}, size)}>
                {header}
                <ul className={cx("popup-list")}>{items}</ul>
            </div>
        </div>
    );
}

export default Popup;
Popup.propTypes = {
  children: PropTypes.node,
  header: PropTypes.node,
  size: PropTypes.string
}