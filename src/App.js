// import React from 'react'
// import Ecommerce from './Ecommerce'
// function App() {
//   const name = "Mern stack"
// function check(){
//   alert("button clicked")
// }
//   return (
//     <div>
//        <Ecommerce names={name} chk={check} />
//     </div>
//   )
// }
// export default App
//-----------------------------------------------

import React from 'react'
import Data from './Data'

function App() {
  const Data_X = 1234567890
  const Data_Y = 9876543210

  function check() {
    let Data_Z = Data_X + Data_Y
    alert("The sum of the numbers is " + (Data_Z))
     
  }
  return (


    <Data Number_X={Data_X}
      Number_Y={Data_Y} chk={check} />


  )
}

export default App