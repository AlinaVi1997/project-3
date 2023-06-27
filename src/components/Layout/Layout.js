import { Outlet } from "react-router-dom";
import Header from "../Layout/Header.js";
import Footer from "../Layout/Footer.js";


function Layout() {
    return (
        <div>
            <Header />
            <main>
                <div className="main-wrapper container">
                  <Outlet />
                </div>
            </main>
            <Footer />    
        </div>
    )
}
export default Layout;