import { useParams } from "react-router"
import { toast } from "react-toastify"
import { api } from "../axios"
import { useEffect, useState } from "react"

const SingleUserView = () => {

    const { id } = useParams()
    const [user, setUser] = useState(null)

    const singleUser = async () => {
        try {
            const { data } = await api.get(`/users/${id}`)
            setUser(data)
        } catch (err) {
            return toast.error("Error while fetching user info.")
        }
    }

    useEffect(() => {
        singleUser()
    }, [id])

    return <div className="w-25">
        {
            user && <div className="bg-light p-3 rounded">
                <div className="d-flex align-items-center justify-content-start gap-2"><img src={user.image} alt={user.firstName} className="rounded-circle me-2" style={{width: "30px", height: "30px"}}/><h5 className="text-truncate">{user.firstName} {user.lastName}</h5></div>
                <div className="text-truncate mt-1 w-100">Email: {user.email}</div>
                <div className="text-truncate mt-1 w-100">Mobile: {user.phone}</div>
                <div className="text-truncate mt-1 w-100">DOB: {user.birthDate}</div>
                <div className="text-truncate mt-1 w-100">Gender: {user.gender}</div>
                <div className="text-truncate mt-1 w-100">Age: {user.age}</div>
                <div className="text-truncate mt-1 w-100">Blood Group: {user.bloodGroup}</div>
            </div>
        }
    </div>
}

export default SingleUserView