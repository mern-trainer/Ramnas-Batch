import { useState } from "react"
import { Link } from "react-router"

const PasswordGenerator = () => {

    const [password, setPassword] = useState("")
    const [passwordHistory, setPasswordHistory] = useState([])

    const handlePasswordGenerator = () => {
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?"
        let i = 0
        let pass = ""
        while (i < 16) {
            const randomIndex = Math.floor(Math.random() * characters.length)
            pass += characters[randomIndex]
            i++
        }
        setPassword(pass)
        setPasswordHistory((passwordHistory) => ([pass, ...passwordHistory]))
    }

    return <div className="d-flex flex-column align-items-center gap-3 mt-4">
        <Link to="/todo">Go to todo</Link>
        <h1>Password Generator</h1>
        <div>{password}</div>
        <button onClick={handlePasswordGenerator}>Generate Password</button>
        {passwordHistory.join(" , ")}
    </div>
}

export default PasswordGenerator