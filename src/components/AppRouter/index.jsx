import { Routes, Route } from "react-router-dom";
import DefaultLayout from "../../layouts/DefaultLayout"
import Home from "../../pages/Home";
import ModalDemo from "../../pages/ModalDemo";
import Blog from "../../pages/Blog";
import Profile from "../../pages/Profile";
import PerformanceDemo from "../../pages/PerformanceDemo";
import FocusDemo from "../../pages/FocusDemo";
import Users from "../../pages/Users";
function AppRouter() {
    return (
        <Routes>
            <Route path="/">
                <Route element={<DefaultLayout />}>
                    <Route index element={<Home />}/>
                    <Route path="modal-demo" element={<ModalDemo />}/>
                    <Route path="blog" element={<Blog />}/>
                    <Route path="performance-demo" element={<PerformanceDemo />}/>
                    <Route path="focus-demo" element={<FocusDemo />}/>
                    <Route path="users" element={<Users />} />
                </Route>
            </Route>
            <Route path="me">
                <Route element={<DefaultLayout />}>
                    <Route path="profile" element={<Profile/>}/>
                </Route>
            </Route>
        </Routes>
    );
}

export default AppRouter;