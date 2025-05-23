import openSvg1 from "../assets/opensvg1.svg";
import openSvg2 from "../assets/opensvg2.svg";

function WeAreOpen() {
  return (
    <div className="relative logo-family flex items-center justify-center mb-20">
      <div className="absolute left-0 top-0">
        <img src={openSvg1} alt="" />
      </div>
      <div className="flex flex-col items-center justify-center pt-20 pb-20">
        <div className="pb-8 text-6xl">
          <h1>We are Open</h1>
        </div>
        <div className="flex gap-20">
          <div className="flex flex-col items-center">
            <p className="text-3xl">Monday to Saturday</p>
            <p className="text-2xl text-[var(--logo-red)]">4am - 12pm</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-3xl">Sundays</p>
            <p className="text-2xl text-[var(--logo-red)]">4am - 1pm</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-3xl">Public Holidays</p>
            <p className="text-2xl text-[var(--logo-red)]">Closed</p>
          </div>
        </div>
      </div>
      <div className="absolute right-0 bottom-0">
        <img src={openSvg2} alt="" />
      </div>
    </div>
  );
}

export default WeAreOpen;
