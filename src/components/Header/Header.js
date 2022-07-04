import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
    return(
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#"
          ><i className="fa fa-book" aria-hidden="true"></i
        ></a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <Link to="/" className='nav-link'>Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className='nav-link'>About Library</Link>
            </li>
            <li className="nav-item">
              <Link to="/rulesandregulations" className='nav-link'>Rules & Regulations</Link>
            </li>
            <li className="nav-item">
              <Link to="/PriceCard" className='nav-link'>Price Card</Link>
            </li>
            <li className="nav-item">
              <Link to="/Login" className='nav-link'>Login</Link>
            </li>
            <li className="nav-item">
              <Link to="/search" className='nav-link'>Search</Link>
            </li>
            <li className="nav-item">
              <Link to="/addbook" className='nav-link'>Add Book</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    );
}