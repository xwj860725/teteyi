import React from 'react'
import Logo from './Logo'
import Navfooter from './Navfooter'
import MobileMenu from './MobileMenu'
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();
  const navfooterItems = [
    { name: t('footer.nav.legal'), path: '/legalnotice' },
    { name: t('footer.nav.privacy'), path: '/privacypolicy' },
    { name: t('footer.nav.contact'), path: '/contact' },
    { name: t('footer.nav.join'), path: '/join' },
  ];

  return (
    <footer className="bg-black/70 w-full my-4 px-4">
      <div className="max-w-[1440px] mx-auto py-8">
        {/* logo */}
        <Logo className="mx-auto mb-6" />

        {/* PC: bottom navigation (horizontal) */}
        <div>
          <Navfooter navfooterItems={navfooterItems} />
        </div>

        <hr className="my-4 border-white/75" />
        <p className="text-center text-white/50 text-sm">
          {t('footer.copyright')}
        </p>
      </div>
    </footer>
  )
}

export default Footer
