import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../axios";
import { FaArrowRotateRight } from "react-icons/fa6";

const ApiCalling = () => {

    const [users, setUsers] = useState([])
    const [page, setPage] = useState(1)

    const getUsers = async () => {
        try {
            const limit = 15
            const skip = (page - 1) * limit
            const { data } = await api.get(`/users?limit=${limit}&skip=${skip}`)
            setUsers(users => ([...users, ...data.users]))
        } catch (error) {
            const err = error.response?.data.message
            return toast.error(err || error.message)
        }
    }

    useEffect(() => {
        getUsers()
    }, [page])

    return <div className="container-fluid">
        <div className="row p-2">
            {
                users.map(user => {
                    return <div key={user.id} className="col-12 col-sm-6 col-md-4 col-xl-3 p-2">
                        <h4>Name: {user.firstName}</h4>
                        <div className="text-truncate">Email: {user.email}</div>
                        <div>Gender: {user.gender}</div>
                        <div>Blood Group: {user.bloodGroup}</div>
                        <div>Phone: {user.phone}</div>
                    </div>
                })
            }
            <div className="mt-2 text-center" style={{cursor: "pointer"}} onClick={() => setPage(page => page + 1)}>Load More <FaArrowRotateRight /></div>
        </div>
    </div>
}

export default ApiCalling