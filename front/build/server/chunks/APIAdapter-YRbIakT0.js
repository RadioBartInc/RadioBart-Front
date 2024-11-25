import axios from 'axios';

const BACKEND_CONFIG = {
  IP: "127.0.0.1",
  PORT: 3e3
};
const BASE_URL = `http://${BACKEND_CONFIG.IP}:${BACKEND_CONFIG.PORT}/api`;
async function fetchArtistById(artistId) {
  try {
    const response = await axios.get(`${BASE_URL}/artists/${artistId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching artist with ID: ${artistId}`, error);
    throw error;
  }
}
async function fetchAlbumAvgRating(id) {
  try {
    const response = await axios.get(`${BASE_URL}/albums/avgRating/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching average rating:", error);
    throw error;
  }
}
async function fetchAlbumsPage(page, limit, pattern) {
  try {
    const response = await axios.get(
      `${BASE_URL}/albums/paginated/a`,
      {
        params: {
          limit,
          page,
          searchString: pattern
        }
      }
    );
    console.log(response.request);
    return response.data;
  } catch (error) {
    console.error("Error fetching album page:", error);
    throw error;
  }
}
async function fetchArtistsPage(page, limit, pattern) {
  try {
    const response = await axios.get(
      `${BASE_URL}/artists/paginated/a`,
      {
        params: {
          limit,
          page,
          searchString: pattern
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching artist page:", error);
    throw error;
  }
}
class Album {
  constructor(id, title, artist, fecha, genre, reviews, cover) {
    this.id = id;
    this.title = title;
    this.artist = artist;
    this.fecha = fecha;
    this.genre = genre;
    this.reviews = reviews;
    this.cover = cover;
  }
  toAPIFormat() {
    return {
      title: this.title,
      artist: this.artist,
      fecha: this.fecha,
      genre: this.genre,
      reviews: this.reviews,
      cover: this.cover
    };
  }
}
class Artista {
  constructor(id, name, albums, foto) {
    this.id = id;
    this.name = name;
    this.albums = albums;
    this.foto = foto;
  }
  toAPIFormat() {
    return {
      name: this.name,
      albums: this.albums,
      picture: this.foto
    };
  }
}
async function getArtistById(id) {
  const rawArtist = await fetchArtistById(id);
  return rawArtist ? new Artista(rawArtist._id, rawArtist.name, rawArtist.albums, rawArtist.picture) : null;
}
async function getAlbumAvgRating(id) {
  const data = await fetchAlbumAvgRating(id);
  return Math.floor(data.averageRating);
}
async function getAlbumsPage(page, limit, pattern) {
  let response = await fetchAlbumsPage(page, limit, pattern);
  return [response.albums.map((album) => new Album(album._id, album.title, album.artist, new Date(album.fecha), album.genre, album.reviews, album.cover)), response.total];
}
async function getArtistsPage(page, limit, pattern) {
  let response = await fetchArtistsPage(page, limit, pattern);
  return [response.artists.map((artist) => new Artista(artist._id, artist.name, artist.albums, artist.picture)), response.total];
}

export { getArtistById as a, getAlbumAvgRating as b, getArtistsPage as c, getAlbumsPage as g };
//# sourceMappingURL=APIAdapter-YRbIakT0.js.map
