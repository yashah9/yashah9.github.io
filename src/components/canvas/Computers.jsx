import React from "react";

const ComputersCanvas = () => {

  return (
    <div className="flex justify-center items-center min-h-screen w-full bg-black">
      <div className="relative flex flex-col items-center">
        {/* Yash Image (Full Size, No Extra Effects) */}
        <img 
          src="/Yash.JPG"  // ✅ Direct Public Path
          alt="Yash" 
          className="w-auto h-[500px] object-contain rounded-lg"
        />
      </div>
    </div>
  );
};

export default React.memo(ComputersCanvas); // ✅ Prevent Unnecessary Re-renders