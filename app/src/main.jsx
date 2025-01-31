import { createRoot } from "react-dom/client" // named Import
import App from "./App"

createRoot(document.getElementById('root')).render(<App />)

// React => Element 
// React DOM => Sync changes to the DOM. 

// createRoot