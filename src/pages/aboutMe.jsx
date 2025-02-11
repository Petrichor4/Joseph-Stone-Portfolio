import { Container, Image } from "@chakra-ui/react";
import ProjCard from "../UI/customCard";
import { projects } from "../lib/projects";

export default function AboutMe() {
  return (
    <>
      <main>
        <section className="aboutMe flex flex-col items-center ml-2 mt-3">
          <Container className="flex m-10 justify-center items-center flex-wrap md:flex-nowrap md:w-1/2">
            <Image height={"200px"} src="/subject.png" alt="Picture of Joseph Stone"/>
            <p className="">
              Hello! My name is Joseph Stone I love building performant
              wesites that look and feel good to interact with. I only started my developer journey
              recently but I love to learn and collaberate with a team to build large scale apps.
            </p>
          </Container>
          <div className="w-11/12 flex flex-wrap justify-center items-center">
            {projects.map((item,index) => (
              <ProjCard key={index} proj={item}/>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
