import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import Btn from '../components/Button';
import Description from '../components/Description';
  
function Home() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const btns = [
    { text: 'home.business.tdxl', path: '/equivalentstudies' },
    { text: 'home.business.companyLaw', path: '/shareholding' },
    { text: 'home.business.businessCoop', path: '/business' },
  ];

  return (
    <div className="page-container">
      {/* 1. Header */}
        <section>
            <Header />
        </section>    

      {/* 2. Banner */}
         <section>
           <Banner imgSrc="/banners/1.png" altText={t('home.banner.title')} className="relative w-full aspect-[3/1]" />
         </section> 

      {/* 3. Carousel (temporarily using static image) */}
        <section>
          <Banner imgSrc="/carousel/dshg1.jpg" altText=" " />
        </section>


        {/* 4. Professional Team Section */} 
        <Description title={t('home.team.title')} className='py-2'>
          {t('home.team.desc')}
        </Description>

        <Btn
        text="home.team.button"   
        onClick={() => navigate('/team')}
        fontSize="text-xl"
        bgColor="bg-red-800"
        textColor="text-white"
        hoverTextColor="text-blue-200"
        className="flex items-center mx-auto my-10 justify-center w-56 h-24 rounded-8 hover:font-bold"
        />


        {/* 5. Business area block */}
        <section className="w-full mx-auto px-4 py-8">
            <h2 className="text-4xl font-semibold mt-8 mb-2 text-center">{t('home.business.title')}</h2>      
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-auto">
                {btns.map((btn) => (
                 <Btn 
                  key={btn.text}
                  text={btn.text}
                  onClick={() => navigate(btn.path)}
                  fontSize="text-2xl"
                  bgColor="bg-blue-400"
                  textColor="text-white"
                  hoverTextColor="text-blue-200"
                  className="flex items-center justify-center mx-auto my-10 h-36 w-full hover:text-yellow-200"
                />
                ))}
            </div>
        </section>

        {/* 6. banner*/}
        <section>
          <Banner imgSrc="/banners/10.png" altText={t('home.news.title')} />
        </section>

        <Footer />
    </div>
  )
}

export default Home