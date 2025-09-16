import { Routes, Route } from "react-router-dom";
import DefaultLayout from "../../layouts/DefaultLayout"
import Home from "../../pages/Home";
import ModalDemo from "../../pages/ModalDemo";
import Blog from "../../pages/Blog";
import Profile from "../../pages/Profile";
function AppRouter() {
    return (
        <Routes>
            <Route index>
                <Route element={<DefaultLayout />}>
                    <Route index element={<Home />}/>
                    <Route path="/modal-demo" element={<ModalDemo />}/>
                    <Route path="/blog" element={<Blog />}/>
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