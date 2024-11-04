import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/header.css";
import handleLink from "../components/links";
const pages = [
  "https://github.com/Petrichor4",
  "https://www.linkedin.com/in/joseph-stone-935691185/",
  "https://stackoverflow.com/users/28106211/joseph-stone",
];

export default function Footer() {
  return (
    <footer>
      <i
        onClick={() => handleLink(pages[0])}
        className="fa-brands fa-github fa-4x inline"
      ></i>
      <i
        onClick={() => handleLink(pages[1])}
        className="fa-brands fa-linkedin fa-4x"
      ></i>
      <i
        onClick={() => handleLink(pages[2])}
        className="fa-brands fa-stack-overflow fa-4x"
      ></i>
    </footer>
  );
}
