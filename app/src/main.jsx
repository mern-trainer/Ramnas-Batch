import { createRoot } from "react-dom/client" // named Import
import App from "./App"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"
import { ToastContainer } from "react-toastify";
import { CounterProvider } from "./Providers/CounterProvider";
import { CartProvider } from "./Providers/CartProvider";

createRoot(document.getElementById('root')).render(
    <CartProvider>
        <CounterProvider>
            <App />
        </CounterProvider>
        <ToastContainer position="top-right" autoClose={1200}/>
    </CartProvider>
)