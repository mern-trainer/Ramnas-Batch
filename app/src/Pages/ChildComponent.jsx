const ChildComponent = ({ counter, setCounter, handleDataFromChild }) => {
    
    return <div>
        <button onClick={() => setCounter((prev) => prev + 1)}>Call</button>
    </div>
}

export default ChildComponent

// const ChildComponent = (props) => {
    
//     return <div>{props.data} {props.sample} {props.number}</div>
// }

// export default ChildComponent