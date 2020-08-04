import React, { useState, useEffect } from 'react';

import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';

import categoryRepository from '../../repositories/categories';

function Home() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    categoryRepository.getAllWithVideos()
      .then((data) => {
        setCategories(data);
      });
  }, []);

  return (
    <PageDefault paddingAll={0}>

      {categories.length === 0 && (<div>Carregando categorias...</div>)}

      {categories.length >= 1 && (
        <>
          <BannerMain
            videoTitle={categories[0].videos[0].title}
            url={categories[0].videos[0].url}
            videoDescription="Habilidades do novo Agente, KillJoy! A sua ultimate é uma Spike debilitante!"
          />
        </>
      )}

      {
        categories.map((category, index) => (
          <Carousel
            key={`${category.name}`}
            ignoreFirstVideo={!index}
            category={category}
          />
        ))
      }
    </PageDefault>
  );
}

export default Home;
