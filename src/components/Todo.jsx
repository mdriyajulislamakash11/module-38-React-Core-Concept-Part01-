// 38-6 Read only props Two way of conditional rendering

import React from 'react'

// conditional rendering option 1
 function Todo({task, isDone}) {

// conditional rendering option 1    
    // if(isDone === true){
    //    return <li>Finish: {task}</li>
    // }else{
    //     return <li>worl on: {task}</li>
    // }

// conditional rendering option 2
    // if(isDone ===true){
    //     return <li>Finish: {task}</li>
    // }
    // return  <li>worl on: {task}</li>

// conditional rendering option 3
return <li>{isDone ? "Finished" : "Work On"} : {task}</li>

}

export default Todo;