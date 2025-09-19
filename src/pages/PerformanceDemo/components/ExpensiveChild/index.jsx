import classNames from "classnames/bind";
import { memo, useMemo } from "react";

import styles from "./ExpensiveChild.module.scss";

const cx = classNames.bind(styles);

function ExpensiveChild({ add, items }) {
  const longestName = useMemo(() => {
    console.log("Calculating longest name...");
    let longest = "";
    items.forEach((item) => {
      for (let i = 0; i < 100000; i++) {}
      if (item.length > longest.length) {
        longest = item;
      }
    });
    return longest;
  }, [items]);

  (function totalLength() {
    let total = 0;
    items.forEach((item) => {
      total = total + item.length;
    });
    console.log(`Rerender ExpensiveChild: ${total}`);
  })();

  return (
    <div className={cx("wrapper")}>
      <h3>Longest Name: {longestName}</h3>
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
