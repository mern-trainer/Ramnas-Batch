import { createRoot } from "react-dom/client" // named Import
import App from "./App"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"

createRoot(document.getElementById('root')).render(<App />)