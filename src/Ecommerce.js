import React from 'react'
function Ecommmerce(props) {
  return (
    <div>
        <h1>
           {props.names}
        </h1>
        <button onClick={() => props.chk()}>click me</button>
    </div>
  )
}export default Ecommmerce
