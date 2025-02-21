import { useContext } from "react"
import { Link } from "react-router"
import { useCounter } from "../Providers/CounterProvider"

const SecondContext = () => {

    const { setCounter } = useCounter()

    return <div>
        <h1>Second Context</h1>
        <button onClick={() => setCounter((prev) => prev + 1)} className="btn btn-success">Increment</button>
        <Link to={"/context"}>Go to 1st Context Page</Link>
    </div>
}

export default SecondContext