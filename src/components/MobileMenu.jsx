// src/components/MobileMenu.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function MobileMenu({ navItems, onClose }) {
  const { t } = useTranslation();

  return (
    <>
      {/* black mask */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      />

      {/* swipe left for the drawer menu */}
      <div className="fixed top-0 left-0 w-3/4 h-full bg-white z-50 shadow-lg p-6">
        <button onClick={onClose} className="text-black text-lg mb-6">
          {t('mobileMenu.close')}
        </button>

        <nav className="flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={onClose}
              className="text-lg text-gray-800 hover:font-bold"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}

export default MobileMenu;
