// import React, { useContext, useState } from 'react'

// export const Todolist = () => {
//     const [item, setitem] = useState('')
//     const [itemss, setitemss] = useState([])

//     const itemev = (event) => {
//         setitem(event.target.value)

//     }
//     const litt = () => {
//         setitemss((previous) => {
//             return [...previous,item]
//         });
//     }

//     return (
//         <div className="MAIN_DIV">
//             <div className="center">
//                 <h1>todo list</h1>
//             </div>
//             <input type="text" placeholder="add itme" value={item} onChange={itemev} />
//             <button onClick={litt} >click me</button>

//             <br />
//             <ol>
//                 {
//                     itemss.map((val) => {

//                         return <li>{val}</li>


//                     })

//                 }






//             </ol>





//         </div>
//     )
// }
// export default Todolist;

import React, { useState } from 'react'

export const Todolist = () => {
    const def = (e) => {
        setitem(e.target.value)

    }

    const frhh = () => {
        setitn((prev) => {
            return [...prev, item]
        })

    }
    const top = (index) => {
        setdel((prev) => {
            return prev.filter((arr,el,index)=>{
                return index!==index

            })




        })
    }
    const [item, setitem] = useState("hii")
    const [itn, setitn] = useState([])
    const [del, setdel] = useState()
    return (
        <div className="gaba">
            <div className="mc">
                <h1>the si  </h1>


                <input type="text" placeholder="add itne" onChange={def} />
                <button onClick={frhh}>click me</button>



            </div>

            <ol>
                {
                    itn.map((rg,index) => {
                        return <li>{rg}<button onSelect={top} key={index}>dlete</button>
                            
                   
                   
                   </li>

               })
           }
        </ol>

    </div>
    )
}
export default Todolist;
