import { BrowserRouter, Routes, Route } from "react-router"
import HomePage from "./Pages/HomePage"
import Todo from "./Pages/Todo"
import Optimization from "./Pages/Optimization"

const App = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/" Component={HomePage} />
            <Route path="/todo" Component={Todo} />
            <Route path="/optimization" Component={Optimization} />
        </Routes>
    </BrowserRouter>
}

export default App