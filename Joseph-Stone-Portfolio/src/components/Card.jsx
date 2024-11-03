export default function Card({img, title, repo, site,}) {
    return (
        <>
        <div className="Card">
            <img src={img} alt="" />
            <div className="hidden">
                <h3>{title}</h3>
                <i className="fa-brands fa-github fa-2x"></i>
                <p>MERN stack</p>
            </div>
        </div>
        </>
    )
}