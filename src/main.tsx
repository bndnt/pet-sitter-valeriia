import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
// Smooth scroll for all anchor links
document.addEventListener("click", function (e) {
  const target = e.target as HTMLElement;

  if (target.tagName === "A") {
    const href = (target as HTMLAnchorElement).getAttribute("href");

    if (href && href.startsWith("#") && href.length > 1) {
      e.preventDefault();

      const section = document.querySelector(href);
      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
