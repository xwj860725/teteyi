import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Navheader({ navheaderItems }) {
  const { t } = useTranslation();
  return (
    <nav className="grid grid-cols-5 w-full max-w-[984px] mx-auto gap-x-1 text-center">
      {navheaderItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className="text-2xl text-black hover:font-semibold"
        >
          {t(item.name)}
        </Link>
      ))}
    </nav>
  );
}

export default Navheader;
