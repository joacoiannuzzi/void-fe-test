import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { Container, Space, Text, Title } from '@mantine/core';

import { postsApi } from '@/services/posts';

const PostPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const postsQuery = postsApi.usePostQuery({
    id: id as string,
  });

  if (postsQuery.isLoading) return <div>Loading...</div>;

  if (postsQuery.isError || !postsQuery.data)
    return <div>An error has occurred!</div>;

  return (
    <>
      <Head>
        <title>Post</title>
        <meta name="description" content="Post" />
      </Head>

      <Container>
        <Title order={2}>Post</Title>

        <Space h="lg" />

        <Title order={5}>By {postsQuery.data.authorName}</Title>

        <Image
          src={postsQuery.data.authorAvatar}
          width={100}
          height={100}
          alt={`Image of ${postsQuery.data.authorName}`}
        />
        <Text>
          Date: {new Date(postsQuery.data.createdAt).toLocaleString()}
        </Text>

        <Space h="xl" />

        <Image
          src={postsQuery.data.postImage}
          width={300}
          height={300}
          alt={`post image`}
        />
        <Space h="xl" />

        <Text>{postsQuery.data.postText}</Text>
      </Container>
    </>
  );
};

export default PostPage;
