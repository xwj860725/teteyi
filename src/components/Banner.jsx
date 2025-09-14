import React from 'react';

function Banner({ imgSrc, altText = '', className = '' }) {
  return (
    <div
      className={`relative w-full aspect-[3/1] bg-cover bg-center my-16 overflow-hidden ${className}`}
      style={{ backgroundImage: `url(${imgSrc})` }}
    >
      {/* add a text layer */}
      {altText && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white text-5xl font-bold">{altText}</span>
        </div>
      )}
    </div>
  );
}

export default Banner;
