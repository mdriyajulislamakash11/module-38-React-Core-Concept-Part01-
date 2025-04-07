// 38-6 Read only props Two way of conditional rendering

import React from 'react'

// conditional rendering option 1
 function Todo({task, isDone}) {
    if(isDone === true){
       return <li>Finish: {task}</li>
    }else{
        return <li>worl on: {task}</li>
    }
}

export default Todo;