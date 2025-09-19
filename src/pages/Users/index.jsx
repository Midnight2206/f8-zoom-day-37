import classNames from "classnames/bind";

import styles from "./Users.module.scss"
import DataFetcher from "../../components/DataFetcher";
import useToggle from "../../hooks/useToggle"

const cx = classNames.bind(styles)

function Users() {
    const [fullInfo, toggleFullInfo] = useToggle(false)
    return (
           <>
                <button onClick={toggleFullInfo}>{fullInfo ? "Compact" : "Full Info"}</button>
            <div className={cx("wrapper")}>
                <DataFetcher url="https://jsonplaceholder.typicode.com/users?_limit=5">
                    {({data, loading, error}) => {
                        if(loading) return <span>Loading...</span>
                        if (error) return <div>Error: {error}</div>
                        if (!data.length) return <span>Không có dữ liệu</span>
                        return data.map(user =>  (
                                <div key={user.id} className={cx("user-card")}>
                                    <span>Username: <b>{user.username}</b></span>
                                    <span>Name: <b>{user.name}</b></span>
                                    {fullInfo && <>
                                    <span>Email: <b>{user.email}</b></span>
                                    <span>Tel: <b>{user.phone}</b></span>
                                    <span>Website: <b>{user.website}</b></span>
                                    <span>Address: <b>Street: {user.address?.street}, City: {user.address?.city}</b></span>
                                    </>}
                                </div>
                            )
                        )
                    }}
                </DataFetcher>
            </div>
           </>
    );
}

export default Users;