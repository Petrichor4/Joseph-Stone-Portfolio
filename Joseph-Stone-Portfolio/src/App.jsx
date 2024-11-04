import { Outlet } from "react-router-dom";
import Header from "./UI/header";
import Navigation from "./UI/navigation";
import Footer from "./UI/footer";

function App() {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
