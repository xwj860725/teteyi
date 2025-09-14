import React from 'react';
import { useTranslation } from 'react-i18next';   


function Btn({
  text,
  onClick,
  isActive = false,
  activeColor = '#48adfe',
  bgColor = 'bg-white',
  textColor = 'text-black',
  hoverTextColor = 'text-black',
  fontSize = 'text-sm',
  rounded = 'rounded',
  className = ''
}) {
  const { t } = useTranslation();
  const base = `px-4 py-2 ${rounded} ${fontSize} transition border-none ${bgColor}`;

  const textClasses = `${textColor} font-normal hover:font-bold hover:${hoverTextColor}`;

  const finalClassName = `${base} ${!isActive ? textClasses : 'font-bold'} ${className}`;

  return (
    <button
      onClick={onClick}
      className={finalClassName}
      style={isActive ? { color: activeColor } : {}}
    >
      {t(text)}
    </button>
  );
}

export default Btn;

