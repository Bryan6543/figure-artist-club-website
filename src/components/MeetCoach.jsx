import CoachIMG from "../assets/chinthakasoloass.png";
import { Link } from "react-router-dom";

function MeetCoach() {
  return (
    <div className="logo-family  mb-20">
      <div className="relative flex justify-center h-30 mb-20">
        <h1 className="absolute bottom-0 text-9xl z-10 opacity-5">
          Coach & Founder
        </h1>
        <h2 className="absolute bottom-3 text-6xl">Meet the Coach/Founder</h2>
      </div>

      <div className="flex logo-second-family justify-center items-center gap-15">
        <div className="flex flex-col w-2xl gap-7.5">
          <p className="leading-10">
            <span className="text-3xl font-bold">
              Meet Coach/Founder Chinthaka{" "}
            </span>
            <br /> The driving force behind your transformation. With over 10
            years of experience in fitness, bodybuilding, and coaching, he has
            dedicated his life to helping others achieve their full physical and
            mental potential.
          </p>
          <p className="leading-10">
            <span className="text-3xl font-bold"> Train with Purpose </span>
            <br /> "Fitness isn't just a goal. It's a lifestyle, a mindset, and
            a battle worth fighting every day." - Coach Chinthaka
          </p>
          <div>
            <a
              href="/coach"
              className="font-bold transition duration-300 ease-in-out hover:cursor-pointer hover:bg-white hover:text-black rounded-lg p-3 bg-[var(--logo-red)]"
            >
              More About the Coach
            </a>
          </div>
        </div>

        <div>
          <img src={CoachIMG} alt="" />
        </div>
      </div>
    </div>
  );
}

export default MeetCoach;
