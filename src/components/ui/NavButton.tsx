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
      className="flex items-center gap-2 relative"
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
    >
      {component.icon}
      <h2 className="hidden sm:block">{component.label}</h2>
      {hover && (
        <AnimatePresence mode="wait">
          <motion.span
            key={"underline"}
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ width: 0 }}
            className="w-full bg-white h-[2px] absolute bottom-0"
          />
        </AnimatePresence>
      )}
    </MotionLink>
  );
}
