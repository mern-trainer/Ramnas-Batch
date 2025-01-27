const LandingPage = () => {

    const age = 25 
    const sample = "Hello"

    const handleClick = () => {
        console.log("Button Clicked");
    }

    const functionWithArguments = (a, b) => {
        console.log(a + b)
    }

    return <div>
        <h1>Home</h1>
        <p>Age: {age} {sample}</p>
        <button onClick={() => {
            console.log("Button Clicked");
        }}>Click 1</button>
        <button onClick={handleClick}>Click 2</button>
        <button onClick={() => functionWithArguments(10,30)}>With Arguments</button>
    </div>
}

export default LandingPage