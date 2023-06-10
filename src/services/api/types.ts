import {RawAxiosRequestHeaders} from 'axios';

export type ApiType = {
  method: 'get' | 'delete' | 'head' | 'post' | 'put' | 'patch';
  url: string;
  headers?: RawAxiosRequestHeaders;
  data?: unknown;
};
