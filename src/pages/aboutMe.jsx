import { Container, Image } from "@chakra-ui/react";
import ProjectCard from "../components/ui/projectCard";
import { projects } from "../lib/projects";

export default function AboutMe() {
  return (
    <>
      <main>
        <section className="aboutMe flex flex-col items-center">
          <Container className="flex justify-center items-center flex-wrap md:flex-nowrap md:w-2/3 h-1/2">
            <Image className="h-[400px] m-4" src="/IMG_0398-EDIT.jpg" alt="Picture of Joseph Stone"/>
            <p style={{lineHeight: 2}} className="text-black">
              Hello! My name is Joseph Stone. I love technology, always have. As a child, I would play on the family computer more than just game sites or YouTube; I would dive into the file structure of our family iMac, usually in an attempt to figure out how to get free games or modify how the desktop looked. I play video games whenever I have free time, usually simulation games, but I enjoy many genres, playing whatever game manages to capture my interest. I also love to read and listen to music. In everything I do, I hope to enjoy it to the fullest.
            </p>
          </Container>
          <h3 className="text-3xl md:text-7xl text-black h-64 flex items-center">Projects</h3>
          <div className="w-11/12 flex flex-wrap justify-center items-center mb-8">
            {projects.map((item, index) => (
              <ProjectCard key={index} proj={item}/>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
