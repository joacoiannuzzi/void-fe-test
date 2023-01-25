import Head from 'next/head';
import { useCallback, useMemo, useState } from 'react';

import {
  Container,
  Group,
  Select,
  Space,
  Stack,
  Text,
  Title,
} from '@mantine/core';

import { LeaderboardItem } from '@/components/LeaderboardItem';
import { useEventListener } from '@/hooks';
import { valorantApi } from '@/services/valorant';

const ITEMS_PER_PAGE = 1000;

export default function Home() {
  const [region, setRegion] = useState<
    'na' | 'eu' | 'ap' | 'kr' | 'latam' | 'br'
  >('na');

  const leaderboardQuery = valorantApi.useLeaderboardQuery({
    region,
  });
  const [page, setPage] = useState(0);

  const onScroll = useCallback(() => {
    const scrolledToBottom =
      (window.innerHeight + window.scrollY) / document.body.offsetHeight >=
      0.85;

    const hasFinished =
      ITEMS_PER_PAGE * (page + 1) >=
      (leaderboardQuery.data?.total_players ?? 0);

    if (!hasFinished && scrolledToBottom && !leaderboardQuery.isFetching) {
      console.log('Fetching more data...');
      setPage(page + 1);
    }
  }, [leaderboardQuery.data?.total_players, leaderboardQuery.isFetching, page]);

  useEventListener('scroll', onScroll);

  // there are empty puuids and duplicates, so I filter them out
  const players = useMemo(
    () =>
      leaderboardQuery.data?.players.filter(
        (player, index) =>
          player.puuid !== '' &&
          leaderboardQuery.data?.players.findIndex(
            p =>
              p.puuid === player.puuid &&
              p.gameName === player.gameName &&
              p.tagLine === player.tagLine,
          ) === index,
      ) ?? [],
    [leaderboardQuery.data?.players],
  );

  if (leaderboardQuery.isLoading) return <div>Loading...</div>;

  if (leaderboardQuery.isError || !leaderboardQuery.data)
    return <div>An error has occurred!</div>;

  // the endpoint was supposed to return 1000 players per page, but it was returning all players
  // so I had to paginate the data on the client side
  const playersPaginated = players.slice(0, ITEMS_PER_PAGE * (page + 1));

  return (
    <>
      <Head>
        <title>Valorant Leaderboard</title>
        <meta name="description" content="Valorant Leaderboard" />
      </Head>

      <Container>
        <Title order={2}>Valorant Leaderboard</Title>
        <Space h="xl" />

        <Select
          label="Region"
          value={region}
          data={[
            { value: 'na', label: 'na' },
            { value: 'eu', label: 'eu' },
            { value: 'ap', label: 'ap' },
            { value: 'kr', label: 'kr' },
            { value: 'latam', label: 'latam' },
            { value: 'br', label: 'br' },
          ]}
          onChange={value => {
            setPage(0);
            setRegion(value as any);
          }}
        />
        <Space h="xl" />

        <Text size="sm" color="gray">
          {leaderboardQuery.data.total_players} players
        </Text>
        <Space h="xl" />

        <Stack justify="flex-start" spacing="xs">
          <Group position="left" grow>
            <Text>Game Name</Text>
            <Text size="sm" color="gray">
              Tag Line
            </Text>
            <Text size="sm" color="gray">
              Rank
            </Text>
            <Text size="sm" color="gray">
              Rating
            </Text>
            <Text size="sm" color="gray">
              Wins
            </Text>
            <Text size="sm" color="gray">
              Tier
            </Text>
          </Group>

          <Space h="lg" />

          {playersPaginated.map(player => (
            <LeaderboardItem
              key={`${player.gameName}-${player.tagLine}-${player.puuid}`}
              region={region}
              player={player}
            />
          ))}
        </Stack>
      </Container>
    </>
  );
}
