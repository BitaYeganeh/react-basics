import { Outlet } from "react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";


const Layout = () => {
    return (
        <div>
            <Header />
            <div style={{width:"100%", height: "95vh"}}>
              <Outlet />
            </div>
            <Footer />
        </div>
    );
    
};

export default Layout;