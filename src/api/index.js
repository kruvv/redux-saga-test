export const getLatestNews = async () => {
  const request = await fetch(
    "https://hn.algolia.com/api/v1/search?query=react&hitsPerPage=50&page=0",
  );
  return await request.json();
};
