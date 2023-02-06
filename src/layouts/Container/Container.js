const Container = ({ children, className }) => {
  return (
    <div className={`lg:max-w-[1400px] px-4 mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default Container;
