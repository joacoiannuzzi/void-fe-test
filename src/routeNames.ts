const routes = {
  player: (region: string, name: string, tag: string) =>
    `/player/${region}/${name}/${tag}`,
  post: (id: string) => `/posts/${id}`,
};

export default routes;
