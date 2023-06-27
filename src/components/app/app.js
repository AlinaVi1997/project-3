import { Routes, Route } from "react-router-dom";
import NewsPage from "../pages/NewsPage.js";
import SportPage  from "../pages/SportPage.js";
import EntertainmmentPage from "../pages/EntertainmentPage.js";
import LifePage from "../pages/LifePage.js";
import MoneyPage from "../pages/MoneyPage.js";
import TechPage from "../pages/TechPages.js";
import TravelPage from "../pages/TravelPage.js";
import OpinionPage from "../pages/OpinionPage.js";
import NotFoundPage from "../pages/NotFoundPage.js";
import Layout from "../Layout/Layout.js";
import NewsDetailsPage from "../pages/NewsDetailsPage.js";
import WeekContainer from "../pages/WeatherPage.js";
import "../../src/scss/style.css";
import "reset-css";
function App() {
    return (
        <div className="app">
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<NewsPage />} />
                <Route path="/news/:id/:search" element={< NewsDetailsPage/>} />
                <Route path="/sport" element={< SportPage/>} />
                <Route path="/entertainment" element={<EntertainmmentPage />} />
                <Route path="/life" element={< LifePage />} />
                <Route path="/money" element={<MoneyPage />} />
                <Route path="/tech" element={< TechPage/>} />
                <Route path="/travel" element={< TravelPage/>} />
                <Route path="/opinion" element={< OpinionPage/>} />
                <Route path="*" element={<NotFoundPage />} />
                <Route path="/weather" element={< WeekContainer />} />
            </Route>
        </Routes>
        </div>
    )
}
export default App;
