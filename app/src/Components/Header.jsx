const style = {
    height: "60px",
    color: "white",
    backgroundColor: "#222222",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
}

const Header = () => {
    return <div style={{style}}>
        <div>
            Logo
        </div>
        <div>
            Links
        </div>
        <div>
            Button
        </div>
    </div>
}

export default Header