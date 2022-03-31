import '../Styles/NavBar.css'
import Home from '../Pages/Home';
import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
        <div className="navBar">
            <h1 className="navTitle">Chat-the-Pat</h1>
            <Link to="/" element={<Home />} className="Link1"> Home </Link>
        </div>
    );
}

export default NavBar;