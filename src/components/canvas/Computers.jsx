import React from "react";

const ComputersCanvas = () => {
  return (
    <div className="relative flex flex-col justify-end items-center min-h-screen w-full pb-16 sm:pb-28 md:pb-32 lg:pb-40">
      {/* Yash Image (Properly Adjusted for All Screens) */}
      <img 
        src="/Yash.JPG"  // ✅ Direct Public Path
        alt="Yash" 
        className="w-[80%] max-w-[300px] sm:max-w-[350px] md:max-w-[400px] 
                   lg:max-w-[450px] xl:max-w-[500px] object-contain rounded-lg"
      />
    </div>
  );
};

export default React.memo(ComputersCanvas);