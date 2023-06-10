import {create} from 'zustand';
import {Episode, Serie} from '~/shared/types';

interface SeriesState {
  series: Serie[];
  filteredSeries: Serie[];
  episodes: Episode[];
  selectedSerie: number | null;
  setSeries: (series: Serie[]) => void;
  setFilteredSeries: (series: Serie[]) => void;
  setEpisodes: (episodes: Episode[]) => void;
  setSelectedSerie: (serieId: number) => void;
}

export const useSeriesStore = create<SeriesState>(set => ({
  series: [],
  filteredSeries: [],
  episodes: [],
  selectedSerie: null,
  setSeries: async series => {
    set(state => ({
      ...state,
      series: [...state.series, ...series],
    }));
  },
  setFilteredSeries: async series => {
    set(state => ({
      ...state,
      filteredSeries: series,
    }));
  },
  setEpisodes: async episodes => {
    set(state => ({
      ...state,
      episodes: episodes,
    }));
  },
  setSelectedSerie: async serieId => {
    set(state => ({
      ...state,
      selectedSerie: serieId,
    }));
  },
}));
