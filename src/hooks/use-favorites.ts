import {useFavoritesStore} from '~/store/favorites-store';
import {getKey, setKey} from '~/services/local-storage';
import {StorageKeys} from '~/services/local-storage/constants';
import {Serie} from '~/shared/types';
import {useCallback, useState} from 'react';

export function useFavorites() {
  const setFavorites = useFavoritesStore(state => state.setFavorites);
  const favorites = useFavoritesStore(state => state.favorites);
  const [sortedBy, setSortedBy] = useState<'A' | 'Z'>('Z');
  const getFavorites = useCallback(async () => {
    const favoritesValue = await getKey(StorageKeys.FAVORITES);
    setFavorites(favoritesValue ? JSON.parse(favoritesValue) : []);
  }, [setFavorites]);

  const sortFavorites = useCallback(async () => {
    const sortedFavortes = favorites.sort((a, b) => {
      if (a.name < b.name && sortedBy === 'A') {
        return 1;
      }
      if (a.name < b.name && sortedBy === 'Z') {
        return -1;
      }
      if (a.name > b.name && sortedBy === 'A') {
        return -1;
      }
      if (a.name > b.name && sortedBy === 'Z') {
        return 1;
      }
      return 0;
    });

    setFavorites([...sortedFavortes]);
    setSortedBy(sortedBy === 'A' ? 'Z' : 'A');
  }, [setFavorites, favorites, setSortedBy, sortedBy]);

  const isFavorite = useCallback(
    (serieId: number) => {
      return favorites.findIndex(item => item.id === serieId) >= 0;
    },
    [favorites],
  );

  const addToFavorites = useCallback(
    async (serie: Serie) => {
      const updatedFavorites = [...favorites, serie];
      await setKey(StorageKeys.FAVORITES, JSON.stringify(updatedFavorites));
      setFavorites(updatedFavorites);
    },
    [favorites, setFavorites],
  );

  const removeFromFavorites = useCallback(
    async (serieId: number) => {
      const updatedFavorites = favorites.filter(item => item.id !== serieId);
      await setKey(StorageKeys.FAVORITES, JSON.stringify(updatedFavorites));
      setFavorites(updatedFavorites);
    },
    [favorites, setFavorites],
  );

  return {
    favorites,
    getFavorites,
    isFavorite,
    addToFavorites,
    removeFromFavorites,
    sortFavorites,
  };
}
