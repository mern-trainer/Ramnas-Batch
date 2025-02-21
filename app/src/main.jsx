import { createRoot } from "react-dom/client" // named Import
import App from "./App"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"
import { Fragment } from "react";
import { ToastContainer } from "react-toastify";
import { CounterProvider } from "./Providers/CounterProvider";

createRoot(document.getElementById('root')).render(
    <Fragment>
        <CounterProvider>
            <App />
        </CounterProvider>
        <ToastContainer position="top-right" autoClose={1200}/>
    </Fragment>
)