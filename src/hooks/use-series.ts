import {useCallback, useEffect, useMemo, useState} from 'react';
import {useMutation} from '@tanstack/react-query';
import {Serie} from '~/shared/types';
import {useSeriesStore} from '~/store/series-store';
import {
  getSeries as getSeriesMutation,
  searchSeries as searchSeriesMutation,
} from '~/services/api/resources/serie';

interface SearchItem {
  score: number;
  show: Serie;
}
export function useSeries() {
  const setSeries = useSeriesStore(state => state.setSeries);
  const series = useSeriesStore(state => state.series);
  const setFilteredSeries = useSeriesStore(state => state.setFilteredSeries);
  const filteredSeries = useSeriesStore(state => state.filteredSeries);
  const [hasNext, setHasNext] = useState(true);
  const [isSearch, setIsSearch] = useState(false);

  const {
    mutate: mutateGet,
    isLoading: isGetLoading,
    data: getSeriesResponse,
  } = useMutation({
    mutationFn: getSeriesMutation,
  });

  const {
    mutate: mutateSearch,
    isLoading: isSearchLoading,
    data: searchSeriesResponse,
  } = useMutation({
    mutationFn: searchSeriesMutation,
  });

  const isLoading = useMemo(() => {
    return isGetLoading || isSearchLoading;
  }, [isGetLoading, isSearchLoading]);

  const updateSeries = useCallback(
    (newItems: Serie[]) => {
      return setSeries([...newItems]);
    },
    [setSeries],
  );

  const getSeries = useCallback(
    (page: number) => {
      mutateGet(page);
    },
    [mutateGet],
  );

  const searchSeries = (query: string) => {
    if (query.length > 0) {
      setIsSearch(true);
      mutateSearch(query);
    } else {
      setIsSearch(false);
    }
  };

  useEffect(() => {
    if (!getSeriesResponse) {
      return;
    }

    const {response, status} = getSeriesResponse;
    setHasNext(status === 200 ? true : false);

    if (response) {
      updateSeries(response);
    }
  }, [getSeriesResponse, updateSeries]);

  useEffect(() => {
    if (!searchSeriesResponse) {
      return;
    }

    const {response} = searchSeriesResponse;

    if (response) {
      setFilteredSeries(response.map((item: SearchItem) => item.show));
    }
  }, [searchSeriesResponse, setFilteredSeries]);

  return {
    isLoading,
    isSearch,
    series,
    filteredSeries,
    hasNext,
    getSeries,
    searchSeries,
  };
}
