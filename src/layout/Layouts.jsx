import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Fade } from "react-awesome-reveal";

const Layouts = () => {
  return (
    <div>
      <div className="lg:w-[1100px] container mx-auto">
        <Fade duration={1500}>
          <Navbar></Navbar>
        </Fade>
        <Outlet></Outlet>
      </div>
      <Fade duration={1500}>
        <Footer></Footer>
      </Fade>
    </div>
  );
};

export default Layouts;
