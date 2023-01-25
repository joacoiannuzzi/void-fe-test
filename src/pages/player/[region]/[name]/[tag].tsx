import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { Container, Group, Space, Stack, Text, Title } from '@mantine/core';

import { valorantApi } from '@/services/valorant';
import { getPlayerKDA, millisToMinutesAndSeconds } from '@/utils';

const PlayerPage = () => {
  const router = useRouter();

  const { region, name, tag } = router.query;

  const matchesQuery = valorantApi.useMatchesQuery({
    region: region as 'na' | 'eu' | 'ap' | 'kr' | 'latam' | 'br',
    name: name as string,
    tag: tag as string,
  });

  if (matchesQuery.isLoading) return <div>Loading...</div>;

  if (matchesQuery.isError || !matchesQuery.data)
    return <div>An error has occurred!</div>;

  const matches = matchesQuery.data.data ?? [];

  const playerImage =
    matches[0].players?.all_players?.find(
      player => player.name === name && player.tag === tag,
    )?.assets.card.small ?? '';

  return (
    <>
      <Head>
        <title>Matches</title>
        <meta name="description" content="Matches" />
      </Head>

      <Container>
        <Title order={2}>Matches</Title>

        <Space h="lg" />

        <Title order={5}>Name: {name}</Title>
        <Title order={5}>Tag: {tag}</Title>
        <Title order={5}>Region: {region}</Title>

        <Image
          src={playerImage}
          width={100}
          height={100}
          alt={`Image of ${name}#${tag}`}
        />

        <Space h="xl" />

        <Stack justify="flex-start" spacing="xs">
          <Group position="left" grow>
            <Text>Map played</Text>
            <Text>If the player’s team lost/win</Text>
            <Text>Player’s KDA</Text>
            <Text>Agent used by player</Text>
            <Text>Date and time at which the match started</Text>
            <Text>Match duration</Text>
            <Text>Agent image</Text>
          </Group>

          <Space h="l" />

          {matches.map(match => {
            const playerInfo = match.players.all_players.find(
              player => player.name === name && player.tag === tag,
            );
            const teamOfPlayer = playerInfo?.team === 'Blue' ? 'blue' : 'red';

            const hasPlayerWon = match.teams[teamOfPlayer].has_won;

            const kda = getPlayerKDA(
              playerInfo?.stats.kills ?? 0,
              playerInfo?.stats.deaths ?? 0,
              playerInfo?.stats.assists ?? 0,
            );

            return (
              <Group position="left" grow key={match.metadata.matchid}>
                <Text>{match.metadata.map}</Text>
                <Text>{hasPlayerWon ? 'Won' : 'Lost'}</Text>
                <Text>{kda}</Text>
                <Text>{playerInfo?.character}</Text>
                <Text>
                  {new Date(match.metadata.game_start).toLocaleString()}
                </Text>
                <Text>
                  {millisToMinutesAndSeconds(match.metadata.game_length)}
                </Text>

                <Image
                  src={playerInfo?.assets.agent.small ?? ''}
                  width={60}
                  height={100}
                  alt={playerInfo?.character ?? ''}
                />
              </Group>
            );
          })}
        </Stack>
      </Container>
    </>
  );
};

export default PlayerPage;
