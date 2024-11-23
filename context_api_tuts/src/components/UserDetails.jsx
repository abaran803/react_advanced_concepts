import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const UserDetails = () => {
  const { user, fetchUserData } = useContext(UserContext);
  if (user) {
    return (
      <div>
        <h1>User Details</h1>
        <p>User Id: {user.id}</p>
        <p>User Name: {user.name}</p>
        <p>User Email: {user.email}</p>
        <p>User Phone: {user.phone}</p>
        <button
          disabled={user && user.loading === true}
          onClick={() => fetchUserData(Math.floor(Math.random() * 10 + 1))}
        >
          Fetch Random User
        </button>
      </div>
    );
  }
  return <div>Login</div>;
};

export default UserDetails;
