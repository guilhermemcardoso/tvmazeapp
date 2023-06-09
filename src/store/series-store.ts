import {create} from 'zustand';
import {Serie} from '~/shared/types';

interface SeriesState {
  series: Serie[];
  setSeries: (series: Serie[]) => void;
}

export const useSeriesStore = create<SeriesState>(set => ({
  series: [],
  setSeries: async series => {
    set(state => ({
      ...state,
      series: series,
    }));
  },
}));
