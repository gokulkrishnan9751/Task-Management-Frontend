import React, { useEffect, useContext } from "react";
import { createContext, useState } from "react";
import { useToast } from "./TostProvider";

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [userInfo, setUserInfo] = useState([]);
  const [userRole, setUserRole] = useState("");
  const [users, setUsers] = useState([]);
  const [statusOptions, setStatusOptions] = useState([]);
  const [priorityOptions, setPriorityOptions] = useState([]);

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo, statusOptions, priorityOptions, userRole, users, setPriorityOptions, setStatusOptions, setUserRole, setUsers }}>
      {children}  
    </UserContext.Provider>
  );
}

export const useUserInfo = () => {
  const context = useContext(UserContext);
  return context;
};
