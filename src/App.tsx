import Hero from "./components/ui/Hero";
import Login from "./pages/Login";
import Navbar from "./pages/Navbar";

function App() {
  return (
    <>
      <div>
        <Navbar />

        <Hero />
        <Login />
      </div>
    </>
  );
}

export default App;
