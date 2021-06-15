export const getSongs = [
  {
    key: "1",
    title: "Let's Fall in Love for the Night",
    artist: "FINNEAS",
    songPath: require("./assets/music/1.mp3"),
    poster: require("./assets/picture/f1.jpg"),
    backdrop: require("./assets/picture/b1.jpg"),
  },
  {
    key: "2",
    title: "Peaches",
    artist: "Justin Bieber, Daniel Caesar, Giveon",
    songPath: require("./assets/music/2.mp3"),
    poster: require("./assets/picture/f2.png"),
    backdrop: require("./assets/picture/b2.jpg"),
  },
  {
    key: "3",
    title: "Phantom and Friends",
    artist: "Old Man Canyon",
    songPath: require("./assets/music/3.mp3"),
    poster: require("./assets/picture/f3.jpg"),
    backdrop: require("./assets/picture/b3.png"),
  },
  {
    key: "4",
    title: "Dancing in My Room",
    artist: "347aidan",
    songPath: require("./assets/music/4.mp3"),
    poster: require("./assets/picture/f4.jpg"),
    backdrop: require("./assets/picture/b4.jpg"),
  },
  {
    key: "5",
    title: "SICKO MODE",
    artist: "Travis Scott",
    songPath: require("./assets/music/5.mp3"),
    poster: require("./assets/picture/f5.jpg"),
    backdrop: require("./assets/picture/b5.jpg"),
  },
  {
    key: "6",
    title: "In Da Club",
    artist: "50 Cent",
    songPath: require("./assets/music/6.mp3"),
    poster: require("./assets/picture/f6.png"),
    backdrop: require("./assets/picture/b6.jpg"),
  },
  {
    key: "7",
    title: "Teeth",
    artist: "5 Seconds of Summer",
    songPath: require("./assets/music/7.mp3"),
    poster: require("./assets/picture/f7.png"),
    backdrop: require("./assets/picture/b7.jpg"),
  },
  {
    key: "8",
    title: "Roll in Peace",
    artist: "Kodak Black, XXXTENTACION",
    songPath: require("./assets/music/8.mp3"),
    poster: require("./assets/picture/f8.jpg"),
    backdrop: require("./assets/picture/b8.jpg"),
  },
  {
    key: "9",
    title: "Revenge",
    artist: "XXXTENTACION",
    songPath: require("./assets/music/9.mp3"),
    poster: require("./assets/picture/f9.png"),
    backdrop: require("./assets/picture/b9.jpg"),
  },
  {
    key: "10",
    title: "Mo Bamba",
    artist: "Sheck Wes",
    songPath: require("./assets/music/10.mp3"),
    poster: require("./assets/picture/f10.jpg"),
    backdrop: require("./assets/picture/b10.jpg"),
  },
];

/*

1. Let's Fall in Love for the Night - FINNEAS
2. Peaches - Justin Bieber, Daniel Caesar, Giveon
3. Phantom and Friends - Old Man Canyon
4. Dancing in My Room - 347aidan
5. SICKO MODE - Travis Scott
6. In Da Club - 50 Cent
7. Teeth - 5 Seconds of Summer
8. Roll in Peace - Kodak Black, XXXTENTACION
9. Revenge - XXXTENTACION
10. Mo Bamba - Sheck Wes 

*/

/*
import { API_KEY } from "./config";
const genres = {
  12: "Adventure",
  14: "Fantasy",
  16: "Animation",
  18: "Drama",
  27: "Horror",
  28: "Action",
  35: "Comedy",
  36: "History",
  37: "Western",
  53: "Thriller",
  80: "Crime",
  99: "Documentary",
  878: "Science Fiction",
  9648: "Mystery",
  10402: "Music",
  10749: "Romance",
  10751: "Family",
  10752: "War",
  10770: "TV Movie",
};

const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`;
const getImagePath = (path) =>
`https://image.tmdb.org/t/p/w440_and_h660_face${path}`;
const getBackdropPath = (path) =>
`https://image.tmdb.org/t/p/w370_and_h556_multi_faces${path}`;

export const getMovies = async () => {
  const { results } = await fetch(API_URL).then((x) => x.json());
  const movies = results.map(
    ({
      id,
      original_title,
      poster_path,
      backdrop_path,
      vote_average,
      overview,
      release_date,
      genre_ids,
    }) => ({
      key: String(id),
      title: original_title,
      poster: getImagePath(poster_path),
      backdrop: getBackdropPath(backdrop_path),
      rating: vote_average,
      description: overview,
      releaseDate: release_date,
      genres: genre_ids.map((genre) => genres[genre]),
    })
  );

  return movies;
};
*/
