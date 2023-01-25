import Image from 'next/image';
import Link from 'next/link';

import { Group, Text } from '@mantine/core';

import routes from '@/routeNames';
import { Post } from '@/types/postsResponse';

export function PostsListItem({ post }: { post: Post }) {
  return (
    <Link href={routes.post(post.id)}>
      <Group position="left" grow>
        <Text>{post.id}</Text>
        <Text>{post.authorName}</Text>
        <Image
          src={post.authorAvatar}
          width={60}
          height={100}
          alt={post.authorName}
        />
        <Text>{post.postText.substring(0, 100)}...</Text>

        <Image
          src={post.postImage}
          width={'60'}
          height={100}
          alt={'image of post'}
        />

        <Text>{new Date(post.createdAt).toLocaleString()}</Text>
      </Group>
    </Link>
  );
}
