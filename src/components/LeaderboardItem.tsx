import Link from 'next/link';

import { Group, Text } from '@mantine/core';

import routes from '@/routeNames';
import { Player } from '@/types/leaderboardResponse';

export function LeaderboardItem({
  region,
  player,
}: {
  region: string;
  player: Player;
}): JSX.Element {
  return (
    <Link
      href={routes.player(region, player.gameName ?? '', player.tagLine ?? '')}
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

        <Text size="sm" color="gray">
          {player.IsAnonymized ? 'Yes' : 'No'}
        </Text>

        <Text size="sm" color="gray">
          {player.IsBanned ? 'Yes' : 'No'}
        </Text>
      </Group>
    </Link>
  );
}
