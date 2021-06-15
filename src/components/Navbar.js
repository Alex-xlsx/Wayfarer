import { NavLink } from 'react-router-dom';

function NavBar(props) {
  return (
      <nav id="nav">
        <div className="links">
          <NavLink className="nav-link" exact to='/'>
            Home
          </NavLink>

          <NavLink className="nav-link" to="/" onClick={function scrollDown(){
            document.getElementById('cities').scrollIntoView({behavior:"smooth"})
            }} type="submit" value="/">
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

<button onClick={function scrollDown(){
                    document.getElementById('nav').scrollIntoView({behavior:"smooth"})
            }} type="submit" value="/">Scroll to Top</button>