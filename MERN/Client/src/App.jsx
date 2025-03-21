import { BrowserRouter, Routes, Route } from "react-router"
import HomePage from "./Pages/HomePage"

const App = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/" Component={HomePage}/>
        </Routes>
    </BrowserRouter>
}

export default App