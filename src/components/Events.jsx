import eventBanner from "../assets/eventsidebanner.png";
import event1 from "../assets/mrstrongest2024.png";
import event2 from "../assets/events2024.png";
import event3 from "../assets/mrstrongest2023.png";
import event4 from "../assets/cricket.png";

function Events() {
  return (
    <div className="flex flex-col justify-center pb-20">
      <div className="relative flex justify-center h-30 mb-20 logo-family">
        <h1 className="absolute bottom-0 text-9xl z-10 opacity-5">
          Join Our Events
        </h1>
        <h2 className="absolute bottom-3 text-6xl">Join Our Events</h2>
      </div>

      <div className="flex justify-center logo-second-family gap-10 pb-6">
        <div className="flex flex-col w-125 gap-20 pt-15">
          <p className="leading-15 text-4xl">
            Mr & Ms Strongest <hr /> <br /> Cricket Tournaments<hr /> <br /> Outings<hr />
          </p>
          <p className="leading-10 text-2xl">
            Compete. Connect. Conquer. <br />
            <br /> From Mr. & Ms. Strongest to thrilling cricket tournaments and
            unforgettable trips — we're more than just a gym.
          </p>
        </div>

        <img src={eventBanner} alt="" />
      </div>

      <div className="flex justify-center">
        <div className="grid grid-cols-2 gap-3">
          <img src={event1} alt="" />
          <img src={event2} alt="" />
          <img src={event3} alt="" />
          <img src={event4} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Events;
