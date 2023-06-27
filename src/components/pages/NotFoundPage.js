import { useEffect } from "react";
function NotFound() {
    useEffect(() => {
        document.title = '404'
    }, []);
    return (
        <div>404 page</div>
    )
}
export default NotFound;