import { useEffect } from "react";
function Sport() {
    useEffect(() => {
        document.title = 'Sport'
    }, []);
    return (
        <div>Sport</div>
    )
}
export default Sport;