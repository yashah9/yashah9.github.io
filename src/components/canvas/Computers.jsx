import React from "react";

const ComputersCanvas = () => {
  return (
    <div className="relative flex flex-col justify-end items-center min-h-screen w-full pb-16 sm:pb-28 md:pb-32 lg:pb-40">
      {/* Yash Image (Smaller & Responsive with Animation) */}
      <img 
        src="/Yash.JPG"  // ✅ Direct Public Path
        alt="Yash" 
        className="animate-scaleBounce w-[70%] max-w-[220px] sm:max-w-[260px] md:max-w-[300px] 
                   lg:max-w-[320px] xl:max-w-[350px] object-contain rounded-lg"
      />
    </div>
  );
};

export default React.memo(ComputersCanvas);