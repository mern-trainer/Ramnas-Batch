const Mapping = () => {

    const arr = [{name: "Alex", age: 20},{name: "Sam", age: 30},{name: "John", age: 40}, {name: "Bob", age: 50}]

    return <div>
        {
            // Key => Unique Identifier for each element to indentify which element is changed, deleted or added
            arr.map((element, index) => {
                return <div key={index}>
                    {element.name} - {element.age}
                </div>
            })
        }
    </div>
}

export default Mapping