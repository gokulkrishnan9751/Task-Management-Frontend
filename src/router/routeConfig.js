import Login from "../pages/authendication/Login";
import Register from "../pages/authendication/Register";
import ViewTask from "../pages/user/ViewTask";
import CreateTask from "../pages/admin/CreateTask";
import DashBoard from "../pages/admin/DashBoard";
import Users from "../pages/admin/Users";
import CreateUsers from "../pages/admin/CreateUsers";
import StatusRequest from "../pages/admin/StatusRequest";
import AllTask from "../pages/admin/AllTask";

export const publicRoutes = [
  {
    to: "/",
    element: Login,
  },
  {
    to: "/register",
    element: Register,
  },
];

export const userRoutes = [
  {
    to: "tasks",
    element: ViewTask,
  },

];

export const adminRoutes = [
  {
    to: "dashboard",
    element: DashBoard,
  },
  {
    to: "users",
    element: Users,
  },
  {
    to: "create-user",
    element: CreateUsers,
  },
  {
    to: "request",
    element: StatusRequest
  },
  {
    to: "create-task",
    element: CreateTask,
  }, 
  {
    to:"all-task",
    element: AllTask
  },
];
