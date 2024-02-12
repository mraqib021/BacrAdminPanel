import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../../screens/Home";
// import About from "../../screens/About";
import Notfound from "../../screens/notfound";
import Admin from "../../screens/Admin";

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" Component={Home}></Route>
                {/* <Route path="/About" Component={About}></Route> */}
                <Route path="/dashboard/*" Component={Admin}></Route>
                <Route path="*" Component={Notfound}></Route>
            </Routes>
        </Router>
    )
}