import vipMember from "../assets/vipmember.svg";
import coupleMember from "../assets/couplemember.svg";
import soloMember from "../assets/solomember.svg";
import SectionHeading from "./SectionHeading";
import SectionWrapper from "./SectionWrapper";

function Membership() {
  return (
    <SectionWrapper className="logo-family">
      <div id="membership_section"></div>
      <SectionHeading fadeText="Membership" visibleText="Membership" />

      <div className="relative flex flex-col lg:flex-row justify-center items-center text-center gap-5 lg:gap-10">
        {/* <div className="flex p-5 justify-evenly flex-col items-center relative lg:translate-x-4 bg-[var(--logo-red-o40)] w-[320px] lg:w-[300px] h-[400px] lg:h-[500px]">
          <h2 className="text-2xl">Permanent-Membership</h2>
          <img src={vipMember} alt="vip-svg" />
          <p className="text-base lg:text-xl">
            One Time Payment of Rs. 120,000 per person
          </p>
          <p className="text-base">No Admission</p>
        </div> */}

{/* Individual Pricing - 1M 2500 3M 6000 6M 10000 12M 18000  
Couple Pricing - 1M 4000 3M 10000 6M 15000 12M 25000
1D 500 */}



        <div className="flex p-5 justify-evenly flex-col items-center relative bg-[var(--logo-red)] hover:bg-[var(--logo-red-o40)] duration-1300 ease-in-out transition-all rounded-3xl hover:text-white w-[320px] lg:w-[300px] h-[400px] lg:h-[500px]">
          <h2 className="text-2xl">Solo-Membership</h2>
          <img src={soloMember} alt="vip-svg" />
          <p className="text-base lg:text-xl font-bold">
            Rs.2,500 per month <br />
            Rs.6,000 per 3 months <br />
            Rs.10,000 per 6 months <br />
            Rs.18,000 / per year
          </p>
          <p className="text-base">No Admission for 3 to 1 year memberships</p>
        </div>

        <div className="flex p-5 justify-evenly flex-col items-center relative lg:-translate-x-4 bg-[var(--logo-red)] hover:bg-[var(--logo-red-o40)] duration-1300 ease-in-out transition-all rounded-3xl hover:text-white w-[320px] lg:w-[300px] h-[400px] lg:h-[500px]">
          <h2 className="text-2xl">Couple-Membership</h2>
          <img src={coupleMember} alt="vip-svg" />
          <p className="text-base lg:text-xl">
            Rs.4,000 per month <br />
            Rs.10,000 per 3 months <br />
            Rs.15,000 per 6 months <br />
            Rs.25,000 / per year
          </p>
          <p className="text-base">No Admission for 3 to 1 year memberships</p>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default Membership;
