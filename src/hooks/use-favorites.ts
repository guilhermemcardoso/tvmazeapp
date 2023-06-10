import {useFavoritesStore} from '~/store/favorites-store';
import {getKey, setKey} from '~/services/local-storage';
import {StorageKeys} from '~/services/local-storage/constants';
import {Serie} from '~/shared/types';
import {useCallback} from 'react';

export function useFavorites() {
  const setFavorites = useFavoritesStore(state => state.setFavorites);
  const favorites = useFavoritesStore(state => state.favorites);

  const getFavorites = useCallback(async () => {
    const favoritesValue = await getKey(StorageKeys.FAVORITES);

    setFavorites(favoritesValue ? JSON.parse(favoritesValue) : []);
  }, [setFavorites]);

  const isFavorite = useCallback(
    (serieId: number) => {
      return favorites.findIndex(item => item.id === serieId) >= 0;
    },
    [favorites],
  );

  const addToFavorites = useCallback(
    async (serie: Serie) => {
      await setKey(StorageKeys.FAVORITES, JSON.stringify(serie));
      setFavorites([...favorites, serie]);
    },
    [favorites, setFavorites],
  );

  return {
    favorites,
    getFavorites,
    isFavorite,
    addToFavorites,
  };
}
