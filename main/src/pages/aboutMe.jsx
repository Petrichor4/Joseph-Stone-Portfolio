import { Avatar } from "@rewind-ui/core";

import "../styles/aboutMe.css";
export default function AboutMe() {
  return (
    <>
      <main>
        <section id="aboutMe">
          <h2>About Me</h2>
          <div className="container">
            <Avatar
              className="ml-[2.5%] mt-[2.5%] avatar"
              color="black"
              outlined={false}
              radius="md"
              size={50}
              src="https://scontent-sjc3-1.cdninstagram.com/v/t51.2885-19/33229015_2093121704310515_7703757889646624768_n.jpg?stp=dst-jpg_s206x206&_nc_cat=106&ccb=1-7&_nc_sid=bf7eb4&_nc_ohc=qsXvS9LrrOYQ7kNvgGhxJrJ&_nc_ad=z-m&_nc_cid=0&_nc_zt=24&_nc_ht=scontent-sjc3-1.cdninstagram.com&oh=00_AYCvEh8eSbHgp4m_RmwpvfPEzuqC2S-9f0XaV79-bEQ6Zg&oe=672C959B"
              // initials="JS"
            />
            <p>
              Hello! My name is Joseph Stone I am a full stack developer familiar with Javascript, React, Node, and PostSQL. I love to make beautiful, responsive and fast websites as well as manipulate data through SQL.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
