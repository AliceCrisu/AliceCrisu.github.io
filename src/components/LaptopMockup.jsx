const LaptopMockup = ({ imageUrl, className = '' }) => {
  return (
    <div className={`flex justify-center ${className}`}>
      <div className="relative w-full max-w-[900px]">
        {/* Laptop frame image */}
        <img
          src="/laptop.png"
          alt="Laptop frame"
          className="w-full h-auto"
        />
        {/* Screenshot positioned inside the screen */}
        <div
          className="absolute"
          style={{
            top: '3.2%',
            left: '8.2%',
            width: '83.6%',
            height: '78.5%',
          }}
        >
          <img
            src={imageUrl}
            alt="Project screenshot"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default LaptopMockup;
