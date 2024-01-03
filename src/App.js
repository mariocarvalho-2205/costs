import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from './components/Footer.jsx'
import Container from './components/layout/Container.js'


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
