import heroImg from "../assets/heroimg.png";

function Hero() {
  return (
    <div className="flex items-center justify-center gap-25">
      <div>
        <p className="text-5xl logo-family leading-15 text-white">
          Fitness is not a <br />
          <span className="text-[var(--logo-red)]">Destination</span>
          <br />
          its a way of life. <br />
          <span className="text-[var(--logo-red)]">Strong Today</span> <br />
          Stronger Tomorrow
        </p>
        <button className="font-bold text-xl bg-[var(--logo-red)] mt-12 p-4 rounded-3xl logo-second-family">
          Join the Movement
        </button>
      </div>
      <div>
        <img src={heroImg} alt="" />
      </div>
    </div>
  );
}

export default Hero;
