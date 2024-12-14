import { Link } from "react-router-dom"
export const Header = ()=>{
    return(
        <div className="container bg-warning p-3 mt-3 sticky-top">
        <div className="row justify-content-between">
        
            <div className="col-2">
                <Link to="/">Home</Link>
                </div>
            <div className="col-2">
                <Link to="/products">Products</Link>
                </div>
            <div className="col-2">
                <Link to="/blog">Blog</Link>
                </div>

                <div className="col-2">
                <Link to="/registerForm">RegistrationForm</Link>
                </div>
        </div>
        </div>
    )
}