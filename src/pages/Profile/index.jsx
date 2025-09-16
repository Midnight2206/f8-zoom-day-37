import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./Profile.module.scss";

const cx = classNames.bind(styles);
import avataDefault from "/avata-default.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUsers, faUserClock} from "@fortawesome/free-solid-svg-icons"

function Profile() {
  const [avatar, setAvatar] = useState(avataDefault);
  const [file, setFile] = useState(null);

  useEffect(() => {
    return () => {
      if (file) {
        URL.revokeObjectURL(file.preview);
      }
    };
  }, [file]);

  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      if (file && file.preview) {
        URL.revokeObjectURL(file.preview);
      }
      selectedFile.preview = URL.createObjectURL(selectedFile);
      setFile(selectedFile);
      setAvatar(selectedFile.preview);
    }
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("row")}>
        <input
          id="avatar"
          type="file"
          accept="image/*"
          onChange={handleChange}
        />
        <label htmlFor="avatar">
          <img
            src={avatar}
            alt="avatar"
            className={cx("avatar-preview")}
          />
        </label>
        <h3>Trần Văn Khánh</h3>
        <span>
            <FontAwesomeIcon icon={faUsers}/>
          0 người theo dõi, 0 người đang theo dõi
        </span>
         <span>
            <FontAwesomeIcon icon={faUserClock}/>
          Đã tham gia F8 từ 5 tháng trước
        </span>
      </div>

      <div className={cx("row")}>
      </div>
    </div>
  );
}

export default Profile;
