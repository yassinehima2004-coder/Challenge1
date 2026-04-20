import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Mainlayout = () => {
    return ( 
        <div className="flex flex-col items-center">
        <Navbar />
        <main>
            <Outlet />
        </main>
        <Footer/>
        
        
        </div>
     );
}
 
export default Mainlayout;