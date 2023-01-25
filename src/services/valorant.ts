import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { LeaderboardResponse, Region } from '@/types/leaderboardResponse';
import { MatchesResponse } from '@/types/matchesResponse';

export const valorantApi = createApi({
  reducerPath: 'valorantApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.henrikdev.xyz/valorant/',
  }),
  endpoints: builder => ({
    leaderboard: builder.query<
      LeaderboardResponse,
      {
        region: Region;
      }
    >({
      query: ({ region }) => `v2/leaderboard/${region}`,
    }),

    matches: builder.query<
      MatchesResponse,
      {
        region: Region;
        name: string;
        tag: string;
      }
    >({
      query: ({ region, name, tag }) => `v3/matches/${region}/${name}/${tag}`,
    }),
  }),
});
