import { BsGithub, BsLinkedin, BsEnvelopeFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import "../styles/App.css";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Header() {
  // Get scroll position
  const { scrollY } = useScroll();

  // Animate header height and width based on scroll
  const headerHeight = useTransform(scrollY, [0, 100], ["8rem", "3.5rem"]); // 32px → 14px
  const headerWidth = useTransform(scrollY, [0, 100], ["100%", "90%"]); // Full width → 90%
  const headerBorderRadius = useTransform(scrollY, [0,100], ["0", "50px"])
  const headerMargin = useTransform(scrollY, [0,100], ["0", ".75rem"])

  return (
    <>
      {/* Spacer to prevent layout shift */}
      <div className="h-32"></div>
      {/* Animated Header */}
      <motion.header
        className="fixed top-0 left-0 w-full z-50 flex justify-center"
        // style={{ height: headerHeight }}
      >
        <motion.div
          className="flex items-center justify-around bg-black rounded-full transition-all"
          style={{
            width: headerWidth,
            height: headerHeight,
            borderRadius: headerBorderRadius,
            margin: headerMargin,
          }}
          transition={{ease: ["easeIn", "easeOut"]}}
        >
          <h1 className="md:text-3xl">Joseph Stone</h1>
          <Link
            className="nav-button flex scale-[.85] md:scale-100 items-center hover:cursor-pointer duration-300"
            to={"https://github.com/Petrichor4"}
          >
            <BsGithub className="mb-[2px]" />
            <h2 className="m-1 hidden md:block">Github</h2>
          </Link>
          <Link className="nav-button scale-[.85] md:scale-100 flex items-center hover:cursor-pointer relative" to={"https://www.linkedin.com/in/joseph-stone-935691185/"}>
            <div className="w-full rounded-full absolute hover:shadow-custom"></div>
            <BsLinkedin className="m-[2px]" />
            <h2 className="m-1 hidden md:block">LinkedIn</h2>
          </Link>
          <div className="scale-[.85] md:scale-100 flex items-center hover:cursor-pointer relative">
            <BsEnvelopeFill className="m-[2px]" />
            <h2 className="nav-button m-1 hidden md:block"><a href="mailto:stonepreston05@gmail.com">Contact</a></h2>
          </div>
        </motion.div>
      </motion.header>
    </>
  );
}
