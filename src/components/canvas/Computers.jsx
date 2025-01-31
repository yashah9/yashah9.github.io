import React from "react";

const ComputersCanvas = () => {
  return (
    <div className="relative flex justify-center items-center min-h-screen w-full pb-10 sm:pb-20">
      {/* Yash Image (Properly Centered) */}
      <img 
        src="/Yash.JPG"  // ✅ Direct Public Path
        alt="Yash" 
        className="absolute top-1/2 transform -translate-y-1/2
                   w-[200px] h-[250px] sm:w-[300px] sm:h-[350px] 
                   md:w-[350px] md:h-[400px] lg:w-[400px] lg:h-[450px] 
                   max-w-full object-contain rounded-lg"
      />
    </div>
  );
};

export default React.memo(ComputersCanvas);