import ourVibeImg from "../assets/ourvibeimg.png";
import topleftsvg from "../assets/ourvibetoprightsvg.svg";

function OurVibe() {
  return (
    <div className="pt-12.5 pb-12.5 lg:pt-20 lg:pb-20 logo-second-family">
      
      <div className="lg:hidden flex justify-end">
        <img src={topleftsvg} alt="" />
      </div>

      <div className="relative logo-family flex justify-center h-15 lg:h-30 mb-7.5 lg:mb-20">
        <h1 className="absolute bottom-0 text-6xl lg:text-9xl opacity-5">
          Our Vibe
        </h1>
        <h2 className="absolute bottom-1 lg:bottom-3 text-3xl lg:text-6xl">
          Our Vibe
        </h2>
      </div>

      <div className="text-center lg:text-left flex flex-col lg:flex-row justify-center align-center gap-18">
        <div className="hidden lg:inline">
          <img src={ourVibeImg} alt="" />
        </div>
        <div className="text-base p-7 leading-7 lg:p-0 lg:w-125 lg:text-3xl lg:leading-10">
          <p>
            At our gym, it's not just about lifting weights — it's about lifting
            each other up. We’re a small, tight-knit community where everyone
            knows your name and supports your journey. Whether you're just
            starting out or pushing new limits, you’ll find encouragement,
            motivation, and real connections here.
          </p>
          <ul className="pt-10">
            <li>*Annual Gym Competition</li>
            <li>*Community Support</li>
            <li>*Personal Coaching</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default OurVibe;
