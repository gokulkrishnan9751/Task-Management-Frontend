import React, { useState } from "react";
import Button from "../../component/ui/Button";
import TaskCard from "../../layout/TaskCard";

export default function StatusRequest() {
  const initialTasks = [
    {
      id: "1",
      title: "Task 1",
      description: "Description for Task 1",
      start_date: "2024-06-01",
      update_date: "2012-02-01",
      assignee: "user1",
      status: "In Progress",
      priority: "Medium",
      review: "",
    },
    {
      id: "1",
      title: "Task 1",
      description: "Description for Task 1",
      start_date: "2024-06-01",
      update_date: "2012-02-01",
      assignee: "user1",
      status: "In Progress",
      priority: "Medium",
      review: "",
    },
    {
      id: "1",
      title: "Task 1",
      description: "Description for Task 1",
      start_date: "2024-06-01",
      update_date: "2012-02-01",
      assignee: "user1",
      status: "In Progress",
      priority: "Medium",
      review: "",
    },
  ];

  const [tasks, setTasks] = useState(initialTasks);

  function handleReviewChange(id, value) {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, review: value } : task)),
    );
  }

  function handleReject(task) {
    console.log("Rejected:", task);
  }

  function handleApprove(task) {
    console.log("Approved:", task);
  }

  return (
    <div>
      {tasks.map((task) => (
        <TaskCard task={task} key={task.id}>
          <label>Review</label>
          <input type="text" value={task.review} onChange={(e) => handleReviewChange(task.id, e.target.value)}/>
          <Button onClick={() => handleReject(task)}> Reject </Button>
          <Button onClick={() => handleApprove(task)}> Approve </Button>
        </TaskCard>
      ))}
    </div>
  );
}
