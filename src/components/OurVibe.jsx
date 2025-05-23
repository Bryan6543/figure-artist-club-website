import ourVibeImg from "../assets/ourvibeimg.png";

function OurVibe() {
  return (
    <div className="pt-20 pb-20 logo-second-family">
      <div className="relative flex justify-center h-30 mb-20">
        <h1 className="absolute bottom-0 text-9xl z-10 opacity-5">Our Vibe</h1>
        <h2 className="absolute bottom-3 text-6xl">Our Vibe</h2>
      </div>
      <div className="flex justify-center align-center gap-18">
        <div>
          <img src={ourVibeImg} alt="" />
        </div>
        <div className="w-125 text-3xl leading-10">
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
