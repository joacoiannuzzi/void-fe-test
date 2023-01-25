import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { LeaderboardResponse } from '@/types/leaderboardResponse';
import { MatchesResponse } from '@/types/matchesResponse';

export const valorantApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.henrikdev.xyz/valorant/',
  }),
  endpoints: builder => ({
    leaderboard: builder.query<
      LeaderboardResponse,
      {
        region: 'eu' | 'na' | 'ap' | 'kr' | 'latam' | 'br';
      }
    >({
      query: ({ region }) => `v2/leaderboard/${region}`,
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
