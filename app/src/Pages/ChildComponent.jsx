const ChildComponent = ({ counter, setCounter, handleDataFromChild }) => {
    
    return <div className="w-25">
        <button className="btn btn-danger w-100" onClick={() => setCounter((prev) => prev - 1)}>Decrement</button>
    </div>
}

export default ChildComponent

// const ChildComponent = (props) => {
    
//     return <div>{props.data} {props.sample} {props.number}</div>
// }

// export default ChildComponent

