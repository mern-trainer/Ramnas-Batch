import "./Header.css"
import volvo from "../../src/assets/volvo.png"
import { RiUser3Line } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";


const Header = () => {
    return <div className="header-container">
        <div>
            <img src={volvo} alt="volvo" />
        </div>
        <ul className="nav">
            <li>Our Cars</li>
            <li>Shop</li>
            <li>Owners</li>
            <li>About us</li>
        </ul>
        <div className="right-section">
            <button><RiUser3Line size={20} /> Sign in</button>
            <CiSearch size={25} />
        </div>
    </div>
}

export default Header