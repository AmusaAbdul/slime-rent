import Navbar from "./components/navbar/navbar";
import Background from "./components/background/background"
import Properties from "./components/properties/properties";
import Services from "./components/services/services"
import Agents from "./components/agents/agents";
import PropertyTypes from "./components/propertyTypes/propertyTypes";
import Questions from "./components/questions/questions";
import Footer from "./components/footer/footer";
import Btnup from "./components/btnup/btnup"

export default function Home() {
  return (
    <div id="home">
      <Navbar />
      <div>
        <Background />
        <Properties />
        <Services />
        <Agents />
        <PropertyTypes />
        <Questions />
        <Btnup />
      </div>
      <Footer />
    </div>
  );
}
