import eventBanner from "../assets/eventsidebanner.png";
import event1 from "../assets/mrstrongest2024.png";
import event2 from "../assets/events2024.png";
import event3 from "../assets/mrstrongest2023.png";
import event4 from "../assets/cricket.png";
import SectionHeading from "./SectionHeading";
import SectionWrapper from "./SectionWrapper";

function Events() {
  return (
    <SectionWrapper >
      <div id="events_section"></div>
      <SectionHeading fadeText="Our Events" visibleText="Join Our Events" />

      <div className="flex justify-center logo-second-family lg:gap-10 pb-6 p-2 ">
        <div className="flex flex-col items-center w-125 gap-10 lg:gap-15 lg:pt-15">
          <p className="w-50 lg:w-120 text-center lg:text-left font-bold leading-3 lg:leading-8 lg:text-4xl">
            Mr & Ms Strongest <hr /> <br /> Mr. and Miss. Figure Artist <hr /> <br /> Cricket Tournaments
            <hr /> <br /> Outings
            <hr />
          </p>
          <p className="text-center lg:text-left leading-8 lg:leading-10 text-base lg:text-2xl">
            Compete. Connect. Conquer. <br className="hidden lg:block" />
            <br /> From Mr. & Ms. Strongest to thrilling cricket tournaments and
            unforgettable trips — we're more than just a gym.
          </p>
        </div>

        <img className="hidden lg:block" src={eventBanner} alt="" />
      </div>

      <div className="flex justify-center">
        <div className="grid grid-cols-2 gap-3 p-5">
          <img src={event1} alt="" />
          <img src={event2} alt="" />
          <img src={event3} alt="" />
          <img src={event4} alt="" />
        </div>
      </div>
    </SectionWrapper>
  );
}

export default Events;
