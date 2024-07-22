import React from 'react';
import './songs-list.css';

export interface SongProps {
  album: string,
  artist: string,
  title: string,
}

export interface SongListProps {
  songsList: SongProps[]
}

function SongsList({songsList}: SongListProps) {
  return (
    <ul className='songs-list'>
      {songsList.map((song, index) => {
        return (
          <li key={`${song.title}-${index}`} className='songs-list__item'>
              <div className='songs-list__thumbnail-wrapper'>
                <img/>
              </div>
              <div className='songs-list__text-wrapper'>
                <p>{song.title} {song.artist}</p>
              </div>
          </li>
        )
      })}
    </ul>
  );
}

export default SongsList;
