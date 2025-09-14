import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';

const cards = [
  {
    bgImage: '/images/jf1.png',
    title: '法律顾问',
    text: '提供公司法咨询\n起草法律文件\n参与商务谈判\n出具法律意见书',
  },
  {
    bgImage: '/images/jf2.png',
    title: '分红安排',
    text: '股东权益分配设计\n利润分红方式定制\n避税策略',
  },
  {
    bgImage: '/images/jf3.png',
    title: '增资扩股',
    text: '新增股东入股协议\n注册资本调整流程\n权益保障机制',
  },
  {
    bgImage: '/images/jf4.png',
    title: '股权转让',
    text: '制定转让方案\n起草合同及条款\n安排工商变更',
  },
  {
    bgImage: '/images/jf5.png',
    title: '协议离婚',
    text: '股权分割策略\n保障婚后财产清晰分配',
  },
  {
    bgImage: '/images/jf6.png',
    title: '并购重组',
    text: '项目并购流程设计\n收购合同谈判支持\n合规评估服务',
  },
  {
    bgImage: '/images/jf7.png',
    title: '商业谈判',
    text: '股权融资协助\n条款谈判代理\n谈判技巧培训',
  },
  {
    bgImage: '/images/jf8.png',
    title: '法律尽调',
    text: '投资/并购前法律风险审查\n输出尽调报告',
  },
  {
    bgImage: '/images/jf9.png',
    title: '其他法律服务',
    text: '合同审查\n诉讼应对\n其他公司治理相关法律咨询',
  },
];

function Shareholding() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const cards = t('shareholding.cards', { returnObjects: true });

  return (
    <div className="page-container">
      <Header />
      <Banner imgSrc="/banners/3.png" altText={t('shareholding.bannerAlt')} />

      {/* Card List */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10">
        {cards.map((item, index) => (
          <div
            key={index}
            className="bg-blue-300 rounded-lg overflow-hidden w-full aspect-[1/1.5] flex flex-col"
          >
            {/* Background colour image occupies the top third of the page */}
            <div
              className="w-full h-1/3 bg-cover bg-top"
              style={{
                backgroundImage: `url(/images/jf${index + 1}.png)`,
              }}
            />

            {/* Text area below */}
            <div className="h-2/3 flex flex-col items-center justify-center px-4 text-center">
              <h2 className="text-xl font-semibold mb-2 text-red-600">{item.title}</h2>
              <p className="text-white text-sm leading-relaxed whitespace-pre-line">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </section>

        <button
          onClick={() => navigate('/contact')}
          className="flex mx-auto bg-red-700 text-white px-6 py-3 rounded text-xl font-medium hover:bg-red-600 transition">{t('shareholding.ctaButton')}</button>

      {/* Footer Banner */}
      <Banner imgSrc="/banners/2.png" altText={t('team.footerBannerAlt')} className="my-16" />
      <Footer />
    </div>
  );
}

export default Shareholding;
