import logo from "./logo.svg";
import "./App.css";
import User from "./components/User";

function App() {
  const user = ["apple", "kivi", "banana", "watermelon"];

  const filterUser = user.filter((item) => 
    item[0] === "a"
  );

  return (
    <div className="App">
      {filterUser.map((item, index) => {
        return <User name={item} key={index} />;
      })}
    </div>
  );
}

export default App;
