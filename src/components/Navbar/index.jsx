import { Link } from 'react-router-dom'
import './styles.css';

const Navbar = () => {
  return (
    <nav className="navbar">
        <h2>
           <Link to={`/`}>Home</Link>
        </h2>
        <ul>
            <li>
                <Link to={`/`}>Home</Link>
                <Link to={`/new-post`} className="new-btn">Novo Post</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar