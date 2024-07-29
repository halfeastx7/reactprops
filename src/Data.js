import React from 'react'

function Data(props) {
    return (
    <div>
   <h1>First Number: {props.Number_X}<br></br>Second number: {props.Number_Y}</h1>
   <button onClick={() => props.chk()}>Add</button>
   </div>
    )
}

export default Data

