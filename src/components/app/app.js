import { Routes, Route } from "react-router-dom";
import NewsPage from "../pages/NewsPage.js";
import NotFoundPage from "../pages/NotFoundPage.js";
import CategoryPage from "../pages/CategoryPage.js";
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
                <Route path="/news/:category" element={< CategoryPage />} />
                <Route path="*" element={<NotFoundPage />} />
                <Route path="/weather" element={< WeekContainer />} />
            </Route>
        </Routes>
        </div>
    )
}
export default App;
