import { useRef, useState } from "react";
import classNames from "classnames/bind";

import styles from "./FocusDemo.module.scss";
import CustomInput from "../../components/CustomInput";

const cx = classNames.bind(styles);

function FocusDemo() {
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inputValue, setInputValue] = useState("")
  const [lableValue, setLabelValue] = useState("label")

  const handleFocus = (ref) => {
    ref.current.focus();
  };

  const handleBlur = (ref) => {
    ref.current.blur();
  };

  const handleGetValue = (ref, label) => {
    setInputValue(ref.current.getValue())
    setLabelValue(label)
  };

  return (
    <div className={cx("wrapper")}>
      <h2 className={cx("title")}>Focus demo</h2>
    <span className={cx('input-value')}>Gía trị của {lableValue} là: {inputValue} </span>
      <div className={cx("input-group")}>
        <CustomInput
          ref={usernameRef}
          label="Username"
          placeholder="Nhập username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <CustomInput
          ref={emailRef}
          label="Email"
          placeholder="Nhập email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <CustomInput
          ref={passwordRef}
          label="Password"
          placeholder="Nhập password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className={cx("actions")}>
        <div className={cx("action")}>
          <button onClick={() => handleFocus(usernameRef)}>Focus username</button>
          <button onClick={() => handleBlur(usernameRef)}>Blur username</button>
          <button onClick={() => handleGetValue(usernameRef, "Username")}>
            Get username
          </button>
        </div>
        <div className={cx("action")}>
          <button onClick={() => handleFocus(emailRef)}>Focus email</button>
          <button onClick={() => handleBlur(emailRef)}>Blur email</button>
          <button onClick={() => handleGetValue(emailRef, "Email")}>
            Get email
          </button>
        </div>
        <div className={cx("action")}>
          <button onClick={() => handleFocus(passwordRef)}>Focus password</button>
          <button onClick={() => handleBlur(passwordRef)}>Blur password</button>
          <button onClick={() => handleGetValue(passwordRef, "Password")}>
            Get password
          </button>
        </div>
      </div>
    </div>
  );
}

export default FocusDemo;
