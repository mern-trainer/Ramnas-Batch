import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

// axios -> library to make api calls
// http methods -> get, post, put, delete, patch

// get -> get data from api
// post -> send data to api
// put -> replace data in api
// delete -> delete data from api
// patch -> partially update data in api

const ApiCalling = () => {

    const [users, setUsers] = useState([])

    const getUsers = async () => {
        try {
            // const response = await fetch("https://dummyjson.com/users")
            // const res = await response.json()
            const { data } = await axios.get("https://dummyjson.com/users")
           setUsers(data.users)
        } catch (error) {
            return toast.error(error.message)
        }
    }

    useEffect(() => {
        getUsers()
    }, [])

    return <div className="d-flex flex-column gap-2 p-2">
        {
            users.map(user => {
                return <div key={user.id} className="bg-light p-2">
                    <h3>{user.firstName}</h3>
                    <div>{user.email}</div>
                </div>
            })
        }
    </div>
}

export default ApiCalling