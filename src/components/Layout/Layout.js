import { Outlet } from "react-router-dom";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";


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