import About from "../component/About";
import Choose from "../component/Choose";
import Explore from "../component/Explore";
import Gallery from "../component/Gallery";
import Header from "../component/Header";
import Hero from "../component/Hero";
import Service from "../component/Service";
import Training from "../component/Training";

const HomeScreen = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Service />
      <Choose />
      <Gallery />
      <Explore />
      <Training />
      <About />
    </div>
  );
};

export default HomeScreen;
