import { motion } from "framer-motion";
import { SCRIBBLE_PATH } from "@/lib/path";
export default function AnimateScribble() {
return (
<svg
viewBox="0 0 9115 7892"
fill="none"
className="hidden md:block absolute -z-10 top-0 right-0 h-full w-auto"
style={{ maxWidth: "55vw", transform: "translateX(-10%)" }}
>
<motion.path
d={SCRIBBLE_PATH}
stroke="oklch(82.7% 0.119 306.383)"
strokeWidth={200}
initial={{ pathLength: 0 }}
animate={{ pathLength: 1 }}
transition={{ duration: 3, ease: "easeInOut" }}
/>
</svg>
  );
}