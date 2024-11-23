import "./App.css";
import Navbar from "./components/Navbar";
import { UserProvider } from "./context/UserContext";

function App() {
  console.log("App Rendering");
  return (
    <>
      <UserProvider>
        <Navbar />
      </UserProvider>
    </>
  );
}

export default App;
