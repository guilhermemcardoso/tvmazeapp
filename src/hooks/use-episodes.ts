import {useCallback, useEffect} from 'react';
import {useMutation} from '@tanstack/react-query';
import {useSeriesStore} from '~/store/series-store';
import {getEpisodes as getEpisodesMutation} from '~/services/api/resources/serie';

export function useEpisodes() {
  const setEpisodes = useSeriesStore(state => state.setEpisodes);
  const setSelectedSerie = useSeriesStore(state => state.setSelectedSerie);
  const episodes = useSeriesStore(state => state.episodes);
  const selectedSerie = useSeriesStore(state => state.selectedSerie);

  const {
    mutate: mutate,
    isLoading,
    data: getEpisodesResponse,
  } = useMutation({
    mutationFn: getEpisodesMutation,
  });

  const getEpisodes = useCallback(
    (serieId: number) => {
      if (selectedSerie === serieId) {
        return;
      }

      setSelectedSerie(serieId);
      mutate(serieId);
    },
    [mutate, selectedSerie, setSelectedSerie],
  );

  useEffect(() => {
    if (!getEpisodesResponse) {
      return;
    }

    const {response} = getEpisodesResponse;

    if (response) {
      setEpisodes(response);
    }
  }, [getEpisodesResponse, setEpisodes]);

  return {
    isLoading,
    getEpisodes,
    episodes,
    selectedSerie,
  };
}
