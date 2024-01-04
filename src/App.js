import { Outlet } from "react-router-dom";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from './components/layout/Footer.jsx'
import Container from './components/layout/Container.jsx'


function App() {
  return (
    <>
        <Navbar />
          <Container customClass="min-height">
            <Outlet />
          </Container>
        <Footer />

    </>
  );
}

export default App;
