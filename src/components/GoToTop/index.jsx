import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";


import styles from "./GoToTop.module.scss";
const cx = classNames.bind(styles)
function GoToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 300) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={cx("go-to-top", {show: show})}
      onClick={scrollToTop}
      aria-label="Go to top"
    >
      <FontAwesomeIcon icon={faArrowUp} />
    </button>
  );
};

export default GoToTop;
