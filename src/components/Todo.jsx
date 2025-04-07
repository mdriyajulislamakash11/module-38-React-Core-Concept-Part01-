// 38-6 Read only props Two way of conditional rendering

import React from 'react'

// conditional rendering option 1
 function Todo({task, isDone}) {

// conditional rendering option 1    
    if(isDone === true){
       return <li>Finish: {task}</li>
    }else{
        return <li>worl on: {task}</li>
    }

// conditional rendering option 2
    if(isDone ===true){
        return <li>Finish: {task}</li>
    }
    return  <li>worl on: {task}</li>

// conditional rendering option 3
return <li>{isDone ? "Finished" : "Work On"} : {task}</li>

// conditional rendering option 4
return <li> {task} {isDone && ": Finished"}</li>

// conditional rendering option 5
return <li> {task} {isDone || ": do it"}</li>

// conditional rendering option 6
let listItems = '';
if(isDone === true){
    listItems = <li>Finish: {task}</li>
}else{
    listItems = <li>worl on: {task}</li>
}
return listItems
}

export default Todo;