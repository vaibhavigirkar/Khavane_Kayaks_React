import { useEffect } from "react";
import Home from "./pages/Home";

function App() {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

    const onScroll = () => {
      reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
          el.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
  }, []);

  return <Home />;
}

export default App;
