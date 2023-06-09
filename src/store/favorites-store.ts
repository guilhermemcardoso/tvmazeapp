import {create} from 'zustand';
import {Serie} from '~/shared/types';

interface FavoritesState {
  favorites: Serie[];
  setFavorites: (favorites: Serie[]) => void;
}

export const useFavoritesStore = create<FavoritesState>(set => ({
  favorites: [],
  setFavorites: async favorites => {
    set(state => ({
      ...state,
      favorites: favorites,
    }));
  },
}));
