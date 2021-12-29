export const get = async () => {
  console.log('GET');
  return { get: 'GET' };
};

export const post = async (post) => {
  console.log(post);
  return { post };
};
