import classNames from "classnames/bind";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCrown } from "@fortawesome/free-solid-svg-icons";
import {Link, useNavigate} from "react-router-dom";

import styles from "./Header.module.scss";
import Slogan from "../../../../components/Slogan";
import Search from "./Search";
import Popup from "../../../../components/Popup";

const cx = classNames.bind(styles);

function Header({ className }) {
  const navigate = useNavigate()
  const result = [
    {
      type: "Khóa học",
      items: [
        {
          title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
          img_src:
            "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
        },
        {
          title: "Học javascript",
          img_src:
            "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
        },
        {
          title: "Học javascript",
          img_src:
            "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
        },
        {
          title: "Học javascript",
          img_src:
            "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
        },
      ],
    },
    {
      type: "Bài viết",
      items: [
        {
          title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
          img_src:
            "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
        },
        {
          title: "Học javascript",
          img_src:
            "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
        },
        {
          title: "Học javascript",
          img_src:
            "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
        },
        {
          title: "Học javascript",
          img_src:
            "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
        },
      ],
    },
  ];
  const notifies = [
    {
      type: "add course",
      owner: {
        name: "F8",
        img_src: "https://fullstack.edu.vn/assets/images/f8_avatar.png",
      },
      time: "4 ngày trước",
      read: true,
      itemName: "Các hooks trong React",
    },
    {
      type: "add course",
      owner: {
        name: "F8",
        img_src: "https://fullstack.edu.vn/assets/images/f8_avatar.png",
      },
      time: "6 ngày trước",
      read: false,
      itemName: "Các hooks trong React",
    },
    {
      type: "like comment",
      owner: {
        name: "Lân Nguyễn",
        img_src: "https://fullstack.edu.vn/assets/images/f8_avatar.png",
      },
      time: "8 ngày trước",
      read: true,
      itemName: "Lân Nguyễn",
    },
    {
      type: "mentioned",
      owner: {
        name: "F8",
        img_src: "https://fullstack.edu.vn/assets/images/f8_avatar.png",
      },
      time: "10 ngày trước",
      read: true,
      itemName: "Kông Minh",
    },
  ];
  const unreadCount = notifies.filter((n) => !n.read).length;

  const chooseNotiContent = (item) => {
    switch (item.type) {
      case "add course":
        return (
          <span className={cx("noti-item-content")}>
            Bài học <b>{item.itemName}</b> đã được thêm vào
          </span>
        );
      case "like comment":
        return (
          <span className={cx("noti-item-content")}>
            <b>{item.itemName}</b> đã thích bình luận của bạn
          </span>
        );
      case "mentioned":
        return (
          <span className={cx("noti-item-content")}>
            <b>{item.itemName}</b> đã nhắc tới bạn trong 1 bình luận
          </span>
        );
    }
  };
  function NotiItem({ item }) {
    return (
      <li className={cx("popup-item", { "not-read": !item.read })}>
        <div className={cx("noti-item-img")}>
          <img src={item.owner.img_src} />
        </div>
        <div className={cx("popup-item-body")}>
          {chooseNotiContent(item)}
          <span className={cx("noti-item-time")}>{item.time}</span>
        </div>
      </li>
    );
  }
  const coursesPopup = [
    {
      img_src:
        "https://files.fullstack.edu.vn/f8-prod/courses/31/67f4c93c28d4b.png",
      name: "Fullstack web",
      time: "4 ngày",
      process: 70,
    },
    {
      img_src:
        "https://files.fullstack.edu.vn/f8-prod/courses/31/67f4c93c28d4b.png",
      name: "Fullstack web",
      time: "4 ngày",
      process: 70,
    },
    {
      img_src:
        "https://files.fullstack.edu.vn/f8-prod/courses/31/67f4c93c28d4b.png",
      name: "Fullstack web",
      time: "4 ngày",
      process: 70,
    },
    {
      img_src:
        "https://files.fullstack.edu.vn/f8-prod/courses/31/67f4c93c28d4b.png",
      name: "Fullstack web",
      time: "4 ngày",
      process: 70,
    },
    {
      img_src:
        "https://files.fullstack.edu.vn/f8-prod/courses/31/67f4c93c28d4b.png",
      name: "Fullstack web",
      time: "4 ngày",
      process: 70,
    },
    {
      img_src:
        "https://files.fullstack.edu.vn/f8-prod/courses/31/67f4c93c28d4b.png",
      name: "Fullstack web",
      time: "4 ngày",
      process: 70,
    },
  ];
  function CourseItem({ item }) {
    return (
      <li className={cx("popup-item")}>
        <div className={cx("course-item-img")}>
          <img src={item.img_src} />
        </div>
        <div className={cx("popup-item-body")}>
          <span className={cx("popup-course-name")}>{item.name}</span>
          <span className={cx("popup-course-time")}>{item.time}</span>
          <div className={cx("popup-course-process")}>
            <div
              style={{
                width: `${item.process}%`,
                height: "100%",
                background: "#f05123",
              }}
            ></div>
          </div>
        </div>
      </li>
    );
  }
  return (
    <header className={cx("wrapper", className)}>
      <Slogan gap="16px" />
      <Search
        results={result}
        onChange={(v) => console.log(v)}
        onClickItem={(item) => console.log(item)}
      />
      <div className={cx("action")}>
        <Popup
          header={
            <div className={cx("popup-header")}>
              <h6 className={cx("popup-title")}>Khóa học của bạn</h6>
              <button className={cx("popup-header-btn")}>Xem tất cả</button>
            </div>
          }
          items={coursesPopup.map((course, i) => (
            <CourseItem key={i} item={course} />
          ))}
        >
          {({ togglePopup }) => (
            <div
              className={cx("action-btn", "courses-btn")}
              onClick={togglePopup}
            >
              Khóa học của tôi
            </div>
          )}
        </Popup>
        <Popup
          header={
            <div className={cx("popup-header")}>
              <h6 className={cx("popup-title")}>Thông báo</h6>
              <button className={cx("popup-header-btn")}>
                Đánh dấu đã đọc
              </button>
            </div>
          }
          items={notifies.map((noti, i) => (
            <NotiItem item={noti} key={i} />
          ))}
        >
          {({ togglePopup }) => (
            <div className={cx("action-btn")} onClick={togglePopup}>
              <FontAwesomeIcon
                className={cx("notify-icon")}
                size="lg"
                icon={faBell}
              />
              <span className={cx("notify-num")}>
                {unreadCount > 99 ? 99 : unreadCount}
              </span>
            </div>
          )}
        </Popup>

        <Popup
          size="small"
          header={
            <div className={cx("popup-header")}>
              <div className={cx("avata", "vip")}>
                <img src="https://sohanews.sohacdn.com/thumb_w/480/2016/photo-1-1467618024002.jpg" />
                <FontAwesomeIcon
                  className={cx("crown-icon")}
                  icon={faCrown}
                  size="sm"
                />
              </div>
              <div className={cx("popup-info")}>
                <span className={cx("popup-displayname")}>Trần Văn Khánh</span>
                <span className={cx("popup-username")}>@tranvankhanh7</span>
              </div>
            </div>
          }
          items={
            <>
                <section className={cx("popup-section")}>
                    <li className={cx("popup-item")} onClick={() => navigate("/me/profile")}>Trang cá nhân</li>
                </section>
                <section className={cx("popup-section")}>
                    <li className={cx("popup-item")}>Viết blog</li>
                    <li className={cx("popup-item")}>Bài viết của tôi</li>
                    <li className={cx("popup-item")}>Bài viết đã lưu</li>
                </section>
                <section className={cx("popup-section", "only-small-screen")}>
                    <li className={cx("popup-item")}>Khóa học của tôi</li>
                </section>
                <section className={cx("popup-section")}>
                    <li className={cx("popup-item")}>Cài đặt</li>
                    <li className={cx("popup-item")}>Đăng xuất</li>
                </section>
            </>
          }
        >
          {({ togglePopup }) => (
            <div className={cx("avata", "vip")} onClick={togglePopup}>
              <img src="https://sohanews.sohacdn.com/thumb_w/480/2016/photo-1-1467618024002.jpg" />
              <FontAwesomeIcon
                className={cx("crown-icon")}
                icon={faCrown}
                size="sm"
              />
            </div>
          )}
        </Popup>
      </div>
    </header>
  );
}

export default Header;
Header.proptypes = {
  classNames: PropTypes.string,
};
