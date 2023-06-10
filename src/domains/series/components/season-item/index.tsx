import {FlatList, Image, View} from 'native-base';
import React from 'react';
import {ListRenderItem, TouchableOpacity} from 'react-native';
import {Text} from '~/shared/components';
import {Episode} from '~/shared/types';
import styles from './styles';

interface Props {
  season: string;
  data: Episode[];
  onItemPress: (episode: Episode) => void;
}

export default function SeasonItem({season, data, onItemPress}: Props) {
  const renderItem: ListRenderItem<Episode> = ({item}: {item: Episode}) => {
    const handleItemPress = () => {
      onItemPress(item);
    };

    return (
      <TouchableOpacity onPress={handleItemPress}>
        <View bgColor="container.dark" style={styles.itemContainer}>
          <View bgColor="container.darker" style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={
                item.image?.medium
                  ? {
                      uri: item.image?.medium,
                    }
                  : require('~/assets/images/placeholder.png')
              }
              alt={item.name}
              size="xl"
            />
          </View>
          <Text numberOfLines={2} style={styles.itemName}>
            {item.name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Season {season}</Text>
      <FlatList
        data={data}
        horizontal
        keyExtractor={item => String(item.id)}
        renderItem={renderItem}
      />
    </View>
  );
}
