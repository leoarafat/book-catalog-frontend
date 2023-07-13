import Hero from "./components/ui/Hero";
import Login from "./pages/Login";
import Navbar from "./pages/Navbar";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Login />
        <Register />
      </div>
    </>
  );
}

export default App;
