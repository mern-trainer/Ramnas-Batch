import { useEffect, useState } from "react"
import { FaArrowRotateRight } from "react-icons/fa6"
import { toast } from "react-toastify"
import { api } from "../axios"
import { useNavigate } from "react-router"

const ApiCalling = () => {

    const [users, setUsers] = useState([])
    const [page, setPage] = useState(1)
    const [totalUsers, setTotalUsers] = useState(0)

    const navigate = useNavigate()

    const getUsers = async () => {
        try {
            const limit = 30
            const skip = (page - 1) * limit
            const { data } = await api.get(`/users?limit=${limit}&skip=${skip}`)
            setUsers(users => ([...users, ...data.users]));
            setTotalUsers(data.total)
        } catch (err) {
            return toast.error("Error occured while fetching users.")
        }
    }

    useEffect(() => {
        getUsers()
    }, [page])

    return <div>
        <h2 className="text-center text-uppercase mt-2 mb-4">List Of Users</h2>
        <div className="container-fluid">
            <div className="text-center mb-2">Loaded: {users.length}/{totalUsers} users</div>
            <div className="row g-2">
                {
                    users.map(user => {
                        return <div key={user.id} className="col-12 col-sm-6 col-md-4 col-xl-3 text-start">
                            <div className="bg-light p-3 rounded">
                                <div className="d-flex align-items-center justify-content-start gap-2"><img src={user.image} alt={user.firstName} className="rounded-circle me-2" style={{width: "30px", height: "30px"}}/><h5 className="text-truncate">{user.firstName} {user.lastName}</h5></div>
                                <div className="text-truncate mt-1 w-100">Email: {user.email}</div>
                                <div className="text-truncate mt-1 w-100">Mobile: {user.phone}</div>
                                <div className="text-truncate mt-1 w-100">DOB: {user.birthDate}</div>
                                <div className="text-truncate mt-1 w-100">Gender: {user.gender}</div>
                                <div className="text-truncate mt-1 w-100">Age: {user.age}</div>
                                <div className="text-truncate mt-1 w-100">Blood Group: {user.bloodGroup}</div>
                                <button className="btn btn-primary w-100 mt-2" onClick={() => navigate(`/view/${user.id}`)}>View Details</button>
                            </div>
                        </div>
                    })
                }
            </div>
            {users.length != totalUsers && <div className="text-center my-3" style={{ cursor: "pointer" }} onClick={() => setPage(page => page + 1)}>More <FaArrowRotateRight /></div>}
        </div>
    </div>
}

export default ApiCalling