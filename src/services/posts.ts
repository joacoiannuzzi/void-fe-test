import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Post, PostsResponse } from '@/types/postsResponse';

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6396aee2a68e43e41808fa18.mockapi.io/api/',
  }),
  endpoints: builder => ({
    posts: builder.query<
      PostsResponse,
      {
        page: number;
        search?: string;
      }
    >({
      query: ({ page, search = '' }) =>
        `posts?page=${page}&limit=5&sortBy=createdAt&order=desc${
          search ? '&search=' + search : ''
        }`,
      // Only have one cache entry because the arg always maps to one string
      serializeQueryArgs: ({ endpointName, queryArgs }) => {
        if (!queryArgs.search || queryArgs.search === '') return endpointName;
        return `${endpointName}-${queryArgs.search}`;
      },
      // Always merge incoming data to the cache entry
      merge: (currentCache, newItems) => {
        currentCache.push(...newItems);
      },
      // Refetch when the page arg changes
      forceRefetch({ currentArg, previousArg }) {
        if (
          currentArg?.page &&
          previousArg?.page &&
          currentArg?.page <= previousArg?.page
        )
          return false;

        return currentArg?.page !== previousArg?.page;
      },
    }),

    post: builder.query<
      Post,
      {
        id: string;
      }
    >({
      query: ({ id }) => `posts/${id}`,
    }),
  }),
});
