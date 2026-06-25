import React, { useState } from "react";
import FeildSet from "../../component/common/FeildSet";
import Select from "../../component/ui/Select";
import { api } from "../../lib/api";
import { createTask } from "../../hooks/adminApi";
import { useToast } from "../../context/TostProvider";
import { useUserInfo } from "../../context/UserInfoContext";

const fields = [
  { label: "Title:", name: "title", type: "text" },
  { label: "Description:", name: "description", type: "text" },
  { label: "Start Date:", name: "start_date", type: "date" },
  { label: "End Date:", name: "end_date", type: "date" },
  { label: "Estimated Hour:", name: "estimated_hours", type: "text" },
];

const initialState = {
  title: "",
  description: "",
  assignee_id: "",
  status_id: "",
  priority_id: "",
  start_date: "",
  end_date: "",
  estimated_hours: "",
};

export default function CreateTask() {
  const { statusOptions, priorityOptions, users } = useUserInfo();
  const addToast = useToast();

  const [errMsg, setErrMsg] = useState(initialState);
  const [taskData, setTaskData] = useState(initialState);

  function handleChange(key, value) {
    setTaskData((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  function handleSubmit() {
    createTask(taskData)
      .then((res) => {
        addToast("Task Saved Successfully", "success");
      })
      .catch((err) => {
        addToast(err);
      });
  }

  return (
    <div>
      {fields.map((field, index) => (
        <FeildSet
          key={index}
          label={field.label}
          value={taskData[field.name]}
          type={field.type}
          errMSg={errMsg[field.name]}
          onChange={(e) => handleChange(field.name, e.target.value)}
        />
      ))}

      <div>
        <label>Assignee:</label>
        <Select
          value={taskData.assignee_id}
          onChange={(e) => handleChange("assignee_id", e.target.value)}
          options={users}
          keyValue="id"
          label="user_name"
        />
      </div>

      <div>
        <label>Status:</label>
        <Select
          value={taskData.status_id}
          onChange={(e) => handleChange("status_id", e.target.value)}
          options={statusOptions}
          keyValue="id"
          label="priority_name"
        />
      </div>

      <div>
        <label>Priority:</label>
        <Select
          value={taskData.priority_id}
          onChange={(e) => handleChange("priority_id", e.target.value)}
          options={priorityOptions}
          keyValue="id"
          label="status_name"
        />
      </div>
      <button onClick={() => handleSubmit()}>Submit</button>
    </div>
  );
}
