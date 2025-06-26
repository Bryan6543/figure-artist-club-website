function SectionWrapper({ children, className = "" }) {
  return (
    <div
      className={`mt-10 mb-30  lg:mt-30 lg:mb-30  ${className}`}
    >
      {children}
    </div>
  );
}

export default SectionWrapper;
