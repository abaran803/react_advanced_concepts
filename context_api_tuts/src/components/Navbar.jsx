import Profile from "./Profile";
import UserDetails from "./UserDetails";

const Navbar = () => {
  console.log("Navbar Rendering");
  return (
    <nav>
      <Profile />
      <UserDetails />
    </nav>
  );
};

export default Navbar;
