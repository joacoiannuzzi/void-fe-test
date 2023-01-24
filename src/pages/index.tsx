import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import routes from '@/routeNames';
import { valorantApi } from '@/services/valorant';
import { Container, Group, Space, Stack, Text, Title } from '@mantine/core';

const ITEMS_PER_PAGE = 1000;

export default function Home() {
  const [region, setRegion] = useState<
    'na' | 'eu' | 'ap' | 'kr' | 'latam' | 'br'
  >('na');
  const [page, setPage] = useState(0);

  const leaderboardQuery = valorantApi.useLeaderboardQuery({
    region,
    // start: page * ITEMS_PER_PAGE,
  });

  useEffect(() => {
    const onScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
      if (scrolledToBottom && !leaderboardQuery.isFetching) {
        console.log('Fetching more data...');
        setPage(page + 1);
      }
    };

    document.addEventListener('scroll', onScroll);

    return function () {
      document.removeEventListener('scroll', onScroll);
    };
  }, [page, leaderboardQuery.isFetching]);

  if (leaderboardQuery.isLoading) return <div>Loading...</div>;

  if (leaderboardQuery.isError || !leaderboardQuery.data)
    return <div>An error has occurred!</div>;

  // there are duplicates and empty puuids, so I filter them out
  const players =
    leaderboardQuery.data.players?.filter(player => player.puuid !== '') ?? [];

  return (
    <>
      <Head>
        <title>Valorant Leaderboard</title>
        <meta name="description" content="Valorant Leaderboard" />
      </Head>

      <Container>
        <Title order={2}>Valorant Leaderboard</Title>
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

          {players.map(player => (
            <Link
              href={routes.player(
                region,
                player.gameName ?? '',
                player.tagLine ?? '',
              )}
              key={`${player.gameName}-${player.tagLine}`}
            >
              <Group position="left" grow>
                <Text>{player.gameName}</Text>
                <Text size="sm" color="gray">
                  {player.tagLine}
                </Text>
                <Text size="sm" color="gray">
                  {player.leaderboardRank}
                </Text>

                <Text size="sm" color="gray">
                  {player.rankedRating}
                </Text>

                <Text size="sm" color="gray">
                  {player.numberOfWins}
                </Text>

                <Text size="sm" color="gray">
                  {player.competitiveTier}
                </Text>
              </Group>
            </Link>
          ))}
        </Stack>
      </Container>
    </>
  );
}
