import { createRoot } from "react-dom/client" // named Import
import App from "./App"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"
import { Fragment } from "react";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById('root')).render(
    <Fragment>
        <App />
        <ToastContainer position="top-right" autoClose={1200}/>
    </Fragment>
)