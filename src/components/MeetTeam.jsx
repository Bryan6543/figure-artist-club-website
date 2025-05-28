import team1 from "../assets/team1.png";
import team2 from "../assets/team2.png";
import team3 from "../assets/team3.png";
import team4 from "../assets/team4.png";
import team5 from "../assets/team5.png";
import team6 from "../assets/team6.png";

function MeetTeam() {
  return (
    <div className="logo-family mb-12.5 lg:mb-20">

      <div className="relative logo-family flex justify-center h-15 lg:h-30 mb-7.5 lg:mb-20">
        <h1 className="absolute bottom-0 text-6xl lg:text-9xl opacity-5">Meet the Team</h1>
        <h2 className="absolute bottom-1 lg:bottom-3 text-3xl lg:text-6xl">Meet the Team</h2>
      </div>
      
      <div className="flex mt-10 justify-center">
        <div className="grid grid-cols-1 gap-2.5 lg:grid-cols-3 lg:gap-7">
          <img src={team1} alt="" />
          <img src={team2} alt="" />
          <img src={team3} alt="" />
          <img src={team4} alt="" />
          <img className="hidden lg:inline" src={team5} alt="" />
          <img className="hidden lg:inline" src={team6} alt="" />
        </div>
      </div>
    </div>
  );
}

export default MeetTeam;
