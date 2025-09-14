import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import { useTranslation } from 'react-i18next';

function Contact() {
  const { t } = useTranslation();
  return (
    <div className='page-container'>
      {/* 1. Header */}
      <Header />

      {/* 2. Banner */}
      <Banner imgSrc="/banners/nature1.png"  altText={t('contact.bannerAlt')} className="aspect-[3/1]"/>

      {/* 3. Contact Information + Background Image */}
      <section className="w-full bg-white py-10 px-4">
        <div className="relative max-w-[1000px] mx-auto">
          {/* Background image */}
          <img
            src="/tty/df2.jpeg" 
            alt={t('contact.imageAlt')}
            className="w-full object-cover rounded-lg"
          />

          {/* Text overlay on images */}
          <div className="absolute inset-0 flex items-center justify-center text-center px-4">
            <div className="text-black text-sm md:text-xl font-medium p-4 rounded">
              <p className="mb-2">{t('contact.addressLabel')}</p>
              <p className="mb-2">{t('contact.addressText')}</p>
              <p className="mb-2">{t('contact.phoneLabel')}</p>
              <p className="mb-2">+86 {t('contact.phoneText')}</p>
              <p className="mb-2">{t('contact.emailLabel')}</p>
              <p>{t('contact.emailText')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Footer */}
      <Footer />
    </div>
  );
}

export default Contact;
