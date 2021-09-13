import {Link} from 'react-router-dom';


function Navbar(){
    return (
        <nav className="navbar">
            <h1>Blog website</h1>
            <div className="links">
                <Link to="/BlogWebsite/">Home</Link>
                <Link to="/BlogWebsite/create">New Blog</Link>
            </div>
        </nav>
    )
}


export default Navbar;
