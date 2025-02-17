import Header from "./components/Header";
import Agents from "./components/Agents";

function App() {
  return (
    <div>
      <Header/>
      <h1 className="text-3xl flex justify-center p-2">Welcome!</h1>
      <Agents/>
    </div>
  );
}

export default App;
