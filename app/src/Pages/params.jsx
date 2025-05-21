// useParams() -> Get dynamic parameter from current URL

import { useParams } from "react-router"

const Params = () => {

    const { id, data } = useParams()

    return <div>
        { id } { data }
    </div>
}

export default Params