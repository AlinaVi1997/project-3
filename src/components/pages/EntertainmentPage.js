import { useEffect } from "react";

function Entertainmment() {
    useEffect(() => {
        document.title = "Entertainment";
    }, []);
    return (
        <div> Entertainmment page</div>
    )
}
export default Entertainmment;