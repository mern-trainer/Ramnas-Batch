import { memo } from "react";

const ChildComponent = ({ counter }) => {
    console.log("Child Component rendered");
    return <div>Child Component = {counter}</div>
}

export default memo(ChildComponent)