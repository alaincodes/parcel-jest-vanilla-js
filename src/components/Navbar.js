import "./Navbar.scss";

const Navbar = () => {
  const Nav = document.createElement("nav");
  const NavLinks = document.createElement("ul");
  let NavNames = ["Home", "Team", "About", "Contact"];

  Nav.setAttribute("class", "nav-container");
  NavLinks.setAttribute("class", "nav-links");

  NavNames.forEach(name => {
    const NavLink = document.createElement("li");
    NavLink.setAttribute("class", "nav-link");
    NavLink.textContent = name;
    NavLinks.appendChild(NavLink);
  });

  Nav.appendChild(NavLinks);

  return Nav;
};

export default Navbar;
