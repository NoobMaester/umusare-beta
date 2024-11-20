import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <div>
      <Header/>
      <h1 className="text-3xl flex justify-center p-2">Welcome!</h1>
      <Hero/>
    </div>
  );
}

export default App;
