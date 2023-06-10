import {create} from 'zustand';
import {Serie} from '~/shared/types';

interface SeriesState {
  series: Serie[];
  filteredSeries: Serie[];
  setSeries: (series: Serie[]) => void;
  setFilteredSeries: (series: Serie[]) => void;
}

export const useSeriesStore = create<SeriesState>(set => ({
  series: [],
  filteredSeries: [],
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
}));
