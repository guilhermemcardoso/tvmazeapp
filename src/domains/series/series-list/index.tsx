import React, {useCallback, useEffect, useState} from 'react';
import {Container, Header, SearchInput} from '~/shared/components';
import styles from './styles';
import {FlatList, View} from 'native-base';
import {ListRenderItem} from 'react-native';
import {Serie} from '~/shared/types';
import {SerieItem} from '../components';
import {useSeries} from '~/hooks/use-series';
import {useFavorites} from '~/hooks/use-favorites';
import EmptyList from '~/shared/components/empty-list';
import ListFooter from '~/shared/components/list-footer';

const Series = () => {
  const {
    isLoading,
    isSearch,
    getSeries,
    searchSeries,
    series,
    filteredSeries,
    hasNext,
  } = useSeries();
  const {isFavorite, addToFavorites} = useFavorites();
  const [currentPage, setCurrentPage] = useState(0);

  const onLoadMoreSeries = () => {
    setCurrentPage(currentPage + 1);
  };

  const callGetSeries = useCallback(() => {
    getSeries(currentPage);
  }, [getSeries, currentPage]);

  const callSearchSeries = useCallback(
    (text: string) => {
      searchSeries(text);
    },
    [searchSeries],
  );

  const onPressItem = (item: Serie) => {
    console.log('onPressItem', item);
  };

  const onFavoriteItem = (item: Serie) => {
    addToFavorites(item);
  };

  const onRenderItem: ListRenderItem<Serie> = ({item}: {item: Serie}) => {
    const itemIsFavorite = isFavorite(item.id);
    return (
      <SerieItem
        onPress={onPressItem}
        data={item}
        isFavorite={itemIsFavorite}
        onFavorite={onFavoriteItem}
      />
    );
  };

  useEffect(() => {
    callGetSeries();
  }, [callGetSeries, currentPage]);

  return (
    <Container>
      <Header title="Series" />
      <SearchInput
        placeholder="Search for series..."
        onSearch={callSearchSeries}
        isLoading={isLoading}
      />
      <View bgColor="container.light" style={styles.mainContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={item => String(item.id)}
          renderItem={onRenderItem}
          data={isSearch ? filteredSeries : series}
          ListEmptyComponent={<EmptyList />}
          ListFooterComponent={
            <ListFooter
              isEmpty={series.length === 0}
              isLoading={isLoading}
              hasNext={hasNext}
              emptyFooter={isSearch}
              onLoadMore={onLoadMoreSeries}
            />
          }
        />
      </View>
    </Container>
  );
};

export default Series;
