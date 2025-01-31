import React from "react";

const ComputersCanvas = () => {
  return (
    <div className="relative flex justify-center items-center min-h-screen w-full pb-10 sm:pb-20">
      {/* Yash Image (Moved Up) */}
      <img 
        src="/Yash.JPG"  // ✅ Direct Public Path
        alt="Yash" 
        className="absolute top-1/2 transform -translate-y-1/3 w-[2000px] h-[300px] 
                   sm:w-[400px] sm:h-[400px] md:w-[350px] md:h-[450px] 
                   lg:w-[2000px] lg:h-[500px] object-contain rounded-lg"
      />
    </div>
  );
};  

export default React.memo(ComputersCanvas);