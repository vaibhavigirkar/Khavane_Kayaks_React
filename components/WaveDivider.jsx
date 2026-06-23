const WaveDivider = () => {
  return (
    <div className="wave-divider">
      <svg
        viewBox="0 0 1440 120"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0,40 
             C120,80 240,0 360,20 
             480,40 600,100 720,90 
             840,80 960,20 1080,10 
             1200,0 1320,40 1440,60 
             L1440,120 L0,120 Z"
        />
      </svg>
    </div>
  );
};

export default WaveDivider;
