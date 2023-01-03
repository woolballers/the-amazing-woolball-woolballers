import Profile from "./components/profile";
import NameManagement from "components/landingPage/nameManagement";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Profile />
        <div> &nbsp; &nbsp; &nbsp; </div>
        <NameManagement />
      </div>
    </div>
  );
}

export default App;
