import { useEffect } from "react";
function Opinion() {
    useEffect(() => {
        document.title = 'Opinion'
    }, []);
    return (
        <div>Opinion</div>
    )
}
export default Opinion