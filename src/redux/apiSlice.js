import { createApi } from '@reduxjs/toolkit/dist/query/react';
import { AppConfig } from '../config';
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const baseQuery = fetchBaseQuery({
  baseUrl: AppConfig.BaseUri,
  prepareHeaders: (headers, { getState }) => {
    const state = getState;
    const token = state().auth?.token;
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

export const apiSlice = createApi({
  baseQuery: baseQuery,
  endpoints: () => ({}),
});
