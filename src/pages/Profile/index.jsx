import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUsers, faUserClock} from "@fortawesome/free-solid-svg-icons"

import styles from "./Profile.module.scss";
import avataDefault from "/avata-default.jpg"
import withLoading from "../../hoc/withLoading";
import CoursesList from "../../components/CoursesList";

const cx = classNames.bind(styles);
const Avata = ({src, alt, className}) => {
  return <img
            src={src}
            alt={alt}
            className={className}
          />
}
const AvataWithLoading = withLoading(Avata)
function Profile() {
  const [avatar, setAvatar] = useState(null);
  const [file, setFile] = useState(null);
  const [courses, setCourses] = useState(null)
  useEffect(() => {
  const timer = setTimeout(() => {
    setAvatar(avataDefault)
    setCourses([
    {
      id: 1,
    title: "Javascripts",
    decs: "Khóa học đầy đủ về JS giúp bạn có đầy đủ kiến thức từ cơ bản đến nâng cao về JS",
    src_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuHnJDLOcdm_0b6N6kNj-1OvO9KhKYgqIy0w&s"
    },
    {
      id: 2,
    title: "Javascripts",
    decs: "Khóa học đầy đủ về JS giúp bạn có đầy đủ kiến thức từ cơ bản đến nâng cao về JS",
    src_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuHnJDLOcdm_0b6N6kNj-1OvO9KhKYgqIy0w&s"
    },
    {
      id: 3,
    title: "Javascripts",
    decs: "Khóa học đầy đủ về JS giúp bạn có đầy đủ kiến thức từ cơ bản đến nâng cao về JS",
    src_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuHnJDLOcdm_0b6N6kNj-1OvO9KhKYgqIy0w&s"
    },
    {
      id: 4,
    title: "Javascripts",
    decs: "Khóa học đầy đủ về JS giúp bạn có đầy đủ kiến thức từ cơ bản đến nâng cao về JS",
    src_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuHnJDLOcdm_0b6N6kNj-1OvO9KhKYgqIy0w&s"
    }
    ])
  }, 2000);
  return () => clearTimeout(timer);
}, []);
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
          <AvataWithLoading isLoading={!avatar} src={avatar} alt="avatar" className={cx("avatar-preview")}/>
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
        <CoursesList isLoading={!courses} data={courses}/>
      </div>
    </div>
  );
}

export default Profile;
