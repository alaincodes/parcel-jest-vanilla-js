import "./styles.scss";
import Navbar from "./Navbar";
import Intro from "./Intro";

const root = document.getElementById("root");
root.append(Navbar(), Intro());
// root.appendChild(Intro());
