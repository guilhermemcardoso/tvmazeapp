import {create} from 'zustand';
import {Person} from '~/shared/types';

interface PeopleState {
  people: Person[];
  setPeople: (series: Person[]) => void;
  filteredPeople: Person[];
  setFilteredPeople: (series: Person[]) => void;
}

export const usePeopleStore = create<PeopleState>(set => ({
  people: [],
  filteredPeople: [],
  setPeople: async people => {
    set(state => ({
      ...state,
      people: [...state.people, ...people],
    }));
  },
  setFilteredPeople: async people => {
    set(state => ({
      ...state,
      filteredPeople: people,
    }));
  },
}));
