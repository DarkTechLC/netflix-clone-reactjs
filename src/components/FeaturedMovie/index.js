import React from 'react';
import { Add, PlayArrow } from '@material-ui/icons';

import './FeaturedMovie.css'

export default ({ item }) => {
  console.log(item);
  const firstDate = new Date(item.first_air_date);

  const genres = item.genres.map(genre => genre.name) || [];

  return (
    <section className="featured" style={{
      backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
    }}>
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <div className="featured--name">{item.original_name}</div>
          <div className="featured--info">
            <div className="featured--points">{item.vote_average} pontos</div>
            <div className="featured--year">{firstDate.getFullYear()}</div>
            <div className="featured--seasons">
              {item.number_of_seasons} temporadas{item.number_of_seasons !== 1 ? 's' : ''}
            </div>
            <div className="featured--description">{
              item.overview.length > 250
                ? item.overview.substr(0, 250).trimEnd() + '...'
                : item.overview
            }</div>
            <div className="featured--buttons">
              <a href={`/watch/${item.id}`} className="featured--watchbutton">
                <PlayArrow />
                Assistir
              </a>
              <a href={`/list/add/${item.id}`} className="featured--mylistbutton">
                <Add />
                Minha lista
              </a>
            </div>
            <div className="featured--genres">
              <strong>Gêneros: </strong>
              {genres.join(', ')}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}