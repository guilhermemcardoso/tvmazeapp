import React, {useCallback, useEffect, useState} from 'react';
import {Container, Header} from '~/shared/components';
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
  const {isLoading, getSeries, series, hasNext} = useSeries();
  const {isFavorite, addToFavorites} = useFavorites();
  const [currentPage, setCurrentPage] = useState(0);

  const onLoadMoreSeries = () => {
    setCurrentPage(currentPage + 1);
  };

  const callGetSeries = useCallback(() => {
    getSeries(currentPage);
  }, [getSeries, currentPage]);

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
      <View bgColor="container.light" style={styles.mainContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={item => String(item.id)}
          renderItem={onRenderItem}
          data={series.filter((item, index) => index < 20)}
          ListEmptyComponent={<EmptyList />}
          ListFooterComponent={
            <ListFooter
              isEmpty={series.length === 0}
              isLoading={isLoading}
              hasNext={hasNext}
              onLoadMore={onLoadMoreSeries}
            />
          }
        />
      </View>
    </Container>
  );
};

export default Series;
