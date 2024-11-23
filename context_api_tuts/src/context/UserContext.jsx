import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const { children } = props;
  const [user, setUser] = useState(null);
  const fetchUserData = async (id) => {
    setUser({ loading: true });
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const data = await response.json();
    setUser(data);
  };
  useEffect(() => {
    fetchUserData(1);
  }, []);
  return (
    <UserContext.Provider value={{ user, fetchUserData }}>
      {children}
    </UserContext.Provider>
  );
};
