import React, { useState } from 'react'
import AddTask from '../AddTask'
import DaysList from '../DaysList'

export default function TasksContainer() {

const defaultState =  [
  {id:1, lable:'ПН', tasks:[
    {id:1, title:'Поесть', type:1},
    {id:2, title:'Поспать', type:2}
  ]},
  {id:2, lable:'ВТ', tasks:[]},
  {id:3, lable:'СР', tasks:[]},
  {id:4, lable:'ЧТ', tasks:[]},
  {id:5, lable:'ПТ', tasks:[]},
  {id:6, lable:'СБ', tasks:[
    {id:3, title:'Поесть', type:1},
    {id:4, title:'Побегать', type:2}
  ]},
  {id:7, lable:'ВС', tasks:[]},
];


const [days, setDays] = useState(defaultState);

  function addTask(title, type, day) {
    setDays(pre => {
      const targetDay = pre.find(({ id }) => id === day);
      targetDay.tasks = [...targetDay.tasks, {
        id: Date.now(), title, type
      }];
      return [...pre];
    });
  };

  const deleteTask = (taskId) => {
    setDays (pre => pre.map (day => {
      day.tasks = day.tasks.filter(({id}) => id !==taskId);
      return day
    })      
    );
  };
  
  const clearDay = (day) =>{
    setDays(pre => {
      const targetDay = pre.find(({ id }) => id === day);
      targetDay.tasks = [];
      return [...pre];
    });
  };

  return (
<div>
   <AddTask addTask={addTask}/>
   <DaysList days={days} clearDay={clearDay} deleteTask={deleteTask}/>
</div>

   
  )
}
