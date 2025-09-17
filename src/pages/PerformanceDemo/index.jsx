import classNames from "classnames/bind";
import { useCallback, useState } from "react";

import styles from "./PerformanceDemo.module.scss";
import CounterDisplay from "./components/CounterDisplay";
import ActionBtn from "./components/ActionBtn";
import ExpensiveChild from "./components/ExpensiveChild";

const cx = classNames.bind(styles);
const generateRandomString = () => {
    const length = Math.floor(Math.random() * 6) + 10;
    const chars = "abcdefghijklmnopqrstuvwxyz";
    let str = "";
    for (let i = 0; i < length; i++) {
      str += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
function PerformanceDemo() {
  const [counter, setCounter] = useState(0);
  const [items, setItems] = useState([
    "Lorem ipsum dolor",
    "Lorem ipsum elit iler",
  ]);
  const handleIncrease = useCallback(() => {
    setCounter((prev) => prev + 1);
  }, []);

  const handleDecrease = useCallback(() => {
    setCounter((prev) => prev - 1);
  }, []);

  const handleReset = useCallback(() => {
    setCounter(0);
  }, []);

  const handleAddItem = useCallback(() => {
    setItems((prev) => [...prev, generateRandomString()]);
  }, []);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("counter")}>
        <CounterDisplay counter={counter} />
        <ActionBtn
          increase={handleIncrease}
          decrease={handleDecrease}
          reset={handleReset}
        />
      </div>
      <div className={cx("expensive")}>
        <ExpensiveChild add={handleAddItem} items={items} />
      </div>
    </div>
  );
}

export default PerformanceDemo;
