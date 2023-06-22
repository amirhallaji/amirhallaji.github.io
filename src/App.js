import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Section from "./components/Section";
import SideMenu from "./components/SideMenu";

function App() {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isSideMenuOpen ? "hidden" : "auto";
  }, [isSideMenuOpen]);

  return (
    <>
      <Header setIsSideMenuOpen={setIsSideMenuOpen} />
      <SideMenu
        setIsSideMenuOpen={setIsSideMenuOpen}
        isSideMenuOpen={isSideMenuOpen}
      />
      <main>
        <Hero />
        <Section title="education" />
        <Section title="experiences" />
        <Section title="certifications" />
        <Section title="projects" />
        <Section title="about" />
        <Section title="contact" />
      </main>
      <Footer />
    </>
  );
}

export default App;
