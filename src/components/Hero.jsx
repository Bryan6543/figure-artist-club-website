import heroImg from "../assets/heroimg.png";

function Hero() {
  return (
    <div className="flex flex-col items-center justify-center lg:flex-row lg:gap-20">
      <div className="">
        <p className="text-3xl text-center leading-snug lg:text-5xl logo-family lg:leading-[4rem] text-white">
          Fitness <br className="lg:hidden" />
          <span className="text-[var(--logo-red)] lg:text-white">
            is not a
          </span>{" "}
          <br />
          <span className="lg:text-[var(--logo-red)]">Destination</span> <br />
          <span className="text-[var(--logo-red)] lg:text-white">
            it's a way of life.
          </span>
        </p>
        <div className="hidden lg:block text-center mt-2 lg:text-5xl logo-family lg:leading-[4rem] text-white">
          <span className="text-[var(--logo-red)]">Strong Today</span> <br />
          <span>Stronger Tomorrow</span>
        </div>
      </div>

      <div>
        <img className="lg:pt-10" src={heroImg} alt="" />
      </div>
    </div>
  );
}

export default Hero;
