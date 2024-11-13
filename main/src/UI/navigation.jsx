import { Link } from 'react-router-dom';

export default function Navigation() {
    const selected = (event) => {
        const navLinks = document.querySelectorAll('li');
        navLinks.forEach(link => {
          link.className = '';
        });
        const target = event.currentTarget;
        target.className = 'nav-link active';
      }

    return (
        <nav>
            <ul>
                <li onClick={selected}>
                    <Link className='link' to="/">About Me</Link>
                </li>
                <li onClick={selected}>
                    <Link className='link' to="/projects">Projects</Link>
                </li>
                <li onClick={selected}>
                    <Link className='link' to="/contact">Contact Me</Link>
                </li>
                <li onClick={selected}>
                    <Link className='link' to="/resume">Resume</Link>
                </li>
            </ul>
        </nav>
    )
}