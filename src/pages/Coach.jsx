import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import FadeInSection from "../components/FadeInSection.jsx";
import AboutCoach from "../components/AboutCoach.jsx";
import CoachDuo from "../components/CoachDuo.jsx";
import Achivements from "../components/Achivements.jsx";

function Coach() {
  return (
    <>
      {/* <HeaderMsg /> */}
      <Navbar />
      <FadeInSection delay={0.2}>
        <AboutCoach />
      </FadeInSection>
      <FadeInSection delay={0.2}>
        <CoachDuo />
      </FadeInSection>
      <FadeInSection delay={0.2}>
        <Achivements />
      </FadeInSection>
      <Footer />
    </>
  );
}

export default Coach;
