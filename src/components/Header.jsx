import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Search as SearchIcon, Menu as MenuIcon } from 'lucide-react';
import { Logo, Navheader, Btn, Lang } from './index.js';
import MobileMenu from './MobileMenu';
import { useTranslation } from 'react-i18next';

function Header() {
  const location = useLocation();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();

  const navItems = [
    { name: t('header.nav.about'), path: '/about' },
    { name: t('header.nav.business'), path: '/business' },
    { name: t('header.nav.team'), path: '/team' },
    { name: t('header.nav.contact'), path: '/contact' },
    { name: t('header.nav.join'), path: '/join' },
  ];

  return (
    <header className="bg-white w-full max-w-[1440px] mx-auto h-20 px-6 my-6 flex items-center justify-between relative z-50">
      {/* left: logo */}
      <Logo />

      {/* middle: navigation (displayed only on devices above size md) */}
      <div className="hidden md:flex flex-1 justify-center">
        <Navheader navheaderItems={navItems} />
      </div>

      {/* right: language switch + search button */}
      <div className="hidden md:flex w-[140px] h-20 grid-cols-2 items-center gap-4">
        <Lang location={location} />
        <SearchIcon className="h-6 w-6" />
      </div>

      {/* mobile hamburger menu button*/}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(true)} className="text-black">
          <MenuIcon className="h-8 w-8" />
        </button>
      </div>

      {/* drawer menu component (mobile) */}
      {isMenuOpen && <MobileMenu navItems={navItems} onClose={() => setMenuOpen(false)} />}
    </header>
  );
}

export default Header;
