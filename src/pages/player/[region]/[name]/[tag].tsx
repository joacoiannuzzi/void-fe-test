import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { Container, Group, Space, Stack, Text, Title } from '@mantine/core';

import { Match } from '@/components/Match';
import { valorantApi } from '@/services/valorant';

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

          {matches.map(match => (
            <Match
              key={match.metadata.matchid}
              match={match}
              name={name as string}
              tag={tag as string}
            />
          ))}
        </Stack>
      </Container>
    </>
  );
};

export default PlayerPage;
