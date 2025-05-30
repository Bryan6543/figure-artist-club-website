import Ach1 from "../assets/Ach1.png";
import Ach2 from "../assets/Ach2.png";

function Achivements() {
  return (
    <div className="logo-family mb-20">
      <div className="flex justify-center mb-20">
        <h2 className="text-3xl lg:text-6xl">Achivements</h2>
      </div>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-3 gap-10">
          <img src={Ach1} alt="" />
          <img src={Ach2} alt="" />
          <img src={Ach1} alt="" />
          <img src={Ach1} alt="" />
          <img src={Ach1} alt="" />
          <img src={Ach1} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Achivements;
