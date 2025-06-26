import ourVibeImg from "../assets/ourvibeimg.png";
import topleftsvg from "../assets/ourvibetoprightsvg.svg";
import SectionHeading from "./SectionHeading";
import SectionWrapper from "./SectionWrapper";

function OurVibe() {
  return (
    <SectionWrapper className="logo-second-family">
      <div className="lg:hidden pt-10 pb-10 flex justify-end">
        <img src={topleftsvg} alt="" />
      </div>

      <SectionHeading fadeText="Our Vibe" visibleText="Our Vibe" />

      <div className="text-center lg:text-left flex flex-col lg:flex-row justify-center align-center gap-18">
        <div className="hidden lg:inline">
          <img src={ourVibeImg} alt="" />
        </div>
        <div className="text-base p-7 leading-7 lg:p-0 lg:w-125 lg:text-2xl lg:leading-10">
          <p>
            At our gym, it's not just about lifting weights — it's about lifting
            each other up. We’re a small, tight-knit community where everyone
            knows your name and supports your journey. Whether you're just
            starting out or pushing new limits, you’ll find encouragement,
            motivation, and real connections here.
          </p>
          <ul className="pt-10 lg:pt-25">
            <li>- Annual Gym Competition</li>
            <li>- Community Support</li>
            <li>- Personal Coaching</li>
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default OurVibe;
