import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from '@apps/config/baseQuery';
import { ResponseProps, UserProps } from '@globalTypes/globalTypes';

export type LoginResponseType = {
  access_token: string;
  token_type: string;
  expires_in: number;
};

export const authServiceApi = createApi({
  reducerPath: 'authServiceApi',
  baseQuery: baseQuery,
  endpoints: builder => ({
    authLogin: builder.mutation({
      query: payload => ({
        url: '/users/login',
        method: 'POST',
        body: payload,
      }),
    }),
    getProfile: builder.query({
      query: () => ({
        url: '/auth/user-profile',
        method: 'GET',
      }),
      transformResponse: (res: ResponseProps<UserProps>) => res.data,
    }),
  }),
});

export const { useAuthLoginMutation, useGetProfileQuery } = authServiceApi;
