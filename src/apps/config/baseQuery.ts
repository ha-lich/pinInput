import { logout } from '@apps/slices/authSlice';
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query';
import { notification } from 'antd';
import { Mutex } from 'async-mutex';
import axios from 'axios';
import { readAccessToken } from '@utils/localStorage';
import { ErrorProps } from '@globalTypes/globalTypes';
import { PATH_API } from '@utils/constants';
// create a new mutex
const mutex = new Mutex();

const instance = axios.create({
  baseURL: PATH_API,
  responseType: 'arraybuffer',
});

instance.interceptors.request.use(
  (config: any) => {
    config.headers.Authorization = `Bearer ${readAccessToken()}`;
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

const callApi = async (args: any) => {
  if (args.method.toLowerCase() === 'get') {
    return await instance.get(`${PATH_API}${args.url}`, {
      responseType: 'json',
    });
  }

  return await instance.post(`${PATH_API}${args.url}`, args.body, {
    responseType: 'json',
  });
};;

const baseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api) => {
  await mutex.waitForUnlock();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let result: any = await callApi(args);

  const error = result.data.error;
  if (error && error.code) {
    switch (error.code) {
      case 400:
        notification.error({
          message: 'Bad request',
        });
        break;
      case 401:
        api.dispatch(logout());
        notification.error({
          message: error.message,
        });
        break;
      case 403:
        notification.error({
          message: error.message,
        });
        api.dispatch(logout());
        break;
      case 422:
        const getError = Object.values(
          (result.error?.data as ErrorProps)?.errors,
        )[0];
        notification.error({
          message: getError[0],
        });
        break;
      case 500:
        notification.error({
          message: 'Error',
        });
        break;
      case 501:
      case 502:
      case 503:
        notification.error({
          message: 'Internal Server Error',
        });
        break;
    }
  }
  return result;
};

export default baseQuery;
