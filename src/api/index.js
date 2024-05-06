export const getLatestNews = async (searchQeury) => {
  const request = await fetch(
    `https://hn.algolia.com/api/v1/search?query=${searchQeury}&hitsPerPage=50&page=0`,
  );
  return await request.json();
};

export const getPopularNews = async () => {
  const request = await fetch(
    `https://hn.algolia.com/api/v1/search?querya=&hitsPerPage=50&page=0`,
  );
  return await request.json();
};
