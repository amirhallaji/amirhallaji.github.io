import amirHallaji from "../assets/images/amir-hallaji.jpg";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero section">
      <div className="heroImageWrapper">
        <img src={amirHallaji} alt="Ali Ghasemi" className="heroImage" />
      </div>
      <main className="heroMain">
        <h1>
          My name is Amir.
        </h1>
        <h2>Software Engineer and Artificial Intelligence student</h2>
      </main>
    </section>
  );
};

export default Hero;
