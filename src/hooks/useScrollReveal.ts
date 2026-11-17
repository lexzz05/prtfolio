import { useEffect } from "react";

export default function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    document
      .querySelectorAll(
        ".reveal, .reveal-left, .reveal-right, .reveal-scale"
      )
      .forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);
}