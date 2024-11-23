import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);
  console.log("Profile Rendering");
  if (user) {
    return <div>{user.name}</div>;
  }
  return <div>Login</div>;
};

export default Profile;
