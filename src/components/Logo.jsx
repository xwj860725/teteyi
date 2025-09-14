import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Logo({ className = '' }) {
  const { t } = useTranslation();

  return (
    <div className={`flex items-center w-[140px] h-24 py-2 flex-col justify-between ${className}`}>
      <Link to='/'><h2 className="text-[#48adfe] text-5xl leading-none font-expanded-semibold">TETEYI</h2></Link>
      <p className="text-gray-300 text-sm leading-none font-normal mx-3 pt-2 hover:text-black/75">
        {t('header.logo.subtitle')}
      </p>
    </div>
  );
}

export default Logo;
