import { LeaderboardResponse } from '@/types/leaderboardResponse';
import { MatchesResponse } from '@/types/matchesResponse';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const valorantApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.henrikdev.xyz/valorant/',
  }),
  endpoints: builder => ({
    leaderboard: builder.query<
      LeaderboardResponse,
      {
        region: 'eu' | 'na' | 'ap' | 'kr' | 'latam' | 'br';
        start?: number;
      }
    >({
      query: ({ region, start = 0 }) =>
        `v2/leaderboard/${region}?start=${start}`,
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, newData) => {
        if (!newData.players || newData.players?.length === 0) return;
        currentCache.players?.push(...newData.players);
      },
      // Refetch when the page arg changes
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),

    matches: builder.query<
      MatchesResponse,
      {
        region: 'eu' | 'na' | 'ap' | 'kr' | 'latam' | 'br';
        name: string;
        tag: string;
      }
    >({
      query: ({ region, name, tag }) => `v3/matches/${region}/${name}/${tag}`,
    }),
  }),
});
