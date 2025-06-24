import BodyTransBanner from "../assets/BodyTransformationImg.png";
import SectionHeading from "./SectionHeading";
import SectionWrapper from "./SectionWrapper";

function BodyTransformation() {
  return (
    <SectionWrapper className="">
      <SectionHeading
        fadeText="Transformation"
        visibleText="Body Transformation"
      />

      <div className="flex justify-center p-2 lg:p-0">
        <img src={BodyTransBanner} alt="" />
      </div>
    </SectionWrapper>
  );
}

export default BodyTransformation;
