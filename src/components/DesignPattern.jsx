const DesignPattern = () => {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.35 }}
      viewBox="0 0 1920 1080"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Dotted grid background */}
      <defs>
        <pattern id="dotGrid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.7" fill="#999" opacity="0.2" />
        </pattern>
      </defs>
      <rect width="1920" height="1080" fill="url(#dotGrid)" />

      {/* Naturally scattered elements - organic distribution */}

      <image href="/elements/Frame 159.svg" x="120" y="95" width="115" height="115" opacity="0.7" transform="rotate(-12 177 152)" />

      <image href="/elements/Group 10.svg" x="580" y="140" width="95" height="95" opacity="0.65" transform="rotate(18 627 187)" />

      <image href="/elements/Group 21.svg" x="1350" y="110" width="125" height="125" opacity="0.75" transform="rotate(-25 1412 172)" />

      <image href="/elements/Group 25.svg" x="280" y="320" width="105" height="105" opacity="0.6" transform="rotate(22 332 372)" />

      <image href="/elements/Group 33.svg" x="950" y="185" width="110" height="110" opacity="0.7" transform="rotate(-8 1005 240)" />

      <image href="/elements/Frame 160.svg" x="1620" y="280" width="135" height="135" opacity="0.65" transform="rotate(14 1687 347)" />

      <image href="/elements/Group 11.svg" x="450" y="240" width="90" height="90" opacity="0.6" transform="rotate(-18 495 285)" />

      <image href="/elements/Group 27.svg" x="1520" y="520" width="110" height="110" opacity="0.7" transform="rotate(10 1575 575)" />

      <image href="/elements/Group 12.svg" x="180" y="550" width="100" height="100" opacity="0.65" transform="rotate(-15 230 600)" />

      <image href="/elements/Group 34.svg" x="720" y="340" width="120" height="120" opacity="0.7" transform="rotate(16 780 400)" />

      <image href="/elements/Group 22.svg" x="1180" y="420" width="95" height="95" opacity="0.6" transform="rotate(-20 1227 467)" />

      <image href="/elements/Group 35.svg" x="380" y="680" width="115" height="115" opacity="0.65" transform="rotate(24 437 737)" />

      <image href="/elements/Group 9.svg" x="850" y="580" width="90" height="90" opacity="0.6" transform="rotate(-10 895 625)" />

      <image href="/elements/Group 36.svg" x="1420" y="720" width="125" height="125" opacity="0.7" transform="rotate(8 1482 782)" />

      <image href="/elements/Group 26.svg" x="620" y="750" width="100" height="100" opacity="0.65" transform="rotate(-22 670 800)" />

      <image href="/elements/Group 28.svg" x="240" y="850" width="95" height="95" opacity="0.6" transform="rotate(20 287 897)" />

      <image href="/elements/Group 37.svg" x="1050" y="780" width="110" height="110" opacity="0.7" transform="rotate(-14 1105 835)" />

      <image href="/elements/Group 30.svg" x="1680" y="620" width="105" height="105" opacity="0.65" transform="rotate(12 1732 672)" />

      <image href="/elements/Group-1.svg" x="480" y="520" width="90" height="90" opacity="0.6" transform="rotate(-24 525 565)" />

      <image href="/elements/Group-2.svg" x="1280" y="650" width="100" height="100" opacity="0.65" transform="rotate(15 1330 700)" />

      <image href="/elements/Group.svg" x="90" y="780" width="95" height="95" opacity="0.6" transform="rotate(-8 137 827)" />

      <image href="/elements/Group 29.svg" x="920" y="920" width="85" height="85" opacity="0.65" transform="rotate(18 962 962)" />

      <image href="/elements/Idea-Note Illustration.svg" x="350" y="150" width="110" height="110" opacity="0.7" transform="rotate(-16 405 205)" />

      <image href="/elements/Left-Bottom Illustration.svg" x="1150" y="240" width="130" height="130" opacity="0.7" transform="rotate(6 1215 305)" />

      <image href="/elements/Group 10.svg" x="780" y="85" width="95" height="95" opacity="0.65" transform="rotate(-20 827 132)" />
    </svg>
  );
};

export default DesignPattern;
