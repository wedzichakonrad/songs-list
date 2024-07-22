import React, { useEffect, useState } from 'react';
import '../style/base/reset.css';
import './main-container.css';
import { mockSongs } from '../data/data';
import FilterBar from './components/filter-bar/filter-bar';
import SongsList from './components/songs-list/songs-list';

export interface FiltersProps {
  album: boolean,
  artist: boolean,
  song: boolean,
}


function MainContainer() {
  const [songs, setSongs] = useState(mockSongs);
  const [filters, setFilters] = useState({
    album: false,
    artist: false,
    song: false,
  });

  const sortFunc = (a:string, b:string) => {
    if (a > b) {
      return 1
    }
    if (a < b) {
      return -1
    }
    return 0
  }

  const _setFilters = (newFilters: FiltersProps) => {
    setFilters(newFilters)
  }

  useEffect(() => {


  },[filters])

  return (
    <div className='main-container'>
      <FilterBar filters={filters} setFilters={_setFilters}/>
      <header  className='main-containe__header'>
        Songs List
      </header>
      <SongsList songsList={songs}/>
    </div>
  );
}

export default MainContainer;
