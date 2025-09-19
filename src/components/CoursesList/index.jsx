import classNames from "classnames/bind";

import styles from "./CoursesList.module.scss"
import withLoading from "../../hoc/withLoading";

const cx = classNames.bind(styles)

function CoursesList({data = []}) {
    return (
        <div className={cx("wrapper")}>
            {data.map(dt => (
                <div key={dt?.id} className={cx("course-card")}>
                    <h6 className={cx("title")}>{dt?.title}</h6>
                    <span className={cx("decs")}>{dt?.decs}</span>
                    <div className={cx("img")}><img src={dt?.src_img}/></div>
                    <div className={cx("action")}>
                        <button>Xem chi tiết</button>
                        <button>Vào học</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default withLoading(CoursesList);