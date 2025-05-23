import vipMember from "../assets/vipmember.svg";
import coupleMember from "../assets/couplemember.svg";
import soloMember from "../assets/solomember.svg";

function Membership() {
  return (
    <div className="logo-family  mb-20">
      <div className="relative flex justify-center h-30 mb-20">
        <h1 className="absolute bottom-0 text-9xl z-10 opacity-5">
          Membership
        </h1>
        <h2 className="absolute bottom-3 text-6xl">Membership</h2>
      </div>

      <div className="relative flex justify-center text-center">
        
        <div className="flex p-5 justify-evenly flex-col items-center relative translate-x-4 bg-[var(--logo-red-o40)] w-[300px] h-[500px]">
          <h2 className="text-2xl">Permanent-Membership</h2>
          <img src={vipMember} alt="vip-svg" />
          <p className="text-xl">One Time Payment of Rs. 120,000 per person</p>
          <p className="text-base">No Admission</p>
        </div>

        <div className="flex p-5 justify-evenly flex-col items-center relative -translate-y-4 z-10 bg-[var(--logo-red)] w-[300px] h-[500px]">
          <h2 className="text-2xl">Solo-Membership</h2>
          <img src={soloMember} alt="vip-svg" />
          <p className="text-xl">
            Rs.3,000 per month <br />
            Rs.6,000 / per 3 months <br />
            Rs.12,000 per 6 months <br />
            Rs.20,000 / per year
          </p>
          <p className="text-base">No Admission for 6 to 1 year memberships</p>
        </div>

        <div className="flex p-5 justify-evenly flex-col items-center relative -translate-x-4 bg-[var(--logo-red-o40)] w-[300px] h-[500px]">
          <h2 className="text-2xl">Couple-Membership</h2>
          <img src={coupleMember} alt="vip-svg" />
          <p className="text-xl">
            Rs.5,000 per month <br />
            Rs.6,000 / per 3 months <br />
            Rs.12,000 per 6 months <br />
            Rs.20,000 / per year
          </p>
          <p className="text-base">No Admission for 6 to 1 year memberships</p>
        </div>
      </div>
    </div>
  );
}

export default Membership;
