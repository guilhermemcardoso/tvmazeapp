import React, {useCallback, useEffect, useState} from 'react';
import {Container, Header, SearchInput} from '~/shared/components';
import styles from './styles';
import {FlatList, View} from 'native-base';
import {ListRenderItem} from 'react-native';
import {Person} from '~/shared/types';
import {PersonItem} from '../components';
import {usePeople} from '~/hooks/use-people';
import EmptyList from '~/shared/components/empty-list';
import ListFooter from '~/shared/components/list-footer';
import {AuthorizedStackParamList} from '~/navigation/stacks/authorized';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Routes} from '~/navigation/routes';

type Props = NativeStackScreenProps<AuthorizedStackParamList, Routes.HOME>;

const People = ({}: Props) => {
  const {
    isLoading,
    isSearch,
    getPeople,
    searchPeople,
    people,
    filteredPeople,
    hasNext,
  } = usePeople();

  const [currentPage, setCurrentPage] = useState(0);

  const onLoadMorePeople = () => {
    setCurrentPage(currentPage + 1);
  };

  const callGetPeople = useCallback(() => {
    getPeople(currentPage);
  }, [getPeople, currentPage]);

  const callSearchPeople = useCallback(
    (text: string) => {
      searchPeople(text);
    },
    [searchPeople],
  );

  const onPressItem = (item: Person) => {
    console.log('Person', item);
  };

  const onRenderItem: ListRenderItem<Person> = ({item}: {item: Person}) => {
    return <PersonItem onPress={onPressItem} data={item} />;
  };

  useEffect(() => {
    callGetPeople();
  }, [callGetPeople, currentPage]);

  return (
    <Container>
      <Header title="People" />
      <SearchInput
        placeholder="Search for people..."
        onSearch={callSearchPeople}
        isLoading={isLoading}
      />
      <View bgColor="container.light" style={styles.mainContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={item => String(item.id)}
          renderItem={onRenderItem}
          data={isSearch ? filteredPeople : people}
          ListEmptyComponent={<EmptyList />}
          ListFooterComponent={
            <ListFooter
              isEmpty={people.length === 0}
              isLoading={isLoading}
              hasNext={hasNext}
              emptyFooter={isSearch}
              onLoadMore={onLoadMorePeople}
            />
          }
        />
      </View>
    </Container>
  );
};

export default People;
