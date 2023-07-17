import { useEffect } from "react";
import page404  from "../../src/images/error-404.svg";
import {Link} from "@mui/material";

function NotFound() {
    useEffect(() => {
        document.title = '404'
    }, []);
    return (
        <div className='page-404'>
            <img src={page404} alt="404"/>
            <div className='content'>
                <h1 className='title-404'>
                    We couldn't connect the dots.
                </h1>
                <p className='subtitle-404'>
                    This page was not found.You may have mistyped the address os the page may have moved.
                </p>
                <Link className='link-404' to={'/news'}> Take me to the home page</Link>
            </div>
        </div>
    )
}
export default NotFound;