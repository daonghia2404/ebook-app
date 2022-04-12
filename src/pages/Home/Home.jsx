import React from 'react';

import HomeBanner from '@/containers/HomeBanner/HomeBanner';
import BooksCarousel from '@/containers/BooksCarousel';
import { dataBookCarousel, dataNewsList } from '@/common/data';
import NewsTab from '@/containers/NewsTab';

const Home = () => {
  return (
    <div className="Home">
      <HomeBanner />

      <BooksCarousel title="Sách Giấy" data={dataBookCarousel} />
      <BooksCarousel title="Sách Nói" darkBackground data={dataBookCarousel} />

      <NewsTab data={dataNewsList} />
    </div>
  );
};

export default Home;
