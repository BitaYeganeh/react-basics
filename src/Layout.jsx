import { Outlet } from "react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";


const Layout = () => {
    return (
        <div>
            <Header />
            <div style={{width:"100%", height: "85vh"}}>
              <Outlet />
            </div>
            <Footer />
        </div>
    );
    
};

export default Layout;