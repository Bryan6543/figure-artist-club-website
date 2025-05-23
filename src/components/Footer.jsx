import logofooter from "../assets/logofooter.svg";
import facebook from "../assets/facebook.svg";
import tiktok from "../assets/tiktok.svg";
import youtube from "../assets/youtube.svg";
import insta from "../assets/insta.svg";

function Footer() {
  return (
    <div>
      <hr className="mb-5" />
      <div className="flex gap-20 justify-center">
        <div className="flex gap-5">
          <div>
            <img src={logofooter} alt="logofootersvg" />
          </div>
          <div className="flex flex-col gap-5 logo-second-family">
            <div>
              <p>
                Mavittara Junction Piliyandala <br /> figureartist@gmail.com
                <br /> +94 7646 35985
              </p>
            </div>
            <div className="flex">
              <img src={facebook} alt="" />
              <img src={insta} alt="" />
              <img src={youtube} alt="" />
              <img src={tiktok} alt="" />
            </div>
          </div>
        </div>
        <div className="logo-family text-center">
          <p className="text-3xl">Personal Coaching Available </p>
          <p className="text-xl">for More information please contact us </p>
          <p>Meal plan progress tracking and more</p>
        </div>
        <div className="logo-family">
          About Us <br />
          Meet The Team
          <br />
          Membership Pricing
          <br />
          Join Our Events
        </div>
      </div>
      <hr className="mt-5 mb-2" />
      <div className="flex justify-center items-center mb-2">
        <p>
          Designed By: Brayan Fernando - To Support the Creator or Hire for web
          dev. fnirmal802@gmail.com or <span className="text-amber-300"> Click Link! </span>
        </p>
      </div>
    </div>
  );
}

export default Footer;
