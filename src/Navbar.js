import { Routes, Route, NavLink } from "react-router-dom";
import NavbarCSS from "./Navbar.css";
import Home from "./Home";
import About from "./About";
import NoMatch from "./NoMatch";
import Users from "./Users";
import UserDetails from "./UserDetails";
import Admin from "./Admin";

function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/About">About</NavLink>
        </li>
        {/* <li>
          <NavLink to="/Products">Products</NavLink>
        </li> */}
      </ul>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="*" element={<NoMatch />}></Route>
        <Route path="Users" element={<Users />}>
          <Route path=":UsersId" element={<UserDetails />} />
          <Route path="Admin" element={<Admin />} />
        </Route>
        {/* <Route path="/Users/2" element={<UserDetails />} />
        <Route path="/Users/3" element={<UserDetails />} /> */}
      </Routes>
    </div>
  );
}
export default Navbar;
