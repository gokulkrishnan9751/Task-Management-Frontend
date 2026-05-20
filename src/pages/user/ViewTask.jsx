import React, { useState } from 'react'
import Table from '../../component/common/Table';

export default function ViewTask() {
  const task = [{ id: "1", title: "Task 1", description: "Description for Task 1" , start_date: "2024-06-01", end_date: "2024-06-10", status: "In Progress", priority: "Medium"}];

  const [tasks, setTasks] = useState(task)
  function handleChange(task_id, key, value) {
    const updatedTask = task.map((row) => {if(row.id === task_id){
      return { ...row, [key]: value}
    }})
    setTasks(updatedTask)
  }
  return (
    <div>
      <Table data={tasks} handleChange={handleChange}></Table>
    </div>
  )
}
