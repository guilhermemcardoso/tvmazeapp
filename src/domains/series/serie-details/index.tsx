import React, {useEffect, useMemo} from 'react';
import {Container, Header, IconButton, Text} from '~/shared/components';
import styles from './styles';
import {Image, ScrollView, View, useTheme} from 'native-base';
import {Routes} from '~/navigation/routes';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthorizedStackParamList} from '~/navigation/stacks/authorized';
import {removeTagsFromString} from '~/shared/utils/format';
import Icon from 'react-native-vector-icons/Ionicons';
import {useEpisodes} from '~/hooks/use-episodes';
import {Episode} from '~/shared/types';
import {SeasonItem} from '../components';

type Props = NativeStackScreenProps<
  AuthorizedStackParamList,
  Routes.SERIE_DETAILS
>;

const SerieDetails = ({route, navigation}: Props) => {
  const {serie} = route.params;
  const {getEpisodes, episodes, selectedSerie} = useEpisodes();
  const theme = useTheme();

  const seasons = useMemo(() => {
    const episodesPerSeason = episodes.reduce((s, episode) => {
      const season = episode.season;

      if (!s[season]) {
        s[season] = [];
      }

      s[season].push(episode);

      return s;
    }, {} as {[key: number]: Episode[]});

    return Object.keys(episodesPerSeason).map(item => {
      return {number: item, data: episodesPerSeason[Number(item)]};
    });
  }, [episodes]);

  const onBackPress = () => {
    navigation.goBack();
  };

  const onEpisodeItemPress = (episode: Episode) => {
    navigation.navigate(Routes.EPISODE_DETAILS, {episode: episode});
  };

  useEffect(() => {
    if (serie && selectedSerie !== serie.id) {
      getEpisodes(serie.id);
    }
  }, [serie, selectedSerie, getEpisodes]);

  return (
    <Container>
      <Header
        LeftComponent={
          <IconButton
            size={26}
            iconName="ios-arrow-back"
            onPress={onBackPress}
          />
        }
        title={serie.name}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View bgColor="container.light" style={styles.mainContainer}>
          <Image
            style={styles.image}
            source={{
              uri: serie.image.medium,
            }}
            alt={serie.name}
            size="2xl"
          />
          <Text style={styles.title} size="title">
            {serie.name}
          </Text>
          <View style={styles.ratingContainer}>
            <Icon
              color={theme.colors.font.primary}
              name={'ios-star'}
              size={16}
            />
            <Text style={styles.rating}>{serie.rating.average}</Text>
          </View>
          <View style={styles.genreContainer}>
            <Text style={styles.genreLabel}>Genre: </Text>
            <Text>{serie.genres.join(', ')}</Text>
          </View>
          <View style={styles.scheduleContainer}>
            <Text style={styles.scheduleLabel}>Schedule: </Text>
            <Text>{`${serie.schedule.days.join(', ')} at ${
              serie.schedule.time
            }`}</Text>
          </View>
          <Text style={styles.summary}>
            {removeTagsFromString(serie.summary)}
          </Text>
          <Text size="subtitle">Episodes:</Text>
          {seasons.map(season => {
            return (
              <SeasonItem
                onItemPress={onEpisodeItemPress}
                season={season.number}
                data={season.data}
              />
            );
          })}
        </View>
      </ScrollView>
    </Container>
  );
};

export default SerieDetails;
