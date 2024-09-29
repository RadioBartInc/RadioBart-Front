import { error } from '@sveltejs/kit';
import { getArtistById, getAlbumAvgRating, fetchAlbumsById} from '@src/api/APIAdapter'; // Adjust imports as necessary
import type { Artista } from '@src/models/ArtistaClass'; // Import your Artista model
import type { Album } from '@src/models/AlbumClass'; // Import your Album model

export async function load({ params }: { params: { id: string } }) {
    const artistId = params.id;

    const artist: Artista | null = await getArtistById(artistId);
    if (!artist) {
        throw error(404, 'Artist not found');
    }

    const albums: Album[] = await fetchAlbumsById(artist.albums);

    return {
        artist,
        albums
    };
}
