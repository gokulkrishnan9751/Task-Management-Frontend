import React, { useEffect, useState } from "react";
import TaskCard from "../../layout/TaskCard";
import { useUserInfo } from "../../context/UserInfoContext";
import { fetchAdminTasks, fetchUserTasks } from "../../hooks/task";
import { useToast } from "../../context/TostProvider";

export default function AllTask() {
  const { userRole } = useUserInfo();
  const [tasks, setTasks] = useState()
  useEffect(() => {
    if(userRole[0] === "admin") {
      fetchAdminTasks().then((res) => setTasks(res)).catch((e) => console.log(e))
    } else if (userRole[0] === "user") {
      fetchUserTasks().then((res) => setTasks(res)).catch((e) => console.log(e))
    }
  })

  return (
    <>
      {tasks && tasks.map((task) => (
        <TaskCard key={task.id} task={task}></TaskCard>
      ))}
    </>
  );
}
