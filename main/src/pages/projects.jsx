import Card from "../components/Card";

const projects = [
  {
    img: "https://i.imgur.com/CZwyyPV.png",
    title: "WeatherDashboard",
    repo: "https://github.com/Petrichor4/Joseph-Stone-module-9-Challenge",
    site: "https://joseph-stone-module-9-challenge.onrender.com/",
  },
  {
    img: "https://i.imgur.com/bXz4qAp.png",
    title: "BucketList",
    repo: "https://github.com/Petrichor4/Mini-Project",
    site: "https://jpsbucket.netlify.app/",
  },
  {
    img: "https://i.imgur.com/WtGU2qj.png",
    title: "My Recipe List",
    repo: "https://github.com/Petrichor4/my-recipe-book",
    site: "https://petrichor4.github.io/my-recipe-book/"
  }
  // Add more projects here
];

export default function Projects() {

  return (
    <main>
      <section id="projects" className="flex relative justify-center">
        <h2 className="absolute top-0 left-0">Projects</h2>
        <div className="container m-20">
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
