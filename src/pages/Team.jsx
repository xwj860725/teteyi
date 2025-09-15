import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Card from '../components/Card';
import { useTranslation } from 'react-i18next';

const teamMembers = [
  {
    photo: '/members/zhuang.png',
    name: 'team.members.0.name',
    desc: 'team.members.0.desc',
  },
  {
    photo: '/members/wang.png',
    name: 'team.members.1.name',
    desc: 'team.members.1.desc',
  },
  {
    photo: '/members/chen.png',
    name: 'team.members.2.name',
    desc: 'team.members.2.desc',
  },
  {
    photo: '/members/han.png',
    name: 'team.members.3.name',
    desc: 'team.members.3.desc',
  },
  {
    photo: '/members/liu.png',
    name: 'team.members.4.name',
    desc: 'team.members.4.desc',
  },
  {
    photo: '/members/zeng.png',
    name: 'team.members.5.name',
    desc: 'team.members.5.desc',
  },
  {
    photo: '/members/jiani.png',
    name: 'team.members.6.name',
    desc: 'team.members.6.desc',
  },
  {
    photo: '/members/wu.png',
    name: 'team.members.7.name',
    desc: 'team.members.7.desc',
  }
];

function TeamPage() {
  const {t} = useTranslation();
  return (
    <div className='page-container'>
      <Header />
      <Banner imgSrc="/banners/11.png" altText={t('team.bannerAlt')} />

      {/* Card area */}
      <section className="grid grid-cols-2 gap-x-4 gap-y-2 px-4 py-2 md:grid-cols-4 page-container">
        {teamMembers.map((member, index) => (
          <Card
            key={index}
            imgSrc={member.photo}
            title={`team.members.${index}.name`}
            text={`team.members.${index}.desc`}
            bgColor="bg-white"
            bgSize="h-[560px]"
            rounded="rounded-xl"
          />
        ))}
      </section>

      {/* Footer Banner */}
      <Banner imgSrc="/banners/2.png" altText={t('home.banner.title')} className='my-36 md:my-36' />

      <Footer />
    </div>
  );
}

export default TeamPage;
