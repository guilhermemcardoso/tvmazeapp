import React, {useCallback, useEffect, useState} from 'react';
import {Container, Header} from '~/shared/components';
import styles from './styles';
import {FlatList, View} from 'native-base';
import {ListRenderItem} from 'react-native';
import {Serie} from '~/shared/types';
import {EmptyList, ListFooter, SerieItem} from '../components';
import {useSeries} from '~/hooks/use-series';

const Series = () => {
  const {isLoading, getSeries, series, hasNext} = useSeries();
  const [currentPage, setCurrentPage] = useState(0);

  const onLoadMoreSeries = () => {
    setCurrentPage(currentPage + 1);
  };

  const callGetSeries = useCallback(() => {
    console.log('ENTROU NO CALLBACK');
    getSeries(currentPage);
  }, [getSeries, currentPage]);

  const onPressItem = (item: Serie) => {
    console.log('onPressItem', item);
  };

  const onFavoriteItem = (item: Serie) => {
    console.log('ITEM', item);
  };

  const onRenderItem: ListRenderItem<Serie> = ({item}: {item: Serie}) => {
    return (
      <SerieItem
        onPress={onPressItem}
        data={item}
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
