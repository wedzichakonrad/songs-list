import React, { Dispatch, SetStateAction } from 'react';
import './filter-bar.css';
import { FiltersProps } from '../../main-container';

interface FilterBarProps {
    filters: FiltersProps,
    setFilters: (filters: FiltersProps) => void,
}

const filterTypes = {
    ALBUM: 'album',
    ARTIST: 'artist',
    SONG: 'song',
}

const filterOptions = [
    {
        name: 'Album',
        value: filterTypes.ALBUM,
    },
    {
        name: 'Artist',
        value: filterTypes.ARTIST,
    },
    {
        name: 'Song',
        value: filterTypes.SONG,
    }
]

function FilterBar({filters, setFilters}:FilterBarProps) {

    const onFilterPick = (filter: string) => {
        switch (filter) {
            case filterTypes.ALBUM: 
                setFilters({...filters, [filterTypes.ALBUM]: true})
                break;

            case filterTypes.ARTIST: 
                setFilters({...filters, [filterTypes.ARTIST]: true})
                break;

            case filterTypes.SONG: 
                setFilters({...filters, [filterTypes.SONG]: true})
                break;

            default:
        }
    };

  return (
    <div className='filter-bar'>
        <div>
            {filterOptions.map((filter, index) => {
                return (
                    <button key={`${filter.name}-${index}`} onClick={() => onFilterPick(filter.value)} className='filter-bar__button'>{filter.name}</button>
                )
            })}
        </div>
    </div>
  );
}

export default FilterBar;
