import "../styles/Card.css";
import handleLinks from "./links";

export default function Card({ img, title, repo, site }) {
  return (
    <>
      <div className="card">
        <img src={img} alt="" />
        <div className="overlay">
          <h3 onClick={() => handleLinks(site)}>{title}</h3>
          <i
            onClick={() => handleLinks(repo)}
            className="fa-brands fa-github fa-2x"
          ></i>
          <p>MERN stack</p>
        </div>
      </div>
    </>
  );
}
