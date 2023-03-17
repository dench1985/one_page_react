import React, { useState } from 'react'
import Task from '../Task'
import DeleteButton from '../UI/DeleteButton'
import s from './style.module.css'

export default function Day({id, lable, tasks,clearDay,deleteTask}) {

const [showDelete, setShowDelete] = useState(false)




  return (
    <div 
    onMouseEnter={()=> setShowDelete(true)}
    onMouseLeave={()=> setShowDelete(false)}
    className={s.day_card}>
      <div className={s.label} >{lable}</div>
      <div className={s.tasks_block}>
        {
          tasks.map(task => <Task key={task.id} {...task} deleteTask={deleteTask}/>)
         }
      </div>
      {
        showDelete
        ?<DeleteButton onClick={()=>clearDay(id)}>X</DeleteButton>
        : ''
      }
 
     
             
             
    </div>
  )
}
