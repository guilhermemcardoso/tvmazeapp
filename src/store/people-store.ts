import {create} from 'zustand';
import {Person} from '~/shared/types';

interface PeopleState {
  people: Person[];
  setPeople: (series: Person[]) => void;
}

export const usePeopleStore = create<PeopleState>(set => ({
  people: [],
  setPeople: async people => {
    set(state => ({
      ...state,
      people: people,
    }));
  },
}));
