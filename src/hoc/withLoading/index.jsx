import classNames from "classnames/bind";
import styles from "./withLoading.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles)
const withLoading = (Component) => {
  return function WithLoading({isLoading, ...props}) {
    if(isLoading) {
      return (
        <div className={cx("wrapper")}>
          <FontAwesomeIcon icon={faSpinner} spin/>
          <span>Loading...</span>
        </div>
      )
    }
    return <Component {...props}/>
  }
}
export default withLoading