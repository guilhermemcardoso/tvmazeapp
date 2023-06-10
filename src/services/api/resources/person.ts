import {Api} from '~/services/api';

export async function getPeople(page = 0) {
  return await Api({
    method: 'get',
    url: `/people?page=${page}`,
  });
}

export async function searchPeople(query: string) {
  return await Api({
    method: 'get',
    url: `/search/people?q=${query}`,
  });
}
