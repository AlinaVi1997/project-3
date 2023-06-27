import { useEffect } from "react";
function Tech() {
    useEffect(() => {
        document.title = 'Tech'
    }, []);
    return (
        <div>Tech page</div>
    )
}
export default Tech;