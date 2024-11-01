import { Outlet } from "react-router-dom"
import Header from "./UI/header"
import Navigation  from "./UI/navigation"

function App() {
  return (
    <>
      <Header>  
        <Navigation></Navigation>
      </Header>
      <Outlet />
    </>
  )
}

export default App
