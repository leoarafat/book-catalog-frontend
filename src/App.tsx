import MainLayout from "./layouts/MainLayouts";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <div>
        <MainLayout />
        <Toaster position="top-center" reverseOrder={false}></Toaster>
      </div>
    </>
  );
}

export default App;
