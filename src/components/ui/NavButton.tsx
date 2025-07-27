import { motion, AnimatePresence } from "framer-motion";
import { ComponentType } from "../../lib/definitions";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function NavButton({ component }: { component: ComponentType }) {
  const MotionLink = motion(Link);
  const [hover, setHover] = useState(false);

  return (
    <MotionLink
      to={component.link}
      className="flex items-center gap-2 relative text-black hover:text-blue-700"
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
    >
      {component.icon}
      <h2 className="hidden sm:block text-lg">{component.label}</h2>
    </MotionLink>
  );
}
