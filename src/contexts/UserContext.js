import { useEffect } from "react";
import { createContext, useState } from "react";
import { getUsers } from "../services/UserServices";

export const UserContext = createContext();

function UserContextProvider({ children }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers(setUsers);
  }, []);

  // console.log(users);

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
