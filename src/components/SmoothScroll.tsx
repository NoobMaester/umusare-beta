import { motion } from "framer-motion";
import { useEffect, useRef, ReactNode } from "react";

interface SmoothScrollProps {
  children: ReactNode;
  targetId: string;
}

const SmoothScroll = ({ children, targetId }: SmoothScrollProps) => {
  const targetRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (targetId) {
      targetRef.current = document.getElementById(targetId);
    }
  }, [targetId]);

  const handleClick = () => {
    if (targetRef.current) {
      // Use smooth scrolling
      targetRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <motion.div
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      {children}
    </motion.div>
  );
};

export default SmoothScroll;