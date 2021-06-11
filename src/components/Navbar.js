import { NavLink } from 'react-router-dom';

function NavBar(props) {
  return (
      <container>
          <NavLink className="nav-link" exact to='/'>
            Home
          </NavLink>

          <NavLink className="nav-link" to='/posts'>
           Blog
          </NavLink>
      </container>
  );
}

export default NavBar;