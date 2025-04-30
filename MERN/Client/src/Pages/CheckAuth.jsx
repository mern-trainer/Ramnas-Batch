import { api } from "../axios"

const CheckAuth = () => {

    const handleAuthCheck = async () => {
        const { data, status } = await api.get('/auth')
        console.log(data, status);
    }

    return <div>
        <button onClick={handleAuthCheck}>Check</button>
    </div>
}

export default CheckAuth