import React, {useEffect} from "react";
import { Outlet } from "react-router-dom";
import Header from "../component/common/Header";
import SideBar from "../component/common/SideBar";
import AuthGuard from "../hoc/withAuth";
import { useUserInfo } from "../context/UserInfoContext";
import { getPriority, getStatus, getUserRole, fetchUsers } from "../hooks/commonApi";
import { useToast } from "../context/TostProvider";


function MainLayout() {
  const {setPriorityOptions, setStatusOptions, setUserRole, setUsers} = useUserInfo()
  useEffect(() => {
    initialApiCall();
  }, []);

  async function initialApiCall() {
    try {
      const [status, priority, role] = await Promise.all([
        getPriority(),
        getStatus(),
        getUserRole(),
      ]);

      setPriorityOptions(priority);
      setStatusOptions(status);
      setUserRole(role);

      if (role[0] === "admin") {
        const users = await fetchUsers();
        setUsers(users);
      }
    } catch (error) {
      console.log(error);
      useToast(error?.response?.data?.message || "Something went wrong");
    }
  }

  return (
    <div>
      <Header />
      <div>
        <SideBar />
        <Outlet />
      </div>
    </div>
  );
}

export default AuthGuard(MainLayout);