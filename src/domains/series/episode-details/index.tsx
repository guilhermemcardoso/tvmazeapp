import React from 'react';
import {Container, Header, IconButton, Text} from '~/shared/components';
import styles from './styles';
import {View} from 'native-base';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthorizedStackParamList} from '~/navigation/stacks/authorized';
import {Routes} from '~/navigation/routes';

type Props = NativeStackScreenProps<
  AuthorizedStackParamList,
  Routes.EPISODE_DETAILS
>;

const EpisodeDetails = ({route, navigation}: Props) => {
  const {episode} = route.params;
  console.log('EPISODIO SELECIONADA', episode);

  const onBackPress = () => {
    navigation.goBack();
  };
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
        title="Episode Details"
      />
      <View bgColor="container.light" style={styles.mainContainer}>
        <Text>EPISODE DETAILS</Text>
      </View>
    </Container>
  );
};

export default EpisodeDetails;
