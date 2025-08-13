import { useRef, useState, useEffect } from "react";

export default function AnimatedSection({ children, animationType , className = "", delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  let baseClass = "scroll-anim-up"; // default

  if (animationType === "right") baseClass = "scroll-anim-right";
  else if (animationType === "left") baseClass = "scroll-anim-left";
  else if (animationType === "fit") baseClass = "scroll-anim-fit";

  const animateClass = visible ? "animate" : "";

  return (
    <section
      ref={ref}
      className={`${baseClass} ${animateClass} ${className}`}
      style={visible ? { animationDelay: `${delay}s` } : undefined}
    >
      {children}
    </section>
  );
}
