import Head from 'next/head';
import { useCallback, useState } from 'react';

import {
  Container,
  Group,
  Space,
  Stack,
  Text,
  TextInput,
  Title,
} from '@mantine/core';

import { PostsListItem } from '@/components/PostsListItem';
import { useEventListener } from '@/hooks';
import { postsApi } from '@/services/posts';

const PostsPage = () => {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  const onSearchChange = (text: string) => {
    setPage(1);
    setSearch(text);
  };

  const postsQuery = postsApi.usePostsQuery({
    page,
    search,
  });

  const onScroll = useCallback(() => {
    const scrolledToBottom =
      (window.innerHeight + window.scrollY) / document.body.offsetHeight >=
      0.85;

    if (scrolledToBottom && !postsQuery.isFetching) {
      console.log('Fetching more data...');
      setPage(page + 1);
    }
  }, [page, postsQuery.isFetching]);

  useEventListener('scroll', onScroll);

  if (postsQuery.isLoading) return <div>Loading...</div>;

  if (postsQuery.isError || !postsQuery.data)
    return <div>An error has occurred!</div>;

  const posts = postsQuery.data;

  return (
    <>
      <Head>
        <title>Posts</title>
        <meta name="description" content="Posts" />
      </Head>

      <Container>
        <Title order={2}>Posts</Title>
        <Space h="lg" />

        <TextInput
          value={search}
          onChange={event => onSearchChange(event.currentTarget.value)}
          placeholder="Search..."
        />

        <Space h="xl" />
        <Stack justify="flex-start" spacing="md">
          <Group position="left" grow>
            <Text>Id</Text>
            <Text>Author name</Text>
            <Text>Author image</Text>
            <Text>Text</Text>
            <Text>Post image</Text>
            <Text>Date</Text>
          </Group>

          <Space h="l" />

          {posts.map(post => (
            <PostsListItem key={post.id} post={post} />
          ))}

          {postsQuery.isFetching && <Text>Loading more posts...</Text>}
        </Stack>
      </Container>
    </>
  );
};

export default PostsPage;
