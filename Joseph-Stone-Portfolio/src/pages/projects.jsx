import Card from "../components/Card";

const projects = [
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJQeJyzgAzTEVqXiGe90RGBFhfp_4RcJJMQ&s",
    title: "WeatherDashboard",
    repo: "https://github.com/Petrichor4/Joseph-Stone-module-9-Challenge",
    site: "https://joseph-stone-module-9-challenge.onrender.com/",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJQeJyzgAzTEVqXiGe90RGBFhfp_4RcJJMQ&s",
    title: "BucketList",
    repo: "https://github.com/Petrichor4/Mini-Project",
    site: "https://jpsbucket.netlify.app/",
  },
  // Add more projects here
];

export default function Projects() {
  return (
    <main>
      <section>
        <h2>Projects</h2>
        <div className="container">
          {projects.map((project, index) => (
            <Card
              key={index}
              title={project.title}
              img={project.img}
              repo={project.repo}
              site={project.site}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
