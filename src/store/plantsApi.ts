import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { DataPlant } from '../types/types';

export const plantsApi = createApi({
  reducerPath: 'plantsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5123/' }),
  endpoints: (builder) => ({
    getPlants: builder.query<DataPlant[], string | void>({
      query: (search) => `plants?${search ? `/search?q=${search}` : `?limit=0`}`,
      // transformResponse: (response: ApiResponse) => response.plants,
    }),
  }),
});
export const { useGetPlantsQuery } = plantsApi;
