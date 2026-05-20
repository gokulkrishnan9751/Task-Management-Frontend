import React from "react";
import Card from "../component/ui/Card";

export default function TaskCard({ task, children }) {
  return (
    <Card>
        <h3>Task Name: {task.title}</h3>
        <p>Task Details: {task.description}</p>
        <div>Assigned To: {task.assignee}</div>
        <div>Priority: {task.priority}</div>
        <div>Update Date: {task.update_date}</div>
        <div>
            {children}

        </div>
    </Card>
  );
}
