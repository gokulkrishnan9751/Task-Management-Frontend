import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../ui/Button";

const userMenu = [
  { to: "/admin/create-task", label: "Create Task" },
  { to: "/admin/request", label: "Request" },
  { to: "/admin/all-task", label: "All Task" },
];

const adminMenu = [
  { to: "", label: "Dashboard" },
  { to: "", label: "Users" },
  { to: "", label: "Roles" },
  ...userMenu,
];

const menu = {
  admin: adminMenu,
  user: userMenu,
};

export default function SideBar({ user }) {
  return (
    <div>
      {menu["user"].map((item, index) => (
        <NavLink key={index} to={item.to}>
          {item.label}
        </NavLink>
      ))}
      <Button>Collapse</Button>
    </div>
  );
}
