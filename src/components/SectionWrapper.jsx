function SectionWrapper({ children, className = "" }) {
  return (
    <div
      className={`mt-10 mb-30  lg:mt-20 lg:mb-20  ${className}`}
    >
      {children}
    </div>
  );
}

export default SectionWrapper;
