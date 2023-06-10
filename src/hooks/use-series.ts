import {useCallback, useEffect, useMemo, useState} from 'react';
import {useMutation} from '@tanstack/react-query';
import {Serie} from '~/shared/types';
import {useSeriesStore} from '~/store/series-store';
import {
  getSeries as getSeriesMutation,
  searchSeries as searchSeriesMutation,
} from '~/services/api/resources/serie';

export function useSeries() {
  const setSeries = useSeriesStore(state => state.setSeries);
  const series = useSeriesStore(state => state.series);
  const [hasNext, setHasNext] = useState(true);

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
    mutateSearch(query);
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

    const {response, status} = searchSeriesResponse;
    setHasNext(status === 200 ? true : false);

    if (response) {
      updateSeries(response);
    }
  }, [searchSeriesResponse, updateSeries]);

  return {
    isLoading,
    series,
    hasNext,
    getSeries,
    searchSeries,
  };
}
