import React, { useEffect, useState } from 'react';

import Tmdb from './Tmdb';
import Header from './components/Header';
import FeaturedMovie from './components/FeaturedMovie';
import MovieRows from './components/MovieRows';
import Footer from './components/Footer';
import Loading from './components/Loading';

import './App.css';

export default () => {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      const list = await Tmdb.getHomeList();
      setMovieList(list);

      const originals = list.filter(i => i.slug === 'originals');
      const randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      const chosen = originals[0].items.results[randomChosen];
      const chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      console.log(chosen, chosenInfo);
      setFeaturedData({ ...chosenInfo, ...chosen });
    }

    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    }

    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);

  return (
    <div className="page">
      <Header black={blackHeader} />

      {featuredData &&
        <FeaturedMovie item={featuredData} />
      }

      <section className="lists">
        {movieList.map(({ title, items }, key) => (
          <MovieRows key={key} title={title} items={items} />
        ))}
      </section>

      <Footer />

      {movieList.length <= 0 &&
        <Loading />
      }
    </div>
  );
}
