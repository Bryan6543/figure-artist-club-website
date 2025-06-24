import CoachIMG from "../assets/chinthakasoloass.png";

function AboutCoach() {
  return (
    <div className="flex flex-col items-center gap-10 mb-20 logo-family">
      
      <div className="relative flex justify-center h-15 lg:h-30 mb-7.5 lg:mb-20 mt-30">
        <h1 className="absolute bottom-0 text-6xl lg:text-9xl opacity-5">
          Coach
        </h1>
        <h2 className="absolute bottom-1 lg:bottom-3 text-3xl lg:text-6xl">
          Coach
        </h2>
      </div>

      <div className="flex flex-col gap-20">
        <div className="flex justify-center">
          <h2 className="text-3xl lg:text-6xl">About the Coach</h2>
        </div>
        
        <div className="flex items-center gap-10 logo-second-family text-2xl leading-10">
          <div className="flex flex-col gap-10 w-3xl">
            <div>
              <p>
                With over a decade of experience in the fitness industry,
                Chinthaka is the driving force behind our training philosophy. A
                certified strength and conditioning specialist, he has trained
                hundreds of fitness enthusiasts, helping them reach peak
                performance and transform their lives.
              </p>
            </div>
            <div>
              <p>
                <span className="font-bold"> Achievements </span> <br />
                <ul>
                  <li>- National Fitness Championship Finalist - 2002 </li>
                  <li>- Certified Personal Trainer</li>
                  <li>- Over 500+ successful client transformation </li>
                  <li>
                    - Holder of multiple fitness and nutrition certifications
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div>
            <img src={CoachIMG} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutCoach;
