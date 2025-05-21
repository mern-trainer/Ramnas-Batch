import { createRoot } from "react-dom/client" // named Import
import App from "./App"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"
import { ToastContainer } from "react-toastify";
import { CounterProvider } from "./Providers/CounterProvider";
import { CartProvider } from "./Providers/CartProvider";
import { Provider } from "react-redux";
import { store } from "./Redux/store";

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <CartProvider>
            <CounterProvider>
                <App />
            </CounterProvider>
            <ToastContainer position="top-right" autoClose={1200}/>
        </CartProvider>
    </Provider>
)