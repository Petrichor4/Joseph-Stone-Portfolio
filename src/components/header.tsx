import { BsGithub, BsLinkedin, BsEnvelopeFill } from "react-icons/bs";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import NavButton from "./ui/NavButton";
import { ComponentType } from "../lib/definitions";

export default function Header() {
  // Get scroll position
  const { scrollY } = useScroll();

  // Animate header height and width based on scroll
  const headerHeight = useTransform(scrollY, [0, 10], ["6rem", "3.5rem"]); // 32px → 14px
  const headerWidth = useTransform(scrollY, [0, 10], ["100%", "95%"]); // Full width → 90%
  const headerBorderRadius = useTransform(scrollY, [0, 10], ["0", "12px"]);
  const headerMargin = useTransform(scrollY, [0, 10], ["0", ".75rem"]);

  const components: ComponentType[] = [
    {
      link: "https://github.com/Petrichor4",
      icon: <BsGithub />,
      label: "Github",
    },
    {
      link: "https://www.linkedin.com/in/joseph-stone-935691185/",
      icon: <BsLinkedin />,
      label: "LinkedIn",
    },
    {
      link: "mailto:stonepreston05@gmail.com",
      icon: <BsEnvelopeFill />,
      label: "Contact",
    },
  ];

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
          className="flex items-center justify-around bg-gray-900 bg-opacity-50 shadow-lg transition-all"
          style={{
            width: headerWidth,
            height: headerHeight,
            borderRadius: headerBorderRadius,
            margin: headerMargin,
            backdropFilter: "blur(8px)",
          }}
        >
          <h1 className="md:text-3xl">Joseph Stone</h1>
          {components.map((item, index) => (
            <NavButton component={item} key={index} />
          ) )}
        </motion.div>
      </motion.header>
    </>
  );
}
