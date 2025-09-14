import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


import { Dialog, DialogTrigger, DialogContent } from '@/components/ui/dialog';
import wechatPublic from '../assets/qr1.png';
import wechatCustomer from '../assets/qr1.png';

function Equivalentstudies() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className='page-container'>
      {/* Header */}
      <Header />

      {/* Banner */}
      <Banner imgSrc="/banners/4.png" altText={t('equivalentStudies.bannerAlt')} className="aspect-[2/1]"
      />

            {/* Simple guide text */}
      <section className="container mx-auto px-4 py-8 text-center">
        <p className="text-2xl mb-6">
          {t('equivalentStudies.slogan')}
        </p>
        <p className="text-xl text-gray-700 mb-8">
          {t('equivalentStudies.subSlogan')}
        </p>
      </section>

      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-8">
          <img
            src="/images/tdxl5.jpg"
            alt="同等学力研究模块1"
            className="w-full object-cover rounded-lg shadow"
          />
          <img
            src="/images/tdxl6.jpg"
            alt="同等学力研究模块2"
            className="w-full object-cover rounded-lg shadow"
          />
          </div>
        </section>

      {/* Click the QR code to display the enlarged image modal window area*/}
      <div className="flex justify-between mx-10">
          <Dialog>
            <DialogTrigger asChild>
              <img
                src={wechatPublic}
                alt={t('equivalentStudies.wechat.public.alt')}
                className="w-60 cursor-pointer hover:scale-105 transition"
              />
            </DialogTrigger>
            <DialogContent className="flex flex-col items-center">
              <img src={wechatPublic} alt={t('equivalentStudies.wechat.public.dialogAlt')} className="w-64 h-auto" />
              <p className="mt-4 text-center">{t('equivalentStudies.wechat.public.caption')}</p>
            </DialogContent>
          </Dialog>

          {/* WeChat Customer Service */}
          <Dialog>
            <DialogTrigger asChild>
              <img
                src={wechatCustomer}
                alt={t('equivalentStudies.wechat.customer.alt')}
                className="w-60 cursor-pointer hover:scale-105 transition"
              />
            </DialogTrigger>
            <DialogContent className="flex flex-col items-center">
              <img src={wechatCustomer} alt={t('equivalentStudies.wechat.customer.dialogAlt')} className="w-64 h-auto" />
              <p className="mt-4 text-center">{t('equivalentStudies.wechat.customer.caption')}</p>
            </DialogContent>
          </Dialog>
        </div>


      {/* Contact Us Button */}
      <section className="container mx-auto px-4 text-center pb-16">
        <button
          onClick={() => navigate('/contact')}
          className="bg-red-700 text-white px-6 py-3 rounded text-xl font-medium hover:bg-blue-600 transition"
        >
          {t('equivalentStudies.ctaButton')}
        </button>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Equivalentstudies;
