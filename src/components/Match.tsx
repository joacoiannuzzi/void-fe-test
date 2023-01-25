import Image from 'next/image';

import { Group, Text } from '@mantine/core';

import { MatchesData } from '@/types/matchesResponse';
import { getPlayerKDA, millisToMinutesAndSeconds } from '@/utils';

export function Match({
  match,
  name,
  tag,
}: {
  match: MatchesData;
  name: string;
  tag: string;
}) {
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
    <Group position="left" grow>
      <Text>{match.metadata.map}</Text>
      <Text>{hasPlayerWon ? 'Won' : 'Lost'}</Text>
      <Text>{kda}</Text>
      <Text>{playerInfo?.character}</Text>
      <Text>{new Date(match.metadata.game_start).toLocaleString()}</Text>
      <Text>{millisToMinutesAndSeconds(match.metadata.game_length)}</Text>

      <Image
        src={playerInfo?.assets.agent.small ?? ''}
        width={60}
        height={100}
        alt={playerInfo?.character ?? ''}
      />
    </Group>
  );
}
