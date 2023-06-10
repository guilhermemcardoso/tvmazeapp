import axios, {AxiosError, RawAxiosRequestHeaders} from 'axios';

import {ApiType} from './types';

import {API_URL} from '@env';

export const instance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export async function Api({method, url, data, headers}: ApiType) {
  const requestHeaders: RawAxiosRequestHeaders = headers || {};

  try {
    const response = await instance({
      url,
      method,
      data,
      headers: requestHeaders,
    });

    return {response: response.data, status: response.status};
  } catch (error) {
    if (error instanceof AxiosError) {
      return {response: error.response?.data, status: error.response?.status};
    }

    return {response: JSON.stringify(error), status: 500};
  }
}
