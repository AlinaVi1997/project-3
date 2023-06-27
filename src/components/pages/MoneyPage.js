import { useEffect } from "react";
function Money() {
    useEffect(() => {
        document.title = 'Money'
    }, []);
    return (
        <div>Money page</div>
    )
}
export default Money;