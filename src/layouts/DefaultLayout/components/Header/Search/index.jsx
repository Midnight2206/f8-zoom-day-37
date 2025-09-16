import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faSpinner,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

import styles from "./Search.module.scss";
import { useState, useRef, useEffect, Fragment } from "react";

const cx = classNames.bind(styles);
function Search({ loading = false, hasResult = true, onChange, results=[], onClickItem }) {
  const inputRef = useRef(null);
  const wrapperRef = useRef(null);
  const [inputValue, setInputValue] = useState("");
  const [showResult, setShowResult] = useState(false)

  const handleChangeInput = e => {
    const value = e.target.value
    setInputValue(value)
    if(value.trim()) {
        setShowResult(true)
        onChange(value)
    } else {
        setShowResult(false)
    }
  }
  useEffect(() => {
    const handleClickOutSide = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setShowResult(false);
      }
    };

    document.addEventListener("click", handleClickOutSide);

    return () => {
      document.removeEventListener("click", handleClickOutSide);
    };
  }, []); 
  return (
    <div ref={wrapperRef} className={cx("wrapper")}>
      <input
        ref={inputRef}
        value={inputValue}
        onChange={(e) => handleChangeInput(e)}
        onFocus={e => {
          if(e.target.value.trim()) {
            setShowResult(true)
          } else {
            setInputValue('')
          }
        }}
        className={cx("search-input")}
        placeholder="Tìm kiếm khóa học, bài viết, video,..."
      />
      <div className={cx("search-icon")}>
        <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
      </div>
      <button
        onClick={() => {
          setInputValue("");
          inputRef.current.focus();
          setShowResult(false)
        }}
        className={cx("clear-btn")}
      >
        <FontAwesomeIcon icon={faXmark} size="xs" />
      </button>
      <div className={cx("search-result", {show: showResult})}>
        <p className={cx("result-title")}>
          {loading ? (
            <>
              <FontAwesomeIcon icon={faSpinner} spin size="xs" />
              <span>Tìm '{inputValue.trim()}'</span>
            </>
          ) : (
            <>
              <FontAwesomeIcon icon={faMagnifyingGlass} size="xs" />
              {hasResult
                ? <span>Kết quả cho '{inputValue.trim()}'</span>
                : <span>Không có kết quả cho '{inputValue.trim()}'</span>}
            </>
          )}
        </p>
        {hasResult && results.map((result, i) => (
            <Fragment key={i}>
                <div className={cx("result-heading")}>
                    <span className={cx("heading-title")}>{result.type?.toUpperCase()}</span>
                    <button className={cx("more-btn")}>Xem thêm</button>
                </div>
                {result.items.map((item, ind) => (
                    <div onClick={() => onClickItem?.(item)} key={ind} className={cx("result-item")}>
                        <div className={cx("result-img")}>
                            <img src={item.img_src}/>
                        </div>
                        <p className={cx("result-item-title")}>{item.title}</p>
                    </div>
                ))}
            </Fragment>
        ))}
      </div>
    </div>
  );
}

export default Search;
Search.propTypes = {
  loading: PropTypes.bool,
  hasResult: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  results: PropTypes.array,
  onClickItem: PropTypes.func.isRequired
};
