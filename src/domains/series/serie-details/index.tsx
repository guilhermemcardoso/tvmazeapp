import React from 'react';
import {Container, Header, IconButton, Text} from '~/shared/components';
import styles from './styles';
import {View} from 'native-base';
import {Routes} from '~/navigation/routes';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthorizedStackParamList} from '~/navigation/stacks/authorized';

type Props = NativeStackScreenProps<
  AuthorizedStackParamList,
  Routes.SERIE_DETAILS
>;

const SerieDetails = ({route, navigation}: Props) => {
  const {serie} = route.params;
  console.log('SERIE SELECIONADA', serie);

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
        title="Serie Details"
      />
      <View bgColor="container.light" style={styles.mainContainer}>
        <Text>SERIE DETAILS</Text>
      </View>
    </Container>
  );
};

export default SerieDetails;
