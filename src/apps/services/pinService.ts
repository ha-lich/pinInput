import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from '@apps/config/baseQuery';

export const pinServiceApi = createApi({
  reducerPath: 'pinServiceApi',
  baseQuery: baseQuery,
  endpoints: builder => ({
    verifyPin: builder.mutation({
      query: payload => ({
        url: '/verify',
        method: 'POST',
        body: payload,
      }),
    }),
  }),
});

export const { useVerifyPinMutation } = pinServiceApi;
