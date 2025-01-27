const PasswordGenerator = () => {

    const handlePasswordGenerator = () => {
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?"
        let i = 0
        let password = ""
        while (i < 16) {
            const randomIndex = Math.floor(Math.random() * characters.length)
            const randomCharacter = characters[randomIndex]
            password += randomCharacter
            i++
        }
        const pass = document.getElementById("password")
        pass.innerHTML = password
    }

    return <div>
        <h1>Password Generator</h1>
        <div id="password">...</div>
        <button onClick={handlePasswordGenerator}>Generate Password</button>
    </div>
}

export default PasswordGenerator