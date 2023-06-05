import { apiSlice } from '../apiSlice';

const productApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllProduct: builder.query({
      query: () => ({
        url: '/products',
        method: 'GET',
      }),
    }),

    createProduct: builder.mutation({
      query: (dto) => ({
        url: '/products',
        body: dto,
        method: 'POST',
      }),
    }),
  }),
});

export const { useGetAllProductQuery } = productApi;
