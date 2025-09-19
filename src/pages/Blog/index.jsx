import classNames from "classnames/bind";

import GoToTop from "../../components/GoToTop";
import styles from "./Blog.module.scss";
import DataFetcher from "../../components/DataFetcher";
import useToggle from "../../hooks/useToggle";
const cx = classNames.bind(styles);

function Blog() {
  const [hideBody, toggleHideBody, setHideBody] = useToggle(false)
  return (
    <div className={cx("wrapper")}>
      <DataFetcher url="https://jsonplaceholder.typicode.com/posts?_limit=20">
        {({ data, loading, error, refetch }) => {
          if (loading) return <span>Loading...</span>;
          if (error) return <span>Lỗi</span>;
          if (!data.length) return <span>Không có dữ liệu</span>;

          return (
            <>
              <div className={cx("btns")}>
                <button onClick={refetch} className={cx("btn")}>
                  Refresh
                </button>
                <button className={cx("btn")} onClick={toggleHideBody}>{hideBody ? "Show body" : "Hide body"}</button>
                <button className={cx("btn")} onClick={() => setHideBody(true)}>Force hide body</button>
              </div>
              {data.map((dt) => (
                <div key={dt.id} className={cx("post-card")}>
                  <h6 className={cx("post-title")}>
                    {dt.id}. {dt.title}
                  </h6>
                  {!hideBody && <span className={cx("post-content")}>{dt.body}</span>}
                  <div className={cx("action")}>
                    <span>#UserID: {dt.userId}</span>
                    <button>Xem chi tiết</button>
                  </div>
                </div>
              ))}
            </>
          );
        }}
      </DataFetcher>

      <GoToTop />
    </div>
  );
}

export default Blog;
