const API_KEY = "7f9da03c80170cd7df2dbdfa5c492e89";

const requests = [
  {
    isLarge: true,
    name: "Trending",
    fetch: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  {
    isLarge: false,
    name: "Netflix Originals",
    fetch: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  },
  {
    isLarge: false,
    name: "Animation",
    fetch: `discover/movie?api_key=${API_KEY}&with_genres=16`,
  },
  {
    isLarge: true,
    name: "Top Rated",
    fetch: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  },

  {
    isLarge: false,
    name: "Action Movies",
    fetch: `discover/movie?api_key=${API_KEY}&with_genres=28`,
  },
  {
    isLarge: false,
    name: "Comedy movies",
    fetch: `discover/movie?api_key=${API_KEY}&with_genres=35`,
  },

  {
    isLarge: true,
    name: "Horror Movies",
    fetch: `discover/movie?api_key=${API_KEY}&with_genres=27`,
  },

  {
    isLarge: false,
    name: "Romance Movies",
    fetch: `discover/movie?api_key=${API_KEY}&with_genres=10749`,
  },
  {
    isLarge: false,
    name: "Documentaries",
    fetch: `discover/movie?api_key=${API_KEY}&with_genres=99`,
  },
  // {
  //   isLarge: false,
  //   name: "Trailer",
  //   fetch: `/movie/{movie_id}/videos?api_key=${API_KEY}`,
  // },
];

export default requests;
