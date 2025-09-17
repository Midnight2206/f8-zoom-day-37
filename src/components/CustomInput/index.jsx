import classNames from "classnames/bind";
import PropTypes from "prop-types";
import { forwardRef, useRef, useImperativeHandle } from "react";

import styles from "./CustomInput.module.scss";

const cx = classNames.bind(styles);

const CustomInput = forwardRef(({ label = "Label", placeholder = "Placeholder", value = "", onChange }, ref) => {
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current?.focus();
    },
    blur: () => {
      inputRef.current?.blur();
    },
    getValue: () => {
      return inputRef.current?.value;
    },
  }));

  return (
    <div className={cx("wrapper")}>
      <label>{label}:</label>
      <input
        ref={inputRef}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
});

CustomInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default CustomInput;
