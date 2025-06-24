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
import FadeInSection from "../components/FadeInSection.jsx";
import MeetCoach from "../components/MeetCoach.jsx";

function Home() {
  return (
    <>
      {/* <HeaderMsg /> */}
     <Navbar />
      <FadeInSection><Hero /></FadeInSection>
      <FadeInSection delay={0.2}><OurVibe /></FadeInSection>
      <FadeInSection delay={0.2}><WeAreOpen /></FadeInSection>
      <FadeInSection delay={0.2}><MeetCoach/></FadeInSection>
      {/* <FadeInSection delay={0.2}><MeetTeam /></FadeInSection> */}
      <FadeInSection delay={0.2}><BodyTransformation /></FadeInSection>
      {/* <FadeInSection delay={0.2}><Membership /></FadeInSection> */}
      <FadeInSection delay={0.2}><Events /></FadeInSection> 
      <Footer />
    </>
  );
}

export default Home;
