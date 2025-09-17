import classNames from "classnames/bind";
import { memo } from "react";

import styles from "./ExpensiveChild.module.scss";

const cx = classNames.bind(styles);

function ExpensiveChild({ add, items }) {
  (function totalLength() {
    let total = 0;
    items.forEach((item) => {
      total = total + item.length;
    });
    console.log(`Rereder Expensive child: ${total}`);
  })();
  return (
    <div className={cx("wrapper")}>
      <ul className={cx("items")}>
        {items.map((item, i) => (
          <li key={i}>
            {i + 1}. {item}
          </li>
        ))}
      </ul>
      <button className={cx("add-btn")} onClick={add}>
        Add
      </button>
    </div>
  );
}

export default memo(ExpensiveChild);
