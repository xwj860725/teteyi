import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

function Navfooter({ navfooterItems }) {
  const { t } = useTranslation();
  return (
    <nav className="flex justify-center gap-10 text-white/90 text-sm">
      {navfooterItems.map((item, index) => (
        <Link
          key={index}
          to={item.path}
          className="hover:underline"
        >
          {t(item.name)}
        </Link>
      ))}
    </nav>
  );
}

export default Navfooter
