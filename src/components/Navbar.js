import { NavLink } from 'react-router-dom';

function NavBar(props) {
  return (
      <nav id="nav">
        <div className="links">
          <NavLink className="nav-link" exact to='/'>
            Home
          </NavLink>

          <NavLink className="nav-link" to='/cities'>
            Blog
          </NavLink>
        </div>
        <div className="nav-dummy">
          <p class="fa fa-facebook"></p>
          <p class="fa fa-instagram"></p>
          <p class="fa fa-twitter"></p>
          <p class="fa fa-github"></p>
          <input type="text" placeholder="search..."></input>
        </div>
      </nav>
  );
}

export default NavBar;