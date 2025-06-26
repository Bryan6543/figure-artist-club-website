import CoachIMG from "../assets/coach1.png";
import { Link } from "react-router-dom";
import SectionHeading from "./SectionHeading";
import SectionWrapper from "./SectionWrapper";

function MeetCoach() {
  return (
    <SectionWrapper className="">
      <SectionHeading
        fadeText="Coach & Founder"
        visibleText="Meet the Coach/Founder"
      />

      <div className="text-center lg:text-left p-2 lg:p-0 flex flex-col-reverse lg:flex-row logo-second-family justify-center items-center gap-15">
        <div className="flex flex-col-reverse lg:flex-col lg:w-2xl lg:gap-7.5 gap-10">
          <p className=" lg:leading-10">
            <span className="text-base lg:text-3xl font-bold">
              Meet Coach/Founder Chinthaka{" "}
            </span>
            <br /> The driving force behind your transformation. With over 10
            years of experience in fitness, bodybuilding, and coaching, he has
            dedicated his life to helping others achieve their full physical and
            mental potential.
          </p>
          <p className="lg:leading-10">
            <span className="lg:text-3xl font-bold"> Train with Purpose </span>
            <br /> "Fitness isn't just a goal. It's a lifestyle, a mindset, and
            a battle worth fighting every day." - Coach Chinthaka
          </p>
          <div>
            <Link
              className="font-bold transition duration-300 ease-in-out hover:cursor-pointer hover:bg-white hover:text-black rounded-lg p-3 bg-[var(--logo-red)]"
              to="#"
            >
              More About the Coach
            </Link>
            {/* <a
              href="/coach"
              className="font-bold transition duration-300 ease-in-out hover:cursor-pointer hover:bg-white hover:text-black rounded-lg p-3 bg-[var(--logo-red)]"
            >
              More About the Coach
            </a> */}
          </div>
        </div>

        <div>
          <img className="mt-[-100px]" src={CoachIMG} alt="" />
        </div>
      </div>
    </SectionWrapper>
  );
}

export default MeetCoach;
