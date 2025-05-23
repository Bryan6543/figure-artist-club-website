import team1 from "../assets/team1.png";
import team2 from "../assets/team2.png";
import team3 from "../assets/team3.png";
import team4 from "../assets/team4.png";
import team5 from "../assets/team5.png";
import team6 from "../assets/team6.png";

function MeetTeam() {
  return (
    <div className="logo-family mb-20">
      <div className="relative flex justify-center h-30 mb-20">
        <h1 className="absolute bottom-0 text-9xl z-10 opacity-5">
          Meet the Team
        </h1>
        <h2 className="absolute bottom-3 text-6xl">Meet the Team</h2>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-3 gap-7">
          <img src={team1} alt="" />
          <img src={team2} alt="" />
          <img src={team3} alt="" />
          <img src={team4} alt="" />
          <img src={team5} alt="" />
          <img src={team6} alt="" />
        </div>
      </div>
    </div>
  );
}

export default MeetTeam;
