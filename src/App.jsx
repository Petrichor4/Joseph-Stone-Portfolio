import { Outlet } from "react-router-dom";
import Header from "./components/header";
import Footer from "./UI/footer";
function App() {
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  );
}

export default App;
