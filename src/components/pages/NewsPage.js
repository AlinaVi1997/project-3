import { useEffect } from "react";
import NewsList from "../Layout/NewsList";
function News() {
    useEffect(() => {
        document.title = 'News'
    }, []);
    return (
        <div>
            <NewsList />
        </div>
    )
}
export default News;