import { useEffect } from "react";
function Travel() {
    useEffect(() => {
        document.title = 'Travel'
    }, []);
    return (
        <div>Travel page</div>
    )
}
export default Travel;