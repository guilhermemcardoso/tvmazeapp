import {Api} from '~/services/api';

export async function getSeries(page = 0) {
  console.log('ENTROU');
  return await Api({
    method: 'get',
    url: `/shows?page=${page}`,
  });
}

export async function searchSeries(query: string) {
  return await Api({
    method: 'get',
    url: `/search/shows?q=${query}`,
  });
}
