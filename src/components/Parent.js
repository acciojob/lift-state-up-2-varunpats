import React, { useState } from "react";
import Child from './Child';

const Parent = () => {
    const [inputValue, setInputValue] = useState("");

    const setVal = (data) => {
        setInputValue(data);
    }

    return (
        <>
            <h1 className="parent">Parent Component</h1>
            {inputValue && <p>{inputValue}</p>}
            <Child setData = {setVal} />
        </>
    )
}

export default Parent;