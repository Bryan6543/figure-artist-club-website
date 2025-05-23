import HeaderMsg from "../components/HeaderMsg.jsx";
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import MeetTeam from "../components/MeetTeam.jsx";
import Membership from "../components/Membership.jsx";
import OurVibe from "../components/OurVibe.jsx";
import WeAreOpen from "../components/WeAreOpen.jsx";
import Events from "../components/Events.jsx";
import BodyTransformation from "../components/BodyTransformation.jsx";
import Footer from "../components/Footer.jsx";

function Home() {
  return (
    <>
      <HeaderMsg />
      <Navbar />
      <Hero />
      <OurVibe />
      <WeAreOpen />
      <MeetTeam />
      <Membership />
      <Events />
      <BodyTransformation />
      <Footer />
    </>
  );
}

export default Home;
