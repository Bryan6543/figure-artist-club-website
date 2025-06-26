import openSvg1 from "../assets/opensvg1.svg";
import openSvg2 from "../assets/opensvg2.svg";
import topleftsvg from "../assets/weareopentopleftsvg.svg";
import SectionWrapper from "./SectionWrapper";

function WeAreOpen() {
  return (
    <SectionWrapper className="relative logo-family">
      <div className="absolute top-0 left-0 lg:hidden">
        <img src={topleftsvg} alt="" />
      </div>

      <div className="hidden lg:inline absolute left-0 top-0">
        <img src={openSvg1} alt="" />
      </div>

      <div className="flex flex-col items-center justify-center pt-20 lg:pb-20">
        <div className="text-[var(--logo-white)] text-3xl pb-5 lg:pb-8 lg:text-5xl">
          <h1>We are Open</h1>
        </div>
        <div className="flex gap-3 flex-col lg:flex-row lg:gap-20">
          <div className="flex flex-col items-center">
            <p className="text-base lg:text-2xl">Monday to Saturday</p>
            <p className="text-base lg:text-xl text-[var(--logo-red)]">
              5:30am - 12:00pm
            </p>
            <p className="text-base lg:text-xl text-[var(--logo-red)]">
              ----
            </p>
            <p className="text-base lg:text-xl text-[var(--logo-red)]">
              3:00pm - 10:00pm
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-base lg:text-2xl">Sundays</p>
            <p className="text-base lg:text-xl text-[var(--logo-red)]">
              5:30am - 12:00pm
            </p>
            <p className="text-base lg:text-xl text-[var(--logo-red)]">
              ----
            </p>
            <p className="text-base lg:text-xl text-[var(--logo-red)]">
              3:00pm - 10:00pm
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-base lg:text-2xl">Poya Days</p><br className="lg:block hidden"/>
            <p className="text-base lg:text-xl text-[var(--logo-red)]">
              Closed
            </p>
          </div>
        </div>
      </div>

      <div className="hidden lg:inline absolute right-0 bottom-0">
        <img src={openSvg2} alt="" />
      </div>
    </SectionWrapper>
  );
}

export default WeAreOpen;
