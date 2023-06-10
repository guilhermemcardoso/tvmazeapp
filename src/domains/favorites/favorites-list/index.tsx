import React from 'react';
import {Container, Header} from '~/shared/components';
import styles from './styles';
import {FlatList, View} from 'native-base';
import {ListRenderItem} from 'react-native';
import {Serie} from '~/shared/types';
import {FavoriteItem} from '../components';
import {useFavorites} from '~/hooks/use-favorites';
import EmptyList from '~/shared/components/empty-list';
import ListFooter from '~/shared/components/list-footer';

const Favorites = () => {
  const {favorites, removeFromFavorites} = useFavorites();

  const onPressItem = (item: Serie) => {
    console.log('onPressItem', item);
  };

  const onDeleteItem = (item: Serie) => {
    removeFromFavorites(item.id);
  };

  const onRenderItem: ListRenderItem<Serie> = ({item}: {item: Serie}) => {
    return (
      <FavoriteItem onPress={onPressItem} data={item} onDelete={onDeleteItem} />
    );
  };

  return (
    <Container>
      <Header title="Favorites" />
      <View bgColor="container.light" style={styles.mainContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={item => String(item.id)}
          renderItem={onRenderItem}
          data={favorites}
          ListEmptyComponent={
            <EmptyList
              title="Your Favorites list is empty"
              description='Click on "Add to Favorites" button to add series to your favorite list.'
            />
          }
          ListFooterComponent={<ListFooter isEmpty={favorites.length === 0} />}
        />
      </View>
    </Container>
  );
};

export default Favorites;
