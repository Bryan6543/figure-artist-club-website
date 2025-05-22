import Hero from "../components/indexPage/Hero.jsx";
import MeetTeam from "../components/indexPage/MeetTeam.jsx";
import Membership from "../components/indexPage/Membership.jsx";
import OurVibe from "../components/indexPage/OurVibe.jsx";
import WeAreOpen from "../components/indexPage/WeAreOpen.jsx";

function Home() {
  return (
    <>
      <Hero />
      <OurVibe />
      <WeAreOpen />
      <MeetTeam />
      <Membership />
    </>
  );
}

export default Home;
