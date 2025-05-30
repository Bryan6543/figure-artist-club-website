import logofooter from "../assets/logofooter.svg";
import facebook from "../assets/facebook.svg";
import tiktok from "../assets/tiktok.svg";
import youtube from "../assets/youtube.svg";
import insta from "../assets/insta.svg";
import dumbell from "../assets/dumbbell-svgrepo-com 1.svg"


function Footer() {
  return (
    <div>
      {/* <hr className="mb-5" /> */}

      <div className="pt-5 pb-5 mb-2 bg-[var(--logo-black)] flex gap-25 items-center justify-center">
        <div className="flex flex-col gap-5">
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
            <div className="flex gap-5">
              <img src={facebook} alt="" />
              <img src={insta} alt="" />
              <img src={youtube} alt="" />
              <img src={tiktok} alt="" />
            </div>
          </div>
        </div>

        <div className="logo-family p-10">
          <p className="leading-15 text-3xl">Personal Coaching</p>
          <ul className="text-base">
            <li>*Meal Plan</li>
            <li>*Progress Tracking</li>
            <li>*Personal Assistance</li>
            <li>And More</li>
          </ul>
          <p className="text-xl">for More information please contact us </p>
        </div>

        <div>
          <img src={dumbell} alt="logofootersvg" />
        </div>
        {/* <div className="logo-family">
          About Us <br />
          Meet The Team
          <br />
          Membership Pricing
          <br />
          Join Our Events
        </div> */}
      </div>

      {/* <hr className="mt-5 mb-2" /> */}

      {/* <div className="flex justify-center items-center mb-2">
        <p>
          To Support the developer or Hire for web
          dev. fnirmal802@gmail.com or{" "}
          <span className="text-amber-300"> Click Link! </span>
        </p>
      </div> */}
    </div>
  );
}

export default Footer;
