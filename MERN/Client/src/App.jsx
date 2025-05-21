import { BrowserRouter, Routes, Route } from "react-router"
import HomePage from "./Pages/HomePage"
import Todo from "./Pages/Todo"
import Optimization from "./Pages/Optimization"
import Callback from "./Pages/Callback"
import CheckApi from "./Pages/CheckApi"
import SignupPage from "./Pages/SignupPage"
import CheckAuth from "./Pages/CheckAuth"

const App = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/" Component={HomePage} />
            <Route path="/todo" Component={Todo} />
            <Route path="/optimization" Component={Optimization} />
            <Route path="/callback" Component={Callback} />
            <Route path="/api" Component={CheckApi} />
            <Route path="/signup" Component={SignupPage} />
            <Route path="/check-auth" Component={CheckAuth} />
        </Routes>
    </BrowserRouter>
}

export default App