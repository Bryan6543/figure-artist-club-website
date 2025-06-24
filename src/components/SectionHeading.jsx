function SectionHeading({ visibleText, fadeText }) {
  return (
    <div className="relative logo-family flex justify-center lg:h-30 mb-15">
      <h1 className="absolute bottom-0 lg:bottom-1 text-5xl lg:text-8xl opacity-5">
        {fadeText}
      </h1>
      <h2
        className="absolute bottom-0 lg:bottom-4 text-3xl lg:text-5xl"
      >
        {visibleText}
      </h2>
    </div>
  );
}

export default SectionHeading;
