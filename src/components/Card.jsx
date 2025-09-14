import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


function Card({
  bgColor = 'bg-white',
  bgSize = '',
  imgSrc = '',
  title = '',
  text = '',
  isTitle = true,
  isText = true,
  isLink = false,
  link = '',
  rounded = 'rounded',
  className = ''
}) {

  const { t } = useTranslation();

  return (
    <div className={`relative ${bgColor} ${bgSize} ${rounded} ${className}`}>
      {imgSrc && (
        <img
          src={imgSrc}
          alt={t(title) || 'card-img'}   
          className="w-full h-auto object-cover"
        />
      )}

      <div className="p-4">
        {isTitle && <h3 className="text-xl font-semibold mb-2">{t(title)}</h3>}
        {isText && (
          isLink ? (
            <Link to={link} className="text-blue-600 hover:underline">{t(text)}</Link>
          ) : (
            <p className="text-gray-700">{t(text)}</p> 
          )
        )}
      </div>
    </div>
  );
}

export default Card;
