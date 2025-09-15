import React from 'react';


function Description({
  title,
  children,
  className = '',
  titleClass = '',
  contentClass = '',
  showTitle = true, // affichage par défaut
}) {
  return (
    <div className={`w-full ${className}`}>
      {showTitle && title && (
        <h2 className={`text-4xl font-bold mb-6 text-center ${titleClass}`}>
          {title}
        </h2>
      )}
      <div className={`bg-gray-100 text-sm text-gray-700 leading-relaxed md:text-xl p-2 rounded ${contentClass}`}>
        {children}
      </div>
    </div>
  );
}

export default Description;
