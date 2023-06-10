import {useCallback, useEffect, useMemo, useState} from 'react';
import {useMutation} from '@tanstack/react-query';
import {Person} from '~/shared/types';
import {usePeopleStore} from '~/store/people-store';
import {
  getPeople as getPeopleMutation,
  searchPeople as searchPeopleMutation,
} from '~/services/api/resources/person';

interface SearchItem {
  score: number;
  person: Person;
}
export function usePeople() {
  const setPeople = usePeopleStore(state => state.setPeople);
  const people = usePeopleStore(state => state.people);
  const setFilteredPeople = usePeopleStore(state => state.setFilteredPeople);
  const filteredPeople = usePeopleStore(state => state.filteredPeople);
  const [hasNext, setHasNext] = useState(true);
  const [isSearch, setIsSearch] = useState(false);

  const {
    mutate: mutateGet,
    isLoading: isGetLoading,
    data: getPeopleResponse,
  } = useMutation({
    mutationFn: getPeopleMutation,
  });

  const {
    mutate: mutateSearch,
    isLoading: isSearchLoading,
    data: searchPeopleResponse,
  } = useMutation({
    mutationFn: searchPeopleMutation,
  });

  const isLoading = useMemo(() => {
    return isGetLoading || isSearchLoading;
  }, [isGetLoading, isSearchLoading]);

  const updatePeople = useCallback(
    (newItems: Person[]) => {
      return setPeople([...newItems]);
    },
    [setPeople],
  );

  const getPeople = useCallback(
    (page: number) => {
      mutateGet(page);
    },
    [mutateGet],
  );

  const searchPeople = (query: string) => {
    if (query.length > 0) {
      setIsSearch(true);
      mutateSearch(query);
    } else {
      setIsSearch(false);
    }
  };

  useEffect(() => {
    if (!getPeopleResponse) {
      return;
    }

    const {response, status} = getPeopleResponse;
    setHasNext(status === 200 ? true : false);

    if (response) {
      updatePeople(response);
    }
  }, [getPeopleResponse, updatePeople]);

  useEffect(() => {
    if (!searchPeopleResponse) {
      return;
    }

    const {response} = searchPeopleResponse;

    if (response) {
      setFilteredPeople(response.map((item: SearchItem) => item.person));
    }
  }, [searchPeopleResponse, setFilteredPeople]);

  return {
    isLoading,
    isSearch,
    people,
    filteredPeople,
    hasNext,
    getPeople,
    searchPeople,
  };
}
