import React, { useState } from "react";

const Child = (props) => {
    const [value, setValue] = useState("");

    const passData = (e) => {
        setValue(e.target.value);
        props.setData(value);
    }
    return (
        <>
            <h2>Child Component</h2>
            <input type="text" onChange={passData} />
        </>
    )
}

export default Child;