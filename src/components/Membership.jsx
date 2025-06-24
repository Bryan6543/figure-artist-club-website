import vipMember from "../assets/vipmember.svg";
import coupleMember from "../assets/couplemember.svg";
import soloMember from "../assets/solomember.svg";
import SectionHeading from "./SectionHeading";
import SectionWrapper from "./SectionWrapper";

function Membership() {
  return (
    <SectionWrapper id="membership_section" className="logo-family">
      <SectionHeading fadeText="Membership" visibleText="Membership" />

      <div className="relative flex flex-col lg:flex-row justify-center items-center text-center gap-5 lg:gap-0">
        <div className="flex p-5 justify-evenly flex-col items-center relative lg:translate-x-4 bg-[var(--logo-red-o40)] w-[320px] lg:w-[300px] h-[400px] lg:h-[500px]">
          <h2 className="text-2xl">Permanent-Membership</h2>
          <img src={vipMember} alt="vip-svg" />
          <p className="text-base lg:text-xl">
            One Time Payment of Rs. 120,000 per person
          </p>
          <p className="text-base">No Admission</p>
        </div>

        <div className="flex p-5 justify-evenly flex-col items-center relative lg:-translate-y-4 z-10 bg-[var(--logo-red)] w-[320px] lg:w-[300px] h-[400px] lg:h-[500px]">
          <h2 className="text-2xl">Solo-Membership</h2>
          <img src={soloMember} alt="vip-svg" />
          <p className="text-base lg:text-xl">
            Rs.3,000 per month <br />
            Rs.6,000 / per 3 months <br />
            Rs.12,000 per 6 months <br />
            Rs.20,000 / per year
          </p>
          <p className="text-base">No Admission for 6 to 1 year memberships</p>
        </div>

        <div className="flex p-5 justify-evenly flex-col items-center relative lg:-translate-x-4 bg-[var(--logo-red-o40)] w-[320px] lg:w-[300px] h-[400px] lg:h-[500px]">
          <h2 className="text-2xl">Couple-Membership</h2>
          <img src={coupleMember} alt="vip-svg" />
          <p className="text-base lg:text-xl">
            Rs.5,000 per month <br />
            Rs.6,000 / per 3 months <br />
            Rs.12,000 per 6 months <br />
            Rs.20,000 / per year
          </p>
          <p className="text-base">No Admission for 6 to 1 year memberships</p>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default Membership;
