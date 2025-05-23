import BodyTransBanner from "../assets/BodyTransformationImg.png";

function BodyTransformation() {
  return (
    <div className="pb-20">
      <div className="relative flex justify-center h-30 mb-20 logo-family">
        <h1 className="absolute bottom-0 text-9xl z-10 opacity-5">
          Body Transformation
        </h1>
        <h2 className="absolute bottom-3 text-6xl">Body Transformation</h2>
      </div>
      <div className="flex justify-center">
      <img src={BodyTransBanner} alt="" /></div>
    </div>
  );
}

export default BodyTransformation;
