import { Outlet } from "react-router-dom";
import Header from "./components/header";
import Footer from "./UI/footer";
function App() {
  return (
    <>
      <Header />
      <Outlet />
      <div className="h-16 w-full"></div>
      <Footer />
    </>
  );
}

export default App;
