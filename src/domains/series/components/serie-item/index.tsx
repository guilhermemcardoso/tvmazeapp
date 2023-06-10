import React from 'react';
import {Image, View, useTheme} from 'native-base';
import {Serie} from '~/shared/types';
import {TouchableOpacity} from 'react-native';
import {Text} from '~/shared/components';
import styles from './styles';
import {getYearFromDate} from '~/shared/utils/dates';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  data: Serie;
  isFavorite: boolean;
  onPress: (item: Serie) => void;
  onFavorite: (item: Serie) => void;
}

export default function SerieItem({
  data,
  isFavorite,
  onFavorite,
  onPress,
}: Props) {
  const theme = useTheme();

  const onFavoritePress = () => {
    onFavorite(data);
  };

  const onItemPress = () => {
    onPress(data);
  };

  return (
    <TouchableOpacity onPress={onItemPress}>
      <View bgColor={theme.colors.container.dark} style={styles.itemContainer}>
        <Image
          style={styles.image}
          source={{
            uri: data.image.medium,
          }}
          alt={data.name}
          size="xl"
        />
        <View style={styles.infoContainer}>
          <View style={styles.titleContainer}>
            <Text size="subtitle" style={styles.title}>
              {data.name}
            </Text>
          </View>
          <View style={styles.titleContainer}>
            <Text>{`"${data.type}"`}</Text>
          </View>
          <View style={styles.detailsContainer}>
            <Text>{getYearFromDate(data.premiered)}</Text>
            <View style={styles.ratingContainer}>
              <Icon
                color={theme.colors.font.primary}
                name={'ios-star'}
                size={16}
              />
              <Text style={styles.rating}>{data.rating.average}</Text>
            </View>
          </View>
          <View borderColor="divider.primary" style={styles.favoriteContainer}>
            {isFavorite ? (
              <Text variant="secondary" style={styles.addedToFavorites}>
                Added to Favorites
              </Text>
            ) : (
              <TouchableOpacity
                onPress={onFavoritePress}
                style={styles.addToFavoritesContainer}>
                <Icon
                  color={theme.colors.font.primary}
                  name={'ios-heart-outline'}
                  size={16}
                />
                <Text style={styles.addToFavorites}>Add to Favorites</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
